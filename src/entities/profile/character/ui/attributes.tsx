import React from 'react';

import { Attribute } from 'shared/ui/components';
import { Mana, Stamina } from 'shared/ui/icons';

export const Attributes = () => {
  const [attributes, setAttributes] = React.useState([
    {
      id: '1',
      icon: <Mana />,
      title: 'Experience',
      abbr: 'XP',
      value: 0,
      strokeColor: '#f2b61c',
    },
    {
      id: '2',
      icon: <Mana />,
      title: 'Mana',
      abbr: 'MP',
      value: 100,
      strokeColor: '#04a1dd',
    },
    {
      id: '3',
      icon: <Stamina />,
      title: 'Stamina',
      abbr: 'STA',
      value: 100,
      strokeColor: '#56ff62',
    },
  ]);
  return (
    <div className="w-1/2 flex flex-col m-auto gap-2">
      {attributes.map((attr) => (
        <Attribute
          key={attr.id}
          percent={attr.value}
          strokeColor={attr.strokeColor}
          className="items-center"
          icon={attr.icon}
          title={attr.title}
        />
      ))}
    </div>
  );
};
