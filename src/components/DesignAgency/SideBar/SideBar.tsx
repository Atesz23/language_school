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
  // Wrapper funkció a linkekhez, ami bezárja a menüt
  const handleLinkClick = () => {
    handleSidebar();
  };

  return (
    <>
      <aside className="fix">
        <div className={`side-info ${isOpen ? "info-open" : ""}`}>
          <div className="side-info-content">
            {/* Header */}
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link href="/" onClick={handleLinkClick}>
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

            {/* Mobile menu container */}
            <div className={`mobile-menu fix ${menuClass}`} onClick={(e) => {
              // Ha a kattintás egy linkre történt, zárjuk be a menüt
              const target = e.target as HTMLElement;
              if (target.tagName === 'A' || target.closest('a')) {
                handleSidebar();
              }
            }}>
              <NestedAccordion items={sidebarData.menus} />
            </div>

            {/* Contact Info */}
            <div className="offset-widget-box">
              <h2 className="title">Informații</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="text">
                    <Link href={sidebarData?.contact?.phone?.href} onClick={handleLinkClick}>
                      {sidebarData?.contact?.phone?.text}
                    </Link>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">
                    <a href={sidebarData?.contact?.email?.href} onClick={handleLinkClick}>
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
              <h2 className="title">Rețele sociale</h2>
              <div className="social-links">
                {sidebarData.social.map((social, i) => (
                  <a key={i} href={social.href} onClick={handleLinkClick}>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
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