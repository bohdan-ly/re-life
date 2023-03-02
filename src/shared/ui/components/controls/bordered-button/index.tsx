import classNames from 'classnames';
import React from 'react';

export const BorderedButton: React.FC<{
  title: string;
  onClick?: () => void;
  className?: string;
}> = ({ title, className, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-primaryColor rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-200',
        className,
      )}
    >
      <span className="text-center relative w-full px-5 py-2.5 leading-none transition-all ease-in duration-75 bg-primary rounded-md group-hover:bg-transparent">
        {title}
      </span>
    </button>
  );
};
