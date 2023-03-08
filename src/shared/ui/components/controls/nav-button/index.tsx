import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import LockButton from '../lock-button';

export const NavButton: React.FC<{
  path: string;
  title: string;
  icon: JSX.Element;
  isLocked?: boolean;
  isActive?: boolean;
  className?: string;
  action?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> = ({ path, title, icon, isLocked = false, isActive = false, className = '', action }) => {
  if (isLocked) {
    return (
      <div
        className={`w-full focus:text-royal hover:text-royal justify-center text-center pt-2 pb-1 hover:bg-primary items-center flex flex-col${
          className && ' ' + className
        }`}
      >
        <LockButton>
          <>
            {icon}
            <span className={`tab block${(isActive && ' border-b-2 border-secondary') || ''}`}>
              {title || ''}
            </span>
          </>
        </LockButton>
      </div>
    );
  }

  return (
    <Link
      href={path || ''}
      onClick={action || (() => {})}
      className={classNames(
        `w-full focus:text-royal hover:text-royal justify-center text-center pt-2 pb-1 hover:bg-secondaryDarken items-center flex flex-col`,
        className,
      )}
      passHref
      scroll
    >
      {icon}
      <span className={`tab block${(isActive && ' border-b-2 border-secondary') || ''}`}>
        {title || ''}
      </span>
    </Link>
  );
};
