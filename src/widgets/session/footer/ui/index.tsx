import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { NavButton } from 'shared/ui/components';
import { Quest, Inventory, Character, Quests, Forge } from 'shared/ui/icons';

type TabProp = {
  title: string;
  path: string;
  className?: string;
  action?: () => void;
  icon: JSX.Element;
};

export const Footer = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  const [tabs, setTabs] = React.useState<TabProp[]>([]);

  React.useEffect(() => {
    setTabs([
      {
        title: t('common:character'),
        path: '/',
        icon: <Character className="h-6 w-6 inline-block mb-1" />,
      },
      {
        title: t('common:quests'),
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
        title: t('common:inventory'),
        path: '/inventory',
        icon: <Inventory className="h-6 w-6 inline-block mb-1" />,
      },
      {
        title: t('common:forge'),
        path: '/forge',
        icon: <Forge className="h-6 w-6 inline-block mb-1" />,
      },
    ]);
  }, [t]);

  return (
    <footer className="block fixed bottom-0 inset-x-0 z-50 shadow-lg bg-primaryDarken w-full h-20 border-royal/20">
      <nav id="tabs" className="flex justify-between h-full">
        {tabs.map((tab, idx) => (
          <NavButton
            key={tab.title + idx}
            isActive={router.route.includes(tab.path)}
            className="uppercase"
            {...tab}
          />
        ))}
      </nav>
    </footer>
  );
};
