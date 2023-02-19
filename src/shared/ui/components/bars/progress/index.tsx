import { Line } from 'rc-progress';
import React from 'react';

export type ProgressProps = {
  percent: number;
  strokeWidth?: number;
  strokeColor?: string;
  className?: string;
};

export const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  strokeWidth = 1,
  strokeColor = '#D3D3D3',
  className = '',
  ...rest
}) => {
  return (
    <Line
      className={className}
      percent={percent}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      {...rest}
    />
  );
};
