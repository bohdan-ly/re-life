import classNames from 'classnames';
import React from 'react';

export const GradientButton: React.FC<{
  title: string | JSX.Element;
  onClick?: () => void;
  className?: string;
}> = ({ title, className, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'text-primaryColor bg-silver hover:ring-1 hover:ring-borderPrimary focus:ring-borderPrimary focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
        className,
      )}
    >
      {title}
    </button>
  );
};
