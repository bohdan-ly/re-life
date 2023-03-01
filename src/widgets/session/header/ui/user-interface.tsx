import { useThrottleCallback } from '@react-hook/throttle';
import React from 'react';
import Clock from 'react-live-clock';

import { useDocumentScroll } from 'shared';
import { User } from 'shared/model/session';
import { Attribute, RLImage, SpeedDial } from 'shared/ui/components';
import { ClockIcon, ExitIcon, SettingsIcon, UserIcon } from 'shared/ui/icons';

export const UserInterface: React.FC<{ user: User }> = ({ user }) => {
  const firstName = user?.name?.split(' ')?.[0] || 'Unknown';
  const interfaceRef = React.useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = React.useState(false);
  const [options, setOptions] = React.useState([
    {
      title: 'Profile',
      icon: <UserIcon className="h-8 w-8" />,
      action: () => {},
    },
    {
      title: 'Profile',
      icon: <SettingsIcon className="h-8 w-8" />,
      action: () => {},
    },
    {
      title: 'Profile',
      icon: <ExitIcon className="h-8 w-8" />,
      action: () => {},
    },
  ]);

  const throttledVisibleChange = useThrottleCallback(({ scrollY }: { scrollY: number }) => {
    const elem = document.getElementById('attr-full');
    const elementOffset = (elem && elem.getBoundingClientRect().top + scrollY - 54) || 100;

    if (elementOffset < 0 && !visible) {
      setVisible(true);
    }

    if (elementOffset > 0 && visible) {
      setVisible(false);
    }
  }, 10);

  useDocumentScroll(throttledVisibleChange);

  return (
    <div ref={interfaceRef} className="relative z-10 flex align-center">
      <SpeedDial
        className="mr-4 mt-2"
        options={options}
        button={
          <RLImage
            className="w-10 h-10 min-w-[2.5rem] rounded-full cursor-pointer"
            src={user.photo || ''}
            width={40}
            height={40}
            alt="User avatar"
          />
        }
      />
      <div
        className="flex items-center w-full transition duration-500 in-expo"
        style={{
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="mr-4">
          <p className="font-extrabold mt-2">{firstName}</p>
          <p className="font-extrabold">LV: 1</p>
        </div>
        <div className="flex flex-col w-1/4 gap-y-4">
          <Attribute
            percent={100}
            strokeColor={'#04a1dd'}
            className="items-center"
            title={'Mana'}
          />
          <Attribute
            percent={100}
            strokeColor={'#56ff62'}
            className="items-center"
            title={'Stamina'}
          />
        </div>
        <div className="ml-auto text-xl">
          <div className="flex">
            <ClockIcon className="h-6 w-6 mr-2" />
            <Clock format="HH:mm" interval={1000 * 60} ticking={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
