import React from 'react';

export const NavButton: React.FC<{
  path: string;
  title: string;
  icon: JSX.Element;
  isActive?: boolean;
  className?: string;
  action?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> = ({ path, title, icon, isActive = false, className = '', action }) => {
  return (
    <a
      href={path || '#'}
      onClick={action || (() => {})}
      className={`w-full focus:text-royal hover:text-royal justify-center text-center pt-2 pb-1 hover:bg-primary items-center flex flex-col${
        className && ' ' + className
      }`}
    >
      {icon}
      <span className={`tab block text-xs${(isActive && ' border-b-2 border-secondary') || ''}`}>
        {title || ''}
      </span>
    </a>
  );
};
