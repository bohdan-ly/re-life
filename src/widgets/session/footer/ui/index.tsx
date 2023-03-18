import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';
import useEvent from 'react-use-event-hook';

import { useAppDispatch } from 'shared';
import { NavButton } from 'shared/ui/components';
import { Quest, Inventory, Character, Quests, Forge } from 'shared/ui/icons';

import { questsModel } from 'entities/quests/board';

type TabProp = {
  title: string;
  path: string;
  isAction?: boolean;
  isLocked?: boolean;
  className?: string;
  action?: (e: any) => void;
  icon: JSX.Element;
};

export const Footer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('common');

  const [tabs, setTabs] = React.useState<TabProp[]>([]);

  const handleCreateQuest = useEvent(async (e) => {
    e.preventDefault();

    const { quest } = await questsModel.api.createQuest({});
    if (quest) {
      dispatch(questsModel.addQuest(quest));
    }
  });

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
        isLocked: true,
      },
      {
        title: '',
        path: '',
        className:
          'rounded-full border bg-primaryDarken -translate-y-2 max-w-[100px] hover:border-gold',
        action: (e: any) => {
          void handleCreateQuest(e);
        },
        isAction: true,
        icon: <Quest height={36} width={36} className="h-9 w-9 inline-block mb-1" />,
      },
      {
        title: t('common:inventory'),
        path: '/inventory',
        icon: <Inventory className="h-6 w-6 inline-block mb-1" />,
        isLocked: true,
      },
      {
        title: t('common:forge'),
        path: '/forge',
        icon: <Forge className="h-6 w-6 inline-block mb-1" />,
        isLocked: true,
      },
    ]);
  }, [t, handleCreateQuest]);

  return (
    <footer className="block fixed bottom-0 inset-x-0 z-50 bg-primaryDarken w-full border-royal/20 pb-2 md:pb-1">
      <nav id="tabs" className="flex justify-between h-full">
        {tabs.map((tab, idx) => (
          <NavButton
            key={tab.title + idx}
            isActive={router.route.includes(tab.path)}
            className="uppercase py-6"
            {...tab}
          />
        ))}
      </nav>
    </footer>
  );
};
