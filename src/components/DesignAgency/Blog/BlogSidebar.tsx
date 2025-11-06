import Link from "next/link";
import React from "react";

// Blog típus az API-ból
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

interface BlogSidebarProps {
  recentBlogs: Blog[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ recentBlogs }) => {
  return (
    <div className="blog-sidebar" suppressHydrationWarning={true}>
      {/* Recent Blogs Box */}
      <div className="blog-sidebar-box fade-anim" suppressHydrationWarning={true}>
        <h3 className="title-box">Cele mai citite articole</h3>
        <div className="blogs-wrapper">
          {recentBlogs.map((blog: Blog) => (
            <article className="blog" key={blog.id}>
              <div className="thumb">
                <Link href={`/blog/${blog.slug}`}>
                  <img 
                    src={`https://admin.languagecenter.ro/uploads/blog/${blog.featured_image}`}
                    alt={blog.title}
                    className="h-100 object-fit-cover" 
                  />
                </Link>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <div className="meta">
                    <span className="date">{blog.created_date}</span>
                    <span className="views">
                      <i className="fa-regular fa-eye"></i> {blog.views}
                    </span>
                  </div>
                  <h2 className="title">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Opțional: Categorii sau Tags */}
      {/* <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Categorii</h3>
        <div className="categories">
          <Link href="/blog/category/engleza">Engleză</Link>
          <Link href="/blog/category/germana">Germană</Link>
          <Link href="/blog/category/franceza">Franceză</Link>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSidebar;