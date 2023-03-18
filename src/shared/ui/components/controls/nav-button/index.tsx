import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import LockButton from '../lock-button';

export const NavButton: React.FC<{
  path: string;
  title: string;
  icon: JSX.Element;
  isAction?: boolean;
  isLocked?: boolean;
  isActive?: boolean;
  className?: string;
  action?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> = ({
  path,
  title,
  icon,
  isLocked = false,
  isAction = false,
  isActive = false,
  className = '',
  action,
}) => {
  if (isLocked) {
    return (
      <div
        className={classNames(
          `w-full focus:text-royal hover:text-royal justify-center text-center hover:bg-primaryDarken items-center flex flex-col`,
          className,
        )}
      >
        <LockButton>
          <>
            {icon}
            <span
              className={classNames(`tab hidden md:block`, {
                'border-b-2 border-secondary': isActive,
              })}
            >
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
        `w-full focus:text-royal hover:text-royal justify-center text-center pt-2 pb-1 hover:bg-primaryColorSemiTransparent items-center flex flex-col`,
        className,
      )}
      passHref
      scroll
    >
      {icon}
      {!isAction && <div className="w-1/5 mt-2 h-[2px] bg-gold md:hidden" />}
      <span
        className={classNames(`tab hidden md:block`, {
          'border-b-2 border-secondary': isActive,
        })}
      >
        {title || ''}
      </span>
    </Link>
  );
};
