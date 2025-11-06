import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import BlogSidebar from "@/components/DesignAgency/Blog/BlogSidebar";
import { Metadata } from "next";

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  long_description: string;
  featured_image: string;
  created_date: string;
  views: number;
  meta_title: string;
  meta_description: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.slug}`, {
    cache: "no-store",
  });
  const data = await res.json();

  const blog = data?.data?.blog;

  if (!blog) {
    return {
      title: "Articol inexistent | Language Center",
      description: "Articolul nu a fost găsit.",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.short_description,
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // 🔹 1. Lekérjük az adott blogot
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`, {
    cache: "no-store",
  });
  const blogData = await blogRes.json();
  const blog = blogData?.data?.blog;

  // 🔹 2. Lekérjük a 3 legnézettebb blogot
  const topRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/get_top_viewed`, {
    cache: "no-store",
  });
  const topData = await topRes.json();
  const topBlogs = topData?.data?.blogs || [];

  if (!blog) {
    return (
      <section className="blog-area-7">
        <div className="container">
          <p>Articolul nu a fost găsit.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <Breadcrumb title="BLOG" subTitle="Articole" pageName={blog.title} />
      <section className="blog-area-7">
        <div className="container">
          <div className="work-area-7-inner section-spacing">
            <div className="section-content-wrapper">
              <div className="main-content">
                <article className="blog-details">
                  <h2 className="title main">{blog.title}</h2>
                  <div className="meta">
                    <span className="date">{blog.created_date}</span>
                    <span className="views">
                      <i className="fa-regular fa-eye"></i> {blog.views} vizualizări
                    </span>
                  </div>
                  <div className="thumb main">
                    <img
                      src={`https://admin.languagecenter.ro/uploads/blog/${blog.featured_image}`}
                      alt={blog.title}
                    />
                  </div>
                  <div
                    className="text-wrapper"
                    dangerouslySetInnerHTML={{ __html: blog.long_description }}
                  ></div>
                </article>
              </div>

              {/* 🔹 BlogSidebar – top 3 legnézettebb blog */}
              <BlogSidebar recentBlogs={topBlogs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
