"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/" aria-label="Digitalads Home" onClick={closeMenu}>
              <h2>
                Digital<span>ads</span>
              </h2>
            </Link>
          </div>
          <ul
            className={`nav-menu ${isMenuOpen ? "active" : ""}`}
            id="navMenu"
            role="menubar"
          >
            {isMenuOpen && (
              <button
                className="nav-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
            <li role="none">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link
                href="/services"
                className={`nav-link ${pathname === "/services" ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li role="none">
              <Link
                href="/case-studies"
                className={`nav-link ${
                  pathname === "/case-studies" ? "active" : ""
                }`}
                role="menuitem"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
            </li>
            <li role="none">
              <Link
                href="/blog"
                className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                Blog <span className="blog-nav-badge">NEW</span>
              </Link>
            </li>
            <li role="none">
              <Link
                href="/news"
                className={`nav-link ${pathname.startsWith("/news") ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                News <span className="blog-nav-badge" style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}>WEEKLY</span>
              </Link>
            </li>
            <li role="none">
              <Link
                href="/faq"
                className={`nav-link ${pathname === "/faq" ? "active" : ""}`}
                role="menuitem"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </li>
            <li role="none">
              <Link
                href="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
                role="menuitem"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link href="/contact" className="btn btn-primary">
              Get Free Audit
            </Link>
            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
