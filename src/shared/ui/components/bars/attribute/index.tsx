import React from 'react';

import { RLImage } from '../../images';
import { Progress, ProgressProps } from '../progress';

type AttributeProps = ProgressProps & {
  progressClassName?: string;
  icon?: JSX.Element;
  title: string;
  withValue?: boolean;
};

export const Attribute: React.FC<AttributeProps> = ({
  percent = 0,
  strokeWidth = 1,
  strokeColor = '#D3D3D3',
  className = '',
  progressClassName = 'w-full h-2 relative',
  icon = '',
  title = '',
  withValue = false,
  ...rest
}) => {
  return (
    <div className={`flex w-full${className && ' ' + className}`}>
      {icon && (
        <div
          className={`w-8 min-w-[2rem] h-8 rounded-full flex justify-center items-center`}
          style={{ backgroundColor: strokeColor }}
        >
          {icon}
        </div>
      )}
      <div className={progressClassName}>
        <Progress
          percent={percent}
          strokeColor={strokeColor}
          className="h-full w-full -translate-x-[0.5px]"
        />
        {withValue && <span className="absolute right-0">100/100</span>}
      </div>
    </div>
  );
};
