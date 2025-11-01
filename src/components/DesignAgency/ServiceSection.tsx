"use client";

import React, { useState } from "react";
import Link from "next/link";

// Exam interface
export interface IExam {
  id: number;
  title: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  description: string;
  languages?: string;
  levels?: string;
}

export interface ExamData {
  subtitle: string;
  title: string;
  exams: IExam[];
}

interface ServiceProps {
  data: ExamData;
}

const ServiceSection: React.FC<ServiceProps> = ({ data: examData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="service-area-2" style={{backgroundColor:"transparent"}}>
      <div className="container">
        <div className="service-area-2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle" style={{color:"#000"}}>
                  {examData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title" style={{color:"#000"}}>{examData?.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href="/contact">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href="/contact">
                  Contactează-ne
                </Link>
                <Link className="t-btn t-btn-circle" href="/contact">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="services-wrapper service-hover-active">
              {examData?.exams?.map((exam: IExam, index: number) => (
                <div
                  key={exam.id}
                  className={`service-box-2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                  <Link href={exam?.link || "#"}>
                    <div className="header">
                      <h3 className="title">
                        {exam?.title}
                        <span className="number">{exam?.number}</span>
                      </h3>
                    </div>
                  </Link>
                  <div className="service-box-2-inner">
                    <div className="shape-1">
                      <img src={exam?.shapeImage} alt="shape" />
                    </div>
                    <div className="thumb h-auto">
                      <img src={exam?.thumb} alt={exam?.title} style={{objectFit:"contain"}}/>
                    </div>
                    <div className="content">
                      {/* Exam specific info */}
                      {exam?.levels && (
                        <div className="exam-info-item">
                          <strong>Nivele:</strong> {exam.levels}
                        </div>
                      )}
                      
                      {exam?.languages && (
                        <div className="exam-info-item">
                          <strong>Limbi:</strong> {exam.languages}
                        </div>
                      )}
                      
                      
                    </div>
                    <p className="text pt-3" style={{color:"#000"}}>{exam?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;