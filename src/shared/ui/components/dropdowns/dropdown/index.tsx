import classNames from 'classnames';
import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type DropdownItem = {
  id?: string;
  title: string | JSX.Element;
  rightSlot?: JSX.Element | string | null;
  disabled?: boolean;
  action?: () => void;
  className?: string;
};

type RLDropdownProps = {
  placement?: 'bottom' | 'top' | 'right' | 'left';
  triggerElement?: JSX.Element | null;
  options: DropdownItem[];
  onSelect: (elem: DropdownItem) => void;
  className?: string;
};
export const RLDropdown: React.FC<RLDropdownProps> = ({
  placement = 'top',
  className = '',
  triggerElement,
  options,
  onSelect = () => {},
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = React.useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const onOptionSelect = (data: DropdownItem) => {
    if (data.disabled) return;

    if (data.action) data.action();
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={classNames(className, {
        relative: !className,
      })}
    >
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {triggerElement || 'Dropdown'}
      </button>
      <div
        className={classNames(
          'z-20 w-[100px] flex flex-col bg-primary/50 rounded-lg shadow m-0 absolute top-10 left-0 overflow-hidden',
          {
            hidden: !open,
          },
        )}
      >
        {options.map((data, idx) => (
          <li
            key={data.id || idx}
            className={classNames(
              'divide-y w-full divide-gray-100 cursor-pointer block px-4 py-2 hover:bg-primary',
              data.className,
            )}
            onClick={() => onOptionSelect(data)}
          >
            {data.title || 'option'}{' '}
            {data.rightSlot && <div className="RightSlot">{data.rightSlot}</div>}
          </li>
        ))}
      </div>
    </div>
  );
};
