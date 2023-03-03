import classNames from 'classnames';
import React from 'react';

import { Rank } from 'shared/ui/icons';

import styles from './details.module.scss';

export const QuestRank: React.FC<{ difficulty: number; onSelect: (rank: number) => void }> = ({
  difficulty,
  onSelect,
}) => {
  const [stars, setStars] = React.useState([{}, {}, {}, {}, {}]);

  return (
    <div className={classNames('flex gap-4 mt-4 md:mt-0 md:gap-2', styles.rank)}>
      {stars.map((r, idx) => (
        <button key={idx} onClick={() => onSelect(idx + 1)}>
          <Rank
            className={classNames('h-8 w-8 md:h-6 md:w-6 transition-all ease-linear', {
              'fill-gold': difficulty > idx,
            })}
          />
        </button>
      ))}
    </div>
  );
};
