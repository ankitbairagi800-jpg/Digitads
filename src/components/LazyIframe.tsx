"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  width?: string | number;
  height?: string | number;
  title: string;
  style?: React.CSSProperties;
  className?: string;
  ariaLabel?: string;
}

export default function LazyIframe({
  src,
  width = "100%",
  height = "100%",
  title,
  style,
  className,
  ariaLabel,
}: LazyIframeProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported (client-side)
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "300px", // Preload when iframe is 300px from viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const placeholderStyle: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    backgroundColor: "#16181f",
    borderRadius: style?.borderRadius || "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255, 255, 255, 0.25)",
    fontSize: "14px",
    border: style?.border || "1px solid #27272a",
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div ref={containerRef} style={isIntersecting ? undefined : placeholderStyle} className={className}>
      {isIntersecting ? (
        <iframe
          src={src}
          width={width}
          height={height}
          style={style}
          title={title}
          aria-label={ariaLabel}
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <i className="fa-regular fa-map" style={{ fontSize: "20px" }} aria-hidden="true"></i>
          <span>Loading Map...</span>
        </div>
      )}
    </div>
  );
}
