import React from 'react';

export const MoebiusStar: React.FC<{
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
          d="M138.656 49.53l-.03 114.814 37.03-21.406-.03-11.844-.064-16.22 14.063 8.095 128.22 73.936-.033-50.53-.906.53-4.687 2.72-4.658-2.72-50.78-29.312-.094.062L138.656 49.53zm236.094 0l-99.313 57.314 36.75 21.187 10.282-5.968 14.03-8.124v16.218l.063 147.375 43.03-24.874-.5-.312-4.28-2.75v-5.125l-.032-58.626v-60.72l-.03-45.78V49.53zm-180.406 97.72V153.72l-4.688 2.718-142.97 82.593-.03-.06L20.594 254 120 311.406l.125-43.344-10.688-5.937-14.437-8 14.28-8.25 127.907-73.906-42.843-24.72zm61.53 35.5l-52.124 30.125 50.938 31.406 52.125-32.155-50.938-29.375zm137.595 13.906l.03 42.72 9.094 5.843 12.875 8.28-13.25 7.688L273 335.813l44.813 25.843v-6.468l4.687-2.688 52.28-30.188v-.156L492.814 254l-99.344-57.344zm-75.626 30.625L272.5 255.25l45.375 27.97-.03-55.94zm-141.375 1.345l-43.5 25.156 1.06.595 4.845 2.688-.03 5.53-.22 71.344.03 124.532 99.095-57.19-36.938-21.31-10.25 5.936-14.03 8.156v-16.218l-.063-149.22zm18.686.875l.03 51.47 41.72-25.72-41.75-25.75zm59.53 36.72l-49.436 30.5 49.094 28.31 49.437-28.53-49.092-30.28zm-59.5 46.28l.033 49.094.905-.53 4.656-2.69 4.69 2.688 50.968 29.407.25-.126L374.75 458.47l.03-114.595L336.5 366l.03 11.844.064 16.22-14.063-8.127L195.19 312.5z"
          fill="#fff"
          fill-opacity="1"
        ></path>
      </g>
    </svg>
  );
};
