import React from 'react';

import { CloseIcon } from 'shared/ui/icons';

type SpeedDial = {
  button?: JSX.Element;
  options: Array<{ title: string; icon: JSX.Element; action: () => void }>;
};

export const SpeedDial: React.FC<SpeedDial> = ({ button, options = [] }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="align-center flex flex-col group relative right-6 top-6">
      <button type="button" onClick={() => setVisible(!visible)}>
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
      <div className={`overflow-hidden flex flex-col items-center pt-4 w-fit`}>
        <ul
          className="flex flex-col items-center  transition duration-500 in-expo space-y-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? '' : 'translateY(-100%)',
          }}
        >
          {options.map((o, idx) => (
            <li key={`${o.title || ''}_${idx}`} onClick={o.action || (() => {})}>
              <button
                type="button"
                className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              >
                {o.icon}
                <span className="sr-only">{o.title || 'Option'}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
