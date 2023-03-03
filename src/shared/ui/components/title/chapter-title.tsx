import classNames from 'classnames';
import React from 'react';

import { RLInput } from '../inputs';

type Props = {
  title: string;
  icon: JSX.Element;
  className?: string;
  editMode?: boolean;
  onSave?: (str: string) => void;
  setEditMode?: (edit: boolean) => void;
};

export const ChapterTitle: React.FC<Props> = ({
  title,
  icon,
  className = '',
  editMode = false,
  setEditMode = () => {},
  onSave = () => {},
}) => {
  const [value, setValue] = React.useState(title);

  return (
    <div className={classNames(`relative flex items-center justify-center w-full`, className)}>
      {React.cloneElement(icon, {
        className: classNames('-rotate-90 min-w-[24px]', icon.props.className || ''),
      })}
      {editMode ? (
        <div className="relative w-full">
          <RLInput
            type="text"
            value={value}
            withAutoFocus
            onChange={setValue}
            onBlur={() => onSave(value)}
            placeholder="Epic quest..."
            className="appearance-none bg-transparent border-none w-full focus:outline-none text-2xl px-4"
          />
        </div>
      ) : (
        <h2
          className="text-4xl text-center px-6 mt-2 cursor-text"
          onClick={() => setEditMode(true)}
        >
          {title}
        </h2>
      )}
      {React.cloneElement(icon, {
        className: classNames('rotate-90 min-w-[24px]', icon.props.className || ''),
      })}
    </div>
  );
};
