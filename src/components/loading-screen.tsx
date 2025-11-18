"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 150);

    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsHidden(true), 300);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`loading ${isHidden ? "hidden" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-spinner"></div>
          <span className="loading-text">PT</span>
        </div>
        <div className="loading-bar-container">
          <div
            className="loading-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="loading-message">Loading your experience...</p>
      </div>
    </div>
  );
}
