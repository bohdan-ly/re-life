import React from 'react';

import { CoverImage, RLImage } from 'shared/ui/components';

import * as model from '../model';

import styles from './achievements.module.scss';

export const Achievements = () => {
  const [achievements, setAchievements] = React.useState([
    {
      id: '1',
      src: '/images/achievements/adventurer.png',
      title: 'First login',
      stats: {
        exp: '500xp',
      },
    },
    {
      id: '2',
      src: '/images/achievements/adventurer.png',
      title: 'Adventurer',
      stats: {
        exp: '500xp',
      },
    },
    {
      id: '3',
      src: '/images/achievements/adventurer.png',
      title: 'Iron heart',
      stats: {
        exp: '500xp',
      },
    },
    {
      id: '4',
      src: '/images/achievements/adventurer.png',
      title: 'Artificer',
      stats: {
        exp: '500xp',
      },
    },
  ]);
  return (
    <ul className={styles.circleContainer}>
      {achievements.map((achievement) => (
        <li key={achievement.id}>
          <RLImage src={achievement.src} layout="fill" alt={achievement.title} />
        </li>
      ))}
    </ul>
  );
};
