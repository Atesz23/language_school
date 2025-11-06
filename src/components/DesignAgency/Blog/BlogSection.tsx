"use client";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";
import { useState } from "react";

// Blog típus az API-ból
interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  featured_image: string;
  created_date: string; // "15 Octombrie, 2025"
  created_date_raw: string;
  views: number;
  published: boolean;
}

interface BlogSectionProps {
  data: Blog[];
}

const BlogSection = ({ data: blogData }: BlogSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Top 3 legolvasottabb blog
  const topViewedBlogs = [...blogData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // Számítsd ki az összes oldal számát
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Számítsd ki az aktuális oldalon megjelenítendő blogokat
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Oldalváltás kezelése
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Előző oldal
  const handlePrevPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Következő oldal
  const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generálj oldalszámokat (max 5 látható gomb)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  return (
    <section className="blog-area-7">
      <div className="container">
        <div className="work-area-7-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="main-content">
              <div className="blogs-wrapper-box fade-anim">
                <div className="blogs-wrapper-main">
                  {currentBlogs.map((post) => (
                    <article className="blog fade-anim" key={post.id}>
                      <div className="thumb">
                        <Link href={`/blog/${post.slug}`}>
                          <img 
                            src={'https://admin.languagecenter.ro/uploads/blog/'+post.featured_image} 
                            alt={post.title} 
                          />
                        </Link>
                      </div>
                      <div className="content-wrapper">
                        <div className="content">
                          <div className="meta">
                            <span className="date">{post.created_date}</span>
                            <span className="views">
                              <i className="fa-regular fa-eye"></i> {post.views} vizualizări
                            </span>
                          </div>
                          <h2 className="title">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>
                          <div className="text">{post.short_description}</div>
                          <Link className="t-btn t-btn-primary" href={`/blog/${post.slug}`}>
                            Citește mai mult
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination fade-anim">
                  {/* Előző gomb */}
                  <Link
                    href="#"
                    onClick={handlePrevPage}
                    className={currentPage === 1 ? "disabled" : ""}
                  >
                    <img src="/assets/imgs/icon/icon-12.webp" alt="left" />
                  </Link>

                  {/* Oldalszámok */}
                  {getPageNumbers().map((pageNumber) => (
                    <Link
                      href="#"
                      key={pageNumber}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                      className={currentPage === pageNumber ? "active" : ""}
                    >
                      {pageNumber}
                    </Link>
                  ))}

                  {/* Következő gomb */}
                  <Link
                    href="#"
                    onClick={handleNextPage}
                    className={currentPage === totalPages ? "disabled" : ""}
                  >
                    <img src="/assets/imgs/icon/icon-13.webp" alt="right" />
                  </Link>
                </div>
              )}
            </div>

            {/* BlogSidebar-nak átadjuk a top 3 legolvasottabb blogot */}
            <BlogSidebar recentBlogs={topViewedBlogs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;