import {
  authorInfo,
  IRecentBlog,
  ISocialLink,
  recentBlogs,
} from "@/constant/DesignAgency/blog/sidebarData";
import Link from "next/link";
import React from "react";

const BlogSidebar: React.FC = () => {
  return (
    <div className="blog-sidebar" suppressHydrationWarning={true}>
      <div className="blog-sidebar-box fade-anim" suppressHydrationWarning={true}>
        {/* Author Info Box */}
        <div className="author-info">
          <div className="thumb">
            <img src={authorInfo?.image} alt="Autor" />
          </div>
          <div className="content">
            <h3 className="name">{authorInfo?.name}</h3>
            <span className="designation">{authorInfo?.designation}</span>
            <p className="text">{authorInfo?.text}</p>
            <div className="social-links">
              {authorInfo?.socialLinks.map(
                (link: ISocialLink, index: number) => (
                  <Link href={link?.url} key={index}>
                    <i className={`fa-brands ${link?.icon}`}></i>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
     
      {/* Recent Blogs Box */}
      <div className="blog-sidebar-box fade-anim" suppressHydrationWarning={true}>
        <h3 className="title-box">Articole recente</h3>
        <div className="blogs-wrapper">
          {recentBlogs.map((blog: IRecentBlog, idx: number) => (
            <article className="blog" key={idx}>
              <div className="thumb">
                <Link href={blog?.url}>
                  <img src={blog?.image} alt="Articol recent" />
                </Link>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <div className="meta">
                    <span className="date">{blog?.date}</span>
                  </div>
                  <h2 className="title">
                    <Link href={blog?.url}>{blog?.title}</Link>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default BlogSidebar;