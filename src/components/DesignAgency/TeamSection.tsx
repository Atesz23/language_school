import React from "react";

interface TeamProps {
  all?: boolean;
}
const TeamSection: React.FC<TeamProps> = ({ all }) => {
  const images = [
    "/assets/imgs/about/12.jpeg",
    "/assets/imgs/about/13.jpeg",
    "/assets/imgs/about/14.jpeg",
    "/assets/imgs/about/15.jpeg",
    "/assets/imgs/about/16.jpeg",
    "/assets/imgs/about/17.jpeg",
    "/assets/imgs/about/18.jpeg",
  ];
  return (
    <section className="team-area-2">
      <div className="container">
        <div
          className={`team-area-2-inner ${
            all ? "section-spacing-top" : "section-spacing-top"
          }`}
        >
          <div className="section-header">
              <div
                className="section-title-wrapper"
                suppressHydrationWarning={true}
              >
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">Cunoaște echipa noastră</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">ECHIPA NOASTRĂ</h2>
                </div>
              </div>
            </div>

          <div
            className={`team-wrapper-box ${
              all ? "mt-0 pt-0 border-0" : ""
            } `}
            suppressHydrationWarning={true}
          >
            <div className="team-wrapper" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '20px' 
            }}>
               {images.map((image, idx) => (
                <div
                  className="team-box-2-simple"
                  suppressHydrationWarning={true}
                  key={idx}
                >
                  <div className="thumb" style={{ 
                    aspectRatio: '3/4',
                    overflow: 'hidden'
                  }}>
                    <img
                       src={image} 
                      alt="team member"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
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

export default TeamSection;