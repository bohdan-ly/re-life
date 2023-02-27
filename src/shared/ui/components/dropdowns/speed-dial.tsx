import classNames from 'classnames';
import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { CloseIcon } from 'shared/ui/icons';

type SpeedDial = {
  button?: JSX.Element;
  className?: string;
  options: Array<{ title: string; icon: JSX.Element; action: () => void }>;
};

export const SpeedDial: React.FC<SpeedDial> = ({ button, className = '', options = [] }) => {
  const dialRef = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  useOnClickOutside(dialRef, () => setVisible(false));

  return (
    <div
      ref={dialRef}
      className={classNames('align-center flex flex-col group relative', className)}
      // {`align-center flex flex-col group relative${className}`}
    >
      <button className="relative z-10" type="button" onClick={() => setVisible(!visible)}>
        {button || (
          <div className="m-auto flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <CloseIcon
              className="w-8 h-8 transition-transform duration-300"
              style={{ transform: visible ? '' : 'rotate(45deg)' }}
            />
          </div>
        )}
        <span className="sr-only">Open actions menu</span>
      </button>
      <div
        className={`absolute overflow-hidden flex flex-col items-center pt-4 w-fit left-0 top-10`}
      >
        <ul
          className="flex flex-col items-center  transition duration-500 in-expo space-y-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? '' : 'translateY(-100%)',
          }}
        >
          {options.map((o, idx) => (
            <li
              role="button"
              key={`${o.title || ''}_${idx}`}
              className="flex justify-center items-center w-[40px] h-[40px] rounded-full border shadow-sm focus:ring-4 focus:outline-none bg-primary"
              onClick={o.action || (() => {})}
            >
              {o.icon}
              <span className="sr-only">{o.title || 'Option'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
