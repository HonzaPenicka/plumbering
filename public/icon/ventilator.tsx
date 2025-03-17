import { FunctionComponent } from 'react';

export const Ventilator: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" style={{ width: '48px' }}>
      <defs>
        <style>{`
          .cls-1 { fill: #757575; }
          .cls-2 { fill: #abe0f9; }
          .cls-3 { fill: #c9c9c9; }
          .cls-4 { fill: #fff; }
          .cls-5 { fill: #bdbdbd; }
          .cls-6 { fill: #ddd; }
          .cls-7 { fill: #9e9e9e; }
          .cls-8 { fill: #00adef; }
        `}</style>
      </defs>
      <path className="cls-5" d="M212.76,265.84c14.56,0,26.37-11.8,26.37-26.37V62.21c0-14.56-11.81-26.37-26.37-26.37H70.41c-18.44,0-33.43,15-33.43,33.43v163.13c0,18.43,15,33.43,33.43,33.43h163.14-20.78Z" />
      <path className="cls-6" d="M237.38,248.92c1.13-2.93,1.75-6.12,1.75-9.45V62.21c0-3.33-.62-6.51-1.75-9.45-1.23-.29-2.52-.44-3.84-.44H70.41c-9.36,0-16.95,7.59-16.95,16.95v163.13c0,9.36,7.59,16.95,16.95,16.95h163.13c1.32,0,2.61-.16,3.84-.44Z" />
      <circle className="cls-1" cx="152" cy="151.8" r="81.94" />
      <circle className="cls-4" cx="152" cy="150.68" r="16.45" />
      <circle className="cls-1" cx="226.56" cy="228.36" r="10.18" />
    </svg>
  );
};
