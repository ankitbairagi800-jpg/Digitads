"use client";

import { useEffect, useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  useEffect(() => {
    // Determine URL and title only on the client side to avoid hydration mismatch
    setShareUrl(url || window.location.href);
    setShareTitle(title || document.title);
  }, [url, title]);

  if (!shareUrl) return null;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", margin: "20px 0" }}>
      <span style={{ fontWeight: 600, color: "var(--text-color, #fff)" }}>Share this:</span>
      
      {/* WhatsApp */}
      <a 
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#fff",
          textDecoration: "none",
          transition: "transform 0.2s ease"
        }}
        aria-label="Share on WhatsApp"
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <i className="fa-brands fa-whatsapp" style={{ fontSize: "20px" }}></i>
      </a>

      {/* LinkedIn */}
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#0077b5",
          color: "#fff",
          textDecoration: "none",
          transition: "transform 0.2s ease"
        }}
        aria-label="Share on LinkedIn"
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <i className="fa-brands fa-linkedin-in" style={{ fontSize: "18px" }}></i>
      </a>

      {/* Twitter / X */}
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#000",
          color: "#fff",
          border: "1px solid #333",
          textDecoration: "none",
          transition: "transform 0.2s ease"
        }}
        aria-label="Share on Twitter"
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <i className="fa-brands fa-x-twitter" style={{ fontSize: "18px" }}></i>
      </a>

      {/* Facebook */}
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#1877f2",
          color: "#fff",
          textDecoration: "none",
          transition: "transform 0.2s ease"
        }}
        aria-label="Share on Facebook"
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <i className="fa-brands fa-facebook-f" style={{ fontSize: "18px" }}></i>
      </a>
    </div>
  );
}
