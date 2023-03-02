import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';

type DropdownItem = {
  id?: string;
  title: string | JSX.Element;
  rightSlot?: JSX.Element | string | null;
  disabled?: boolean;
  action?: () => void;
};

type RLDropdownProps = {
  placement?: 'bottom' | 'top' | 'right' | 'left';
  triggerElement?: JSX.Element | null;
  options: DropdownItem[];
  onSelect: (elem: DropdownItem) => void;
};

export const RLDropdown: React.FC<RLDropdownProps> = ({
  placement = 'top',
  triggerElement,
  options,
  onSelect = () => {},
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {triggerElement || 'Menu'}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={placement || 'top'}
          className="DropdownMenuContent"
          sideOffset={5}
        >
          {options.map((option, idx) => (
            <DropdownMenu.Item
              key={option.id || idx}
              disabled={option.disabled || false}
              className="DropdownMenuItem"
              onSelect={option.action || (() => onSelect(option))}
            >
              {option.title || 'option'}{' '}
              {option.rightSlot && <div className="RightSlot">{option.rightSlot}</div>}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
