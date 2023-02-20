import React from 'react';

type Props = { title: string; icon: JSX.Element; className?: string };

export const ChapterTitle: React.FC<Props> = ({ title, icon, className = '' }) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full${className && ' ' + className}`}
    >
      {React.cloneElement(icon, { className: 'position-centerY left-0 -rotate-90 min-w-[24px]' })}
      <h2 className="text-4xl text-center px-6 mt-2">{title}</h2>
      {React.cloneElement(icon, { className: 'position-centerY right-0 rotate-90 min-w-[24px]' })}
    </div>
  );
};
