import { FunctionComponent } from 'react';

export const LampIcon: FunctionComponent = () => {
  return (
    <svg
      fill="#000000"
      width="85"
      height="85"
      viewBox="0 0 24 24"
      id="lamp"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="primary"
        d="M9,21h6m-3-9v9"
        style={{
          fill: 'none',
          stroke: 'rgb(0, 0, 0)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
      <path
        id="secondary"
        d="M18,12,16.44,3.81a1,1,0,0,0-1-.81H8.54a1,1,0,0,0-1,.81L6,12Zm-2,0v3"
        style={{
          fill: 'none',
          stroke: 'rgb(43, 127, 255)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
    </svg>
  );
};
