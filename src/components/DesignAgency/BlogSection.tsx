"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface IBlogPost {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  featured_image: string;
  created_date: string;
  views: number;
}

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Lekérjük az összes blogot
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?limit=1000`, {
          cache: "no-store",
        });
        const data = await res.json();

        if (data?.success && data?.data?.blogs) {
          // Dátum szerint csökkenő sorrendbe rendezve
          const sorted = [...data.data.blogs].sort(
            (a: IBlogPost, b: IBlogPost) =>
              new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
          );

          // Csak a 3 legújabbat tartjuk meg
          setBlogs(sorted.slice(0, 3));
        }
      } catch (error) {
        console.error("Hiba a blogok lekérése közben:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <section className="blog-area-2">
      <div className="container">
        <div className="blog-area-2-inner section-spacing">
          {/* Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">ARTICOLE ȘI NOUTĂȚI
</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">Blog și Știri</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href="/blog"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href="/blog"
                >
                  Vezi Toate Articolele

                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href="/blog"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="blog-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="container">
              <div className="blog-wrapper">
                 {blogs.map((post,index) => (
                  <article
                    className="blog-2 fade-anim"
                    suppressHydrationWarning={true}
                    key={post?.id}
                    data-delay={`${0.3 + index * 0.15}`}
                    data-direction="right"
                  >
                    <div className="thumb">

                      <Link href={`/blog/${post.slug}`}>
                        <img src={`https://admin.languagecenter.ro/uploads/blog/${post.featured_image}`}  alt={post.title} />
                      </Link>
                    </div>
                    <div className="content-wrapper">
                      <div className="content">
                        <h2 className="title">
                          <Link href={`/blog/${post.slug}`}> {post.title}</Link>
                        </h2>
                      </div>
                      <div className="btn-wrapper">
                        <Link
                          className="t-btn t-btn-circle"
                          href={`/blog/${post.slug}`}>
                        
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  );
};

export default BlogSection;
