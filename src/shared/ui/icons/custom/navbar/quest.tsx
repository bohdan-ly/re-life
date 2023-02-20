import React from 'react';

export const Quest: React.FC<{
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}> = ({ width, height, fill, stroke, className = '' }) => {
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
          d="M373.563 18.406c-15.616-.167-27.91 4.622-32.563 14.75-22.778 49.605-48.743 87.14-79.094 117.28 3.047 1.015 6.046 2.29 8.938 3.783 12.987 6.708 25.268 17.78 35.312 30.843 10.044 13.062 17.85 28.114 20.78 43.5.746 3.908 1.16 7.885 1.158 11.843 38.97-24.36 85.058-41.223 140.875-51.312 14.91-2.697 23.652-28.632 21.405-58.656l-35.156-1 30.56-24.813c-4.148-14.507-11.013-28.754-21.155-40.72-15.528-18.314-36.43-31.376-56.72-38.686L381.94 40.812l2.812-21.5c-3.875-.55-7.61-.87-11.188-.907zM246.938 166.562c-1.063.052-2.06.226-3 .47-11.976 10.254-24.61 19.597-37.938 28.28.842.33 1.67.667 2.5 1.032 14.123 6.192 27.438 17.145 38.47 30.625 13.356 16.322 23.62 36.94 25.624 57.75 10.334-10.367 21.24-19.943 32.844-28.72 4.096-6.555 4.93-14.468 3.125-23.938-2.184-11.46-8.642-24.43-17.25-35.625-8.61-11.194-19.38-20.622-29.063-25.625-6.052-3.126-11.154-4.45-15.313-4.25zm-61.907 43.282c-1.385.053-2.69.27-3.968.562-37 20.762-79.088 37.985-127.312 56 .574.042 1.14.093 1.72.156 10.627 1.156 21.076 5.008 31.155 10.875L124.313 261 108.5 293.72c5.995 5.432 11.803 11.477 17.344 18 20.76 24.434 37.964 55.865 47.094 88.092.002.01-.003.022 0 .032 2.98 10.508 5.11 20.916 6.312 31 20.99-48.438 44.38-89.26 72.344-123 7.3-21.48-2.186-48.408-19.063-69.03-9.44-11.538-20.976-20.718-31.53-25.345-5.936-2.604-11.27-3.808-15.97-3.626zm141.626 54.844c-7.31 5.05-14.462 10.51-21.437 16.312 39.16 9.26 60.953 35.722 80.655 62.156 10.464 14.04 20.598 28.11 33.125 40.688 24.19 9.147 43.17 6.38 63.906-14.938-92.165-27.78-96.11-92.61-156.25-104.22zM48.594 284.906c-10.873.225-18.26 5.755-23.344 16.594-5.81 12.387-7.114 32.47.438 57.063 5.75 18.73 16.52 37.718 28.75 51.625 12.23 13.906 25.9 22.076 35.374 22.406h.032c3.717.13 6.553-.682 8.812-2.75l-.187-.188 2.093-2.094c.793-1.168 1.52-2.548 2.187-4.187 2.81-6.9 3.28-18.552-1.844-33-6.885-19.417-19.12-31.932-33.375-34.78l-22.968-4.564 19.813-12.5 38.47-24.186c-16.65-16.822-34.55-27.607-49.376-29.22-1.7-.184-3.323-.25-4.876-.218zm236.25 5.406l-24.53 25.375c100.442 17.878 55.45 141.005 159.31 176.188l-24.78-57.28c32.766 16.15 67.39 22.623 97.72 12.03-135.77-41.948-96.32-126.983-207.72-156.313zm-169.47 38.22l-25.968 16.343c13.18 8.5 23.21 22.565 29.125 39.25 2.57 7.244 4.133 14.205 4.75 20.78l23.44-23.374c-8.08-19.19-19.035-37.566-31.345-53zm38.376 72.374l-42.063 42-.156-.156c-4.255 3.942-9.456 6.765-15.186 7.938 23.268 14.873 44.644 19.346 56.812 9.562 4.26-3.426 7.043-8.36 8.47-14.406-.41-12.684-2.602-26.615-6.657-40.906-.382-1.346-.806-2.686-1.22-4.032z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
