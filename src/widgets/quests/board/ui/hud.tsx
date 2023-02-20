import React from 'react';

import { Corner } from 'shared/ui/icons';

import styles from './board.module.scss';

export const Hud: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className={styles.board}>
      <div className="flex h-full">
        <div className={styles.diagonalLeft} />
        <div className={styles.diagonalRight} />
      </div>
      <div className={styles.border} />
      {children}
      <Corner className={styles.corner} />
      <Corner className={styles.corner} />
    </div>
  );
};
