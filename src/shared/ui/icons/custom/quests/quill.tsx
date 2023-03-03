import React from 'react';

export const Quill: React.FC<{
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
  role?: string;
}> = ({ width, height, fill, stroke, className, role = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width || 24}
      height={height || 24}
      className={className}
      role={role}
    >
      <g transform="translate(0,0)">
        <path
          d="M496.938 14.063c-95.14 3.496-172.297 24.08-231.282 55.812l-29.47 49.28-4.967-28.093c-10.535 7.402-20.314 15.222-29.314 23.407l-14.687 45.06-5.032-25.155c-40.65 45.507-60.41 99.864-58.938 155.906 47.273-93.667 132.404-172.727 211.97-221.155l9.717 15.97c-75.312 45.838-156.387 121.202-202.187 208.25h12.156c19.78-12.02 39.16-26.858 58.406-43.44l-30.28 1.595 54.218-23.094c46.875-43.637 93.465-94.974 143.313-138.28l-24.47-5.19 56.5-21.03c26.853-20.485 54.8-37.844 84.344-49.843zM59.53 312.03v30.408H194V312.03H59.53zm20.376 49.095L47.25 389.813 24.97 474.78l14.53 15.876h177.22l14.56-15.875L209 389.814l-30.906-28.688H79.906z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
