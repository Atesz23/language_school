"use client";

import React from "react";
import Link from "next/link";
import sidebarData from "@/constant/DesignAgency/sidebar/sidebarData";
import NestedAccordion from "@/components/DesignAgency/common/NestedAccordion";

interface SideBarProps {
  isOpen: boolean;
  handleSidebar: () => void;
  menuClass?: string;
}

const Sidebar = ({
  isOpen,
  handleSidebar,
  menuClass = "d-xl-none",
}: SideBarProps) => {
  return (
    <>
      <aside className="fix">
        <div className={`side-info ${isOpen ? "info-open" : ""}`}>
          <div className="side-info-content">
            {/* Header */}
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link href="/design-agency">
                  <img src={sidebarData.logo} alt="site logo" style={{width:"150px",maxWidth:"unset"}}/>
                </Link>
              </div>
              <button
                id="side-info-close"
                className="side-info-close"
                onClick={handleSidebar}
              >
                <i className={sidebarData.closeIcon}></i>
              </button>
            </div>

            {/* Mobile menu container (if needed for JS menu toggle logic) */}
            <div className={`mobile-menu fix ${menuClass}`}>
              <NestedAccordion items={sidebarData.menus} />
            </div>

      

            {/* Contact Info */}
            <div className="offset-widget-box">
              <h2 className="title">Information</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="text">
                    <Link href={sidebarData?.contact?.phone?.href}>
                      {sidebarData?.contact?.phone?.text}
                    </Link>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">
                    <a href={sidebarData?.contact?.email?.href}>
                      {sidebarData?.contact?.email?.text}
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">{sidebarData?.contact?.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="offset-widget-box">
              <h2 className="title">Connect Us On</h2>
              <div className="social-links">
                {sidebarData.social.map((social, i) => (
                  <a key={i} href={social.href}>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Logo */}
            {/* <div className="offset-logo-footer">
              <img src={sidebarData.footerLogo} alt="footer logo" />
            </div> */}
          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`offcanvas-overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={handleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
