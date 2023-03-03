import { useThrottleCallback } from '@react-hook/throttle';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { useAppSelector, useDocumentScroll } from 'shared';
import { calcAttributeValuePercents } from 'shared';
import { Attribute } from 'shared/ui/components';
import { Mana, Stamina } from 'shared/ui/icons';

import * as model from '../model';

export const Attributes = () => {
  const character = useAppSelector(model.selectCharacter);

  const [visible, setVisible] = React.useState(true);
  const attrRef = React.useRef<HTMLDivElement | null>(null);
  const [attributes, setAttributes] = React.useState([
    {
      id: '1',
      icon: (
        <div className="flex items-center h-full">
          <span className="text-xl font-black align-middle text-secondaryDarken mt-1">1</span>
        </div>
      ),
      title: 'Experience',
      abbr: 'XP',
      value: calcAttributeValuePercents(
        character?.stats?.experience ?? 100,
        character?.stats?.experienceMax ?? 100,
      ),
      maxValue: character?.stats?.experienceMax ?? 100,
      strokeColor: '#ffa222',
    },
    {
      id: '2',
      icon: <Mana />,
      title: 'Mana',
      abbr: 'MP',
      value: character?.stats?.manapool ?? 100,
      maxValue: character?.stats?.manapool ?? 100,
      strokeColor: '#04a1dd',
    },
    {
      id: '3',
      icon: <Stamina />,
      title: 'Stamina',
      abbr: 'STA',
      value: character?.stats?.stamina ?? 100,
      maxValue: character?.stats?.stamina ?? 100,
      strokeColor: '#56ff62',
    },
  ]);

  React.useEffect(() => {
    setAttributes([
      {
        id: '1',
        icon: (
          <div className="flex items-center h-full">
            <span className="text-xl font-black align-middle text-secondaryDarken mt-1">1</span>
          </div>
        ),
        title: 'Experience',
        abbr: 'XP',
        value: calcAttributeValuePercents(
          character?.stats?.experience ?? 100,
          character?.stats?.experienceMax ?? 100,
        ),
        maxValue: character?.stats?.experienceMax ?? 100,
        strokeColor: '#ffa222',
      },
      {
        id: '2',
        icon: <Mana />,
        title: 'Mana',
        abbr: 'MP',
        value: calcAttributeValuePercents(
          character?.stats?.manapool ?? 100,
          character?.stats?.manapool ?? 100,
        ),
        maxValue: character?.stats?.manapool ?? 100,
        strokeColor: '#04a1dd',
      },
      {
        id: '3',
        icon: <Stamina />,
        title: 'Stamina',
        abbr: 'STA',
        value: calcAttributeValuePercents(
          character?.stats?.stamina ?? 100,
          character?.stats?.stamina ?? 100,
        ),
        maxValue: character?.stats?.stamina ?? 100,
        strokeColor: '#56ff62',
      },
    ]);
  }, [character]);

  const throttledVisibleChange = useThrottleCallback(({ scrollY }: { scrollY: number }) => {
    const elementOffset =
      (attrRef.current && attrRef.current.getBoundingClientRect().top + scrollY - 54) || 100;

    if (elementOffset < 0 && visible) {
      setVisible(false);
    }

    if (elementOffset > 0 && !visible) {
      setVisible(true);
    }
  }, 10);

  useDocumentScroll(throttledVisibleChange);

  return (
    <div
      ref={attrRef}
      id="attr-full"
      className="w-1/2 flex flex-col m-auto gap-2 transition duration-500 in-expo"
      style={{
        transform: visible ? 'none' : 'translate(-20%, -100%)',
        opacity: visible ? 1 : 0,
      }}
    >
      {attributes.map((attr) => (
        <Attribute
          withValue
          key={attr.id}
          percent={attr.value}
          maxValue={attr.maxValue}
          strokeColor={attr.strokeColor}
          className="items-center"
          icon={attr.icon}
          title={attr.title}
        />
      ))}
    </div>
  );
};
