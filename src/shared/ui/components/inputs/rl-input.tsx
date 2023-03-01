import classNames from 'classnames';
import React from 'react';

type RLInput = {
  type?: string;
  placeholder?: string;
  className?: string;
  value: string;
  withAutoFocus?: boolean;
  onChange: (e: string) => void;
  onBlur?: () => void;
};

export const RLInput: React.FC<RLInput> = ({
  type,
  value = '',
  placeholder,
  className = '',
  withAutoFocus = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (withAutoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [withAutoFocus]);

  return (
    <input
      ref={inputRef}
      type={type || 'text'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className={classNames(
        'block p-2.5 w-full z-20 text-sm rounded border focus:ring-blue-500 focus:border-blue-500',
        className,
      )}
      placeholder={placeholder || 'Enter here'}
    />
  );
};
