"use client";
import { IBlog } from "@/constant/DesignAgency/blog/blogData";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";
import { useState } from "react";

interface BlogSectionProps {
  data: IBlog[];
}

const BlogSection = ({ data: blogData }: BlogSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Számítsd ki az összes oldal számát
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Számítsd ki az aktuális oldalon megjelenítendő blogokat
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Oldalváltás kezelése
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Görgetés az oldal tetejére
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
      // Ha kevesebb vagy egyenlő mint 5 oldal, mindegyiket mutasd
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Ha több mint 5 oldal, smart pagination
      if (currentPage <= 3) {
        // Első 3 oldal
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Utolsó 3 oldal
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Középső oldalak
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
                    <article className="blog fade-anim" key={post?.id}>
                      <div className="thumb">
                        <span className="tag">{post?.tag}</span>
                        <Link href={post?.url}>
                          <img src={post?.image} alt="blog" />
                        </Link>
                      </div>
                      <div className="content-wrapper">
                        <div className="content">
                          <div className="meta">
                            <span className="date">{post?.date}</span>
                            <span className="comments">
                              {post?.comments} Comentarii
                            </span>
                          </div>
                          <h2 className="title">
                            <Link href={post?.url}>{post?.title}</Link>
                          </h2>
                          <div className="text">{post?.text}</div>
                          <Link className="t-btn t-btn-primary" href={post?.url}>
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

            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;