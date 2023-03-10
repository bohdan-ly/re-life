import React from 'react';

import { LockClosedIcon } from 'shared/ui/icons';

const LockButton: React.FC<{ children: JSX.Element; title?: string; className?: string }> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div className={`relative ${className && ' ' + className}`}>
      <div className="absolute -top-2 -right-2 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 p-1 md:p-2 text-center align-baseline text-xs font-bold leading-none text-white">
        <LockClosedIcon className="h-3 w-3 md:h-4 md:w-4" />
      </div>
      {children || (
        <div className="flex items-center justify-center rounded-lg bg-pink-500 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200">
          {title || 'Action'}
        </div>
      )}
    </div>
  );
};

export default LockButton;
