import React from "react";

export const Koberec = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="none"
    style={{ width: '48px' }}
  >
    {/* Styly přepsané do JSX tříd */}
    <style>{`
      .cls-1 { fill: #e0e0e0; }
      .cls-2 { fill: #bdbdbd; }
      .cls-3 { fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 4px; }
      .cls-4 { fill: #ec3a8f; }
      .cls-5 { fill: #eee; }
      .cls-6 { fill: #f9c4dd; }
    `}</style>

    {/* Zbytek SVG (včetně <g id="close">) */}
    <path className="cls-1" d="M230.79,70.05v158.53H62.35l-23.12-26.42v-125.5c0-18.24,14.79-33.03,33.03-33.03h13.21c10.94,0,19.81,8.87,19.82,19.82v6.61h125.5Z"/>
    <path className="cls-2" d="M132.66,130.46l29.72-29.72,4.67,4.67-29.72,29.72-4.67-4.67Z"/>
    {/* ... (sem vlož všechny ostatní <path> tagy s cls-* zachovány) */}
    <path className="cls-4" d="M236.8,182.17c-22.32,0-40.41,18.09-40.41,40.41s18.09,40.41,40.41,40.41,40.41-18.1,40.41-40.41-18.09-40.41-40.41-40.41Z"/>
    <path className="cls-6" d="M196.39,222.58c0,6.68,1.64,13.26,4.81,19.14,4.04,1.18,8.22,1.79,12.43,1.78,24.29,0,43.98-19.69,43.98-43.98,0-4.27-.62-8.52-1.84-12.62-5.84-3.11-12.36-4.73-18.98-4.72-22.32,0-40.41,18.09-40.41,40.41Z"/>
    
    {/* Close tlačítko */}
    <g id="close">
      <path className="cls-3" d="M223.56,242.2c-.93.05-1.84-.25-2.55-.86-1.39-1.4-1.39-3.66,0-5.06l30.46-30.46c1.45-1.35,3.72-1.28,5.07.17,1.22,1.31,1.3,3.32.17,4.71l-30.64,30.64c-.7.6-1.6.91-2.51.86h0Z"/>
      <path className="cls-3" d="M253.99,242.2c-.94,0-1.84-.38-2.51-1.04l-30.46-30.46c-1.29-1.51-1.11-3.77.39-5.06,1.34-1.15,3.32-1.15,4.67,0l30.64,30.46c1.45,1.35,1.52,3.63.17,5.07-.05.06-.11.11-.17.17-.75.65-1.74.96-2.73.86h0Z"/>
    </g>
  </svg>
);
