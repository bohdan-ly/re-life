import { useRouter } from 'next/router';
import React from 'react';

import { NavButton } from 'shared/ui/components';
import { Quest, Inventory, Character, Quests, Forge } from 'shared/ui/icons';

export const Footer = () => {
  const router = useRouter();

  const [tabs, setTabs] = React.useState([
    {
      title: 'Character',
      path: '/',
      icon: <Character className="h-6 w-6 inline-block mb-1" />,
    },
    {
      title: 'Quests',
      path: '/quests',
      icon: <Quests className="h-6 w-6 inline-block mb-1" />,
    },
    {
      title: '',
      path: '',
      className: 'rounded-full bg-secondary -translate-y-2',
      action: () => {
        prompt('Please enter quest title');
      },
      icon: <Quest height={36} width={36} className="h-9 w-9 inline-block mb-1" />,
    },
    {
      title: 'Inventory',
      path: '/inventory',
      icon: <Inventory className="h-6 w-6 inline-block mb-1" />,
    },
    {
      title: 'Forge',
      path: '/forge',
      icon: <Forge className="h-6 w-6 inline-block mb-1" />,
    },
  ]);

  return (
    <footer className="block fixed bottom-0 inset-x-0 z-50 shadow-lg bg-primaryDarken w-full h-20 border-royal/20">
      <nav id="tabs" className="flex justify-between h-full">
        {tabs.map((tab, idx) => (
          <NavButton key={tab.title + idx} isActive={router.route.includes(tab.path)} {...tab} />
        ))}
      </nav>
    </footer>
  );
};
