export interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  featured_image: string;
  created_date: string; // "15 Octombrie, 2025"
  created_date_raw: string; // "2025-10-15 10:00:00"
  views: number;
  published: boolean;
}

export interface BlogDetail extends Blog {
  long_description: string;
  updated_date: string;
  published_date: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

export interface BlogListResponse {
  statusCode: number;
  success: boolean;
  messages: string[];
  data: {
    total_count: number;
    limit: number;
    offset: number;
    returned_count: number;
    blogs: Blog[];
  };
}

export interface BlogDetailResponse {
  statusCode: number;
  success: boolean;
  messages: string[];
  data: {
    blog: BlogDetail;
  };
}

export interface ApiError {
  statusCode: number;
  success: false;
  messages: string[];
  data: null;
}