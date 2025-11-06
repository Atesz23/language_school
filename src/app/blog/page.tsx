// app/blog/page.tsx
"use client";
import BlogSection from "@/components/DesignAgency/Blog/BlogSection";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import { ReactElement, useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  featured_image: string;
  created_date: string;
  created_date_raw: string;
  views: number;
  published: boolean;
}

const BlogPage = (): ReactElement => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog?limit=100&published=true");
        const result = await response.json();
       
        if (result.success && result.data) {
          setBlogs(result.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
  <>
  <Breadcrumb title="BLOG" subTitle="Articole" pageName="ARTICOLE ȘI SFATURI" />
  <section className="blog-area-7">
    <div className="container">
      <div className="work-area-7-inner section-spacing">
        <div className="loading-wrapper">
          <div className="loading-spinner"></div>
          <p className="loading-text">Se încarcă articolele...</p>
        </div>
      </div>
    </div>
  </section>
</>


    );

      
  }
console.log(blogs);
  return (
    <>
      <Breadcrumb title="BLOG" subTitle="Articole" pageName="ARTICOLE ȘI SFATURI" />
      <BlogSection data={blogs} />
    </>
  );
};

export default BlogPage;