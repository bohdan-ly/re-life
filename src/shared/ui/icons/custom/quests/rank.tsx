import React from 'react';

export const Rank: React.FC<{
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}> = ({ width, height, fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width || 24}
      height={height || 24}
      className={className}
    >
      <g transform="translate(0,0)">
        <path
          d="M246.313 24.563l-66.125 133.78L222.25 216c9.095-7.82 17.132-17.24 24.063-28.5V24.562zm18.687.625v162.406c6.37 11.466 14.176 21.062 23.375 29L331 158.25 265 25.187zM164.187 168.094L20.845 188.97l156.53 51.093c10.752-3.268 20.687-7.577 29.782-13.094l-42.97-58.876zm182.782 0L303.593 227.5c9.343 5.507 19.765 9.777 31.28 12.97l157.876-51.19-145.78-21.186zm-91.533 33.844c-17.96 25.962-42.385 42.9-71.25 52.218 22.825 23.285 29.075 53.562 26.782 85.656 30.114-12.898 60.604-9.374 89.874 1.438-2.023-31.53 4.755-61.705 27.156-86.656-30.68-9.16-55.663-26.35-72.563-52.656zM13.25 206.155l106.72 104 68.936-22.344c-5.1-11.618-13.2-22.024-25.22-31.125l-3.374-2.53-147.062-48zm482.156 1.906L349.186 255.5l-.967.844c-11.146 9.762-18.935 20.302-24.095 31.625l67.375 21.967 103.906-101.875zm-301.062 97.625l-68.72 22.282-25.718 146.75 28.813-39.47 66.31-90.813c1.518-13.88 1.532-26.83-.686-38.75zm123.906 0c-2.725 12.42-3.01 25.66-1.594 39.72l93.563 128.25-24.658-146.032-67.312-21.938zm-71.938 41.22c-12.81.772-25.57 4.355-38.468 11.656l-64.03 87.718-26.908 36.845 129.406-67.813v-68.406zm18.688.75v67.717l129.625 68.595-91.25-125.095c-13.052-5.493-25.79-9.5-38.375-11.22z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
