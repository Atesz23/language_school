import React from "react";
import { CoursesData } from "@/constant/DesignAgency/courses";
import Link from "next/link";
import Image from "next/image";

interface CoursesProps {
  data: CoursesData;
  all?: boolean;
}

const CoursesSection: React.FC<CoursesProps> = ({ all, data: coursesData }) => {
  const displayCoursesData = all
    ? coursesData?.courses
    : coursesData?.courses.slice(0, 6);

  return (
    <>
 <section className="about-area-2">
  <div className="container">
    <div className="about-area-2-inner section-spacing-top">
      <div className="section-header">
        <div
          className="section-title-wrapper fade-anim"
          suppressHydrationWarning={true}
        >
          <div
            className="subtitle-wrapper"
            suppressHydrationWarning={true}
          >
            <span className="section-subtitle">CURSURILE NOASTRE</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">
              Pregătire Completă pentru Examene Internaționale
            </h2>
          </div>
          <div className="text-wrapper">
            <p className="text">
              Oferim cursuri de limbi străine adaptate fiecărui nivel, 
              pregătire intensivă pentru examene oficiale și simulări 
              complete pentru a-ți asigura succesul. Alege cursul potrivit 
              și începe călătoria ta spre fluență!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="courses-area-2">
        <div className="container">
          <div
            className={`courses-area-2-inner ${
              all ? "section-spacing" : "section-spacing"
            }`}
            style={{
              marginTop: "30px",
              paddingTop:"50px",
              marginBottom: " 20px",
              borderTop: "1px solid rgba(14, 15, 17, 0.14)",
            }}
          >
            {!all && (
              <div className="section-header">
                <div
                  className="section-title-wrapper fade-anim"
                  suppressHydrationWarning={true}
                >
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">
                      {coursesData?.subtitle}
                    </span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">{coursesData?.title}</h2>
                  </div>
                  <div className="text-wrapper">
                    <p className="text">{coursesData?.description}</p>
                  </div>
                </div>
                <div
                  className="btn-wrapper fade-anim"
                  suppressHydrationWarning={true}
                >
                  <div className="t-btn-group">
                    <Link
                      className="t-btn t-btn-circle"
                      href={coursesData?.coursesPageLink || "#"}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link
                      className="t-btn t-btn-primary"
                      href={coursesData?.coursesPageLink || "#"}
                    >
                      {coursesData?.coursesPageLinkTitle}
                    </Link>
                    <Link
                      className="t-btn t-btn-circle"
                      href={coursesData?.coursesPageLink || "#"}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`courses-wrapper-box fade-anim ${
                all ? "mt-0 pt-0 border-0" : ""
              }`}
              suppressHydrationWarning={true}
            >
              <div className="courses-grid">
                {displayCoursesData?.map((course, idx) => (
                  <div
                    className="course-card fade-anim"
                    suppressHydrationWarning={true}
                    key={idx}
                    data-delay={`0.${30 + idx * 15}`}
                  >
                    <Link
                      href={course?.link || "#"}
                      className="course-card-link"
                    >
                      <div className="course-image">
                        <Image
                          height={600}
                          width={600}
                          src={course?.image}
                          alt={course?.name || "course"}
                        />
                        <div className="course-overlay">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>

                      <div className="course-content">
                        <div className="course-features">
                          {course?.features?.slice(0, 3).map((feature, i) => (
                            <span key={i} className="feature-badge">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <h3 className="course-name">{course?.name}</h3>
                        {course?.nativeText && (
                          <p className="course-native-text">
                            {course.nativeText}
                          </p>
                        )}
                        <p className="course-description">
                          {course?.description}
                        </p>

                        <div className="course-levels">
                          <span className="levels-label">Niveluri:</span>
                          <div className="levels-list">
                            {course?.levels?.map((level, i) => (
                              <span key={i} className="level-badge">
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
