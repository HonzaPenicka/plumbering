import { FunctionComponent } from 'react';

export const HourIcon: FunctionComponent = () => {
  return (
    <svg
      fill="#000000"
      width="85"
      height="85"
      viewBox="0 0 24 24"
      id="hour-glass"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="primary"
        d="M17,7V3H7V7a5,5,0,0,0,5,5h0A5,5,0,0,0,17,7Zm-5,5h0a5,5,0,0,0-5,5v4H17V17A5,5,0,0,0,12,12Z"
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
        d="M5,3H19M5,21H19"
        style={{
          fill: 'none',
          stroke: 'rgb(44, 169, 188)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
    </svg>
  );
};
