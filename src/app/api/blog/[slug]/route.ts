// app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { BlogDetailResponse } from '@/types/blog';

const PHP_API_URL = process.env.PHP_API_URL + "/blog/get_blog_by_slug.php";
const API_TOKEN = process.env.API_TOKEN || '';
const API_SECRET = process.env.API_SECRET || '';
const DEV_MODE = process.env.DEV_MODE === 'true';

function generateSignature(data: string, timestamp: string): string {
  const payload = `${timestamp}.${data}`;
  return crypto.createHmac('sha256', API_SECRET).update(payload).digest('hex');
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 400,
          messages: ['Slug parameter is required'],
          data: null
        },
        { status: 400 }
      );
    }

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const queryString = `slug=${slug}`;
    const signature = generateSignature(queryString, timestamp);

    const phpUrl = `${PHP_API_URL}?${queryString}`;

    console.log('Fetching blog post:', phpUrl);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Only add security headers if not in DEV_MODE
    if (!DEV_MODE) {
      headers['X-API-Token'] = API_TOKEN;
      headers['X-Timestamp'] = timestamp;
      headers['X-Signature'] = signature;
    }

    const response = await fetch(phpUrl, {
      method: 'GET',
      headers,
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.messages?.[0] || `PHP API error: ${response.status}`);
    }

    const result: BlogDetailResponse = await response.json();
    
    return NextResponse.json(result, { 
      status: response.status,
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200'
      }
    });

  } catch (error) {
    console.error('Blog detail API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        statusCode: 500,
        messages: [error instanceof Error ? error.message : 'Server error'],
        data: null
      },
      { status: 500 }
    );
  }
}