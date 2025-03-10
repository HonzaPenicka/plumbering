import { FunctionComponent } from 'react';

export const PipeIcon: FunctionComponent = () => {
  return (
    <svg
      fill="#000000"
      width="85"
      height="85"
      viewBox="0 0 24 24"
      id="pipe-4"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="primary"
        d="M4,16V4H8V16h4V11a4,4,0,0,1,4-4h5v4H16v5a4,4,0,0,1-4,4H8A4,4,0,0,1,4,16Z"
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
        d="M21,12V6M9,4H3"
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
