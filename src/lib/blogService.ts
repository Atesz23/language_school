// lib/blogService.ts
import crypto from 'crypto';

const PHP_API_URL = process.env.PHP_API_URL;
const API_TOKEN = process.env.API_TOKEN || '';
const API_SECRET = process.env.API_SECRET || '';
const DEV_MODE = process.env.DEV_MODE === 'true';

function generateSignature(data: string, timestamp: string): string {
  const payload = `${timestamp}.${data}`;
  return crypto.createHmac('sha256', API_SECRET).update(payload).digest('hex');
}

function getApiHeaders(queryString: string = ''): HeadersInit {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = generateSignature(queryString, timestamp);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (!DEV_MODE) {
    headers['X-API-Token'] = API_TOKEN;
    headers['X-Timestamp'] = timestamp;
    headers['X-Signature'] = signature;
  }
  
  return headers;
}

// ✅ Közvetlenül a PHP API-hoz - működik build időben!
export async function getBlogBySlug(slug: string) {
  if (!slug) return null;

  try {
    const queryString = `slug=${slug}`;
    const headers = getApiHeaders(queryString);
    const phpUrl = `${PHP_API_URL}/blog/get_blog_by_slug.php?${queryString}`;

    console.log('🔄 Fetching blog from PHP API:', phpUrl);

    const response = await fetch(phpUrl, {
      method: 'GET',
      headers,
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      console.error(`❌ PHP API error (getBlogBySlug): ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    console.log('✅ Blog fetched successfully');
    return data;

  } catch (error) {
    console.error('❌ getBlogBySlug fetch error:', error);
    return null;
  }
}

// ✅ Top 3 legnézettebb blog
export async function getTopViewedBlogs() {
  try {
    const headers = getApiHeaders('');
    const phpUrl = `${PHP_API_URL}/blog/get_top_viewed.php`;

    console.log('🔄 Fetching top blogs from PHP API:', phpUrl);

    const response = await fetch(phpUrl, {
      method: 'GET',
      headers,
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      console.error(`❌ PHP API error (getTopViewedBlogs): ${response.status}`);
      return null;
    }

    const data = await response.json();
    console.log('✅ Top blogs fetched successfully');
    return data;

  } catch (error) {
    console.error('❌ getTopViewedBlogs fetch error:', error);
    return null;
  }
}