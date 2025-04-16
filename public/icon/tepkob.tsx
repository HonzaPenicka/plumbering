import React from "react";

export const TepKob = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '48px' }}
  >
    <defs>
      <style>
        {`
          .cls-1 { fill: #757575; }
          .cls-2 { opacity: .05; }
          .cls-3 { fill: #cbe9f4; }
          .cls-4 { fill: #00adef; }
          .cls-5 { fill: #e0e0e0; }
          .cls-6 { fill: #bdbdbd; }
          .cls-7 { opacity: .2; }
          .cls-8 { fill: #eee; }
          .cls-9 { opacity: .1; }
          .cls-10 { fill: #d1d1d1; }
        `}
      </style>
    </defs>
    {/* Right side markers */}
    {[78.87, 90.72, 102.58, 114.43, 126.29, 138.14, 150, 159.88, 171.73, 183.59, 195.44, 207.3, 219.15].map((y) => (
      <path
        key={y}
        className="cls-1"
        d={`M258.23,${y}c0-1.09.88-1.98,1.98-1.98h15.81c1.09,0,1.98.88,1.98,1.98s-.88,1.98-1.98,1.98h-15.81c-1.09,0-1.98-.88-1.98-1.98Z`}
      />
    ))}
    
    {/* Left side markers */}
    {[68.99, 80.85, 92.7, 104.56, 116.41, 128.27, 140.12, 150, 161.86, 173.71, 185.57, 197.42, 209.28, 221.13, 232.99].map((y) => (
      <path
        key={y}
        className="cls-1"
        d={`M29.04,${y}c0-1.09.88-1.98,1.98-1.98h15.81c1.09,0,1.98.88,1.98,1.98s-.88,1.98-1.98,1.98h-15.81c-1.09,0-1.98-.88-1.98-1.98Z`}
      />
    ))}

    {/* Additional right side markers */}
    <path className="cls-1" d="M258.23,231.01c0-1.09.88-1.98,1.98-1.98h15.81c1.09,0,1.98.88,1.98,1.98s-.88,1.98-1.98,1.98h-15.81c-1.09,0-1.98-.88-1.98-1.98Z"/>
    <path className="cls-1" d="M258.23,67.01c0-1.09.88-1.98,1.98-1.98h15.81c1.09,0,1.98.88,1.98,1.98s-.88,1.98-1.98,1.98h-15.81c-1.09,0-1.98-.88-1.98-1.98Z"/>
    
    {/* Main container */}
    <path className="cls-8" d="M40.89,231.01V68.99c0-3.26,2.67-5.93,5.93-5.93h213.39c3.26,0,5.93,2.67,5.93,5.93v162.02c0,3.26-2.67,5.93-5.93,5.93H46.82c-3.26,0-5.93-2.67-5.93-5.93Z"/>
    
    {/* Horizontal bands */}
    <path className="cls-7" d="M40.89,202.68h225.25v14.5H40.89v-14.5Z"/>
    <path className="cls-2" d="M40.89,80.85h225.25v14.5H40.89v-14.5Z"/>
    <path className="cls-9" d="M40.89,183.82h225.25v8.7H40.89v-8.7Z"/>
    <path className="cls-9" d="M40.89,105.5h225.25v8.7H40.89v-8.7Z"/>
    <path className="cls-2" d="M40.89,156.26h225.25v18.85H40.89v-18.85Z"/>
    <path className="cls-7" d="M40.89,122.91h225.25v18.85H40.89v-18.85Z"/>
    
    {/* Center element */}
    <path className="cls-10" d="M98.4,223.11v2.71c0,2.56.6,5.09,1.74,7.39l11.47,22.94v13.21h13.21v-13.21l11.47-22.94c1.15-2.3,1.74-4.82,1.74-7.39v-2.71h-39.64Z"/>
    <path className="cls-6" d="M111.61,269.35h13.21v30.65h-13.21v-30.65Z"/>
    <path className="cls-1" d="M111.61,269.35h13.21v3.3h-13.21v-3.3Z"/>
    
    {/* Center vertical element */}
    <g className="cls-7">
      <path className="cls-4" d="M138.04,63.06v160.04h-39.64V63.06"/>
    </g>
    
    <path className="cls-5" d="M118.22,242.92c-3.65,0-6.61,2.96-6.61,6.61v19.82h13.21v-19.82c0-3.65-2.96-6.61-6.61-6.61Z"/>
    
    {/* Center horizontal bands */}
    <path className="cls-7" d="M98.4,202.52h39.63v14.65h-39.63v-14.65Z"/>
    <path className="cls-3" d="M98.4,80.7h39.63v14.5h-39.63v-14.5Z"/>
    <path className="cls-9" d="M98.4,183.67h39.63v8.7h-39.63v-8.7Z"/>
    <path className="cls-9" d="M98.4,105.35h39.63v8.7h-39.63v-8.7Z"/>
    <path className="cls-3" d="M98.4,156.11h39.63v18.85h-39.63v-18.85Z"/>
    <path className="cls-7" d="M98.4,122.76h39.63v18.85h-39.63v-18.85Z"/>
  </svg>
);
