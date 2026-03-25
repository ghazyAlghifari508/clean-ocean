import React from 'react';

export default function Coral({ className = "", color = "#ff7f50" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`animate-pulse origin-bottom ${className}`}
      style={{ overflow: 'visible' }}
    >
      <path 
        d="M50 100 C40 80, 20 60, 30 30 C35 15, 45 20, 42 35 C40 50, 45 70, 50 80 C55 70, 60 50, 58 35 C55 20, 65 15, 70 30 C80 60, 60 80, 50 100 Z" 
        fill={color}
      />
      <circle cx="35" cy="40" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="65" cy="40" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="50" cy="85" r="4" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
