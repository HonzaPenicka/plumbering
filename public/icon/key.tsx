import { FunctionComponent } from 'react';

export const KeyIcon: FunctionComponent = () => {
  return (
    <svg
      fill="#000000"
      width="85"
      height="85"
      viewBox="0 0 24 24"
      id="key-lock-rect"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="secondary"
        d="M13.52,13.59l.24,1.21a1,1,0,0,1-1,1.2H11.22a1,1,0,0,1-1-1.2l.24-1.21a3,3,0,1,1,3,0Z"
        style={{
          fill: 'none',
          stroke: 'rgb(43, 127, 255)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
      <rect
        id="primary"
        x="3"
        y="3"
        width="18"
        height="18"
        rx="1"
        transform="translate(24) rotate(90)"
        style={{
          fill: 'none',
          stroke: 'rgb(0, 0, 0)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></rect>
    </svg>
  );
};
