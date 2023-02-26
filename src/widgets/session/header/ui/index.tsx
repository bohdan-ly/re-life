import React from 'react';

import { useAppDispatch, useAppSelector, useDocumentScroll } from 'shared';
import { userModel } from 'shared/model';

import { LoginInterface } from './login-interface';
import { UserInterface } from './user-interface';

type TabProp = {
  title: string;
  path: string;
  className?: string;
  action?: () => void;
  icon: JSX.Element;
};

export const Header = () => {
  const user = useAppSelector(userModel.selectUser);
  const bgRef = React.useRef<HTMLDivElement | null>(null);

  useDocumentScroll(({ scrollY }) => {
    if (!bgRef.current) return;

    const div: HTMLDivElement = bgRef.current;

    if (scrollY > 0.1 && !div.className?.includes('bg-primaryDarken')) {
      div.className = div.className + ' bg-primaryDarken';
      bgRef.current = div;
    }

    if (scrollY < 0.1 && div.className?.includes('bg-primaryDarken')) {
      div.className = div.className.replace(' bg-primaryDarken', '');
      bgRef.current = div;
    }
  });

  return (
    <header className="block fixed top-0 inset-x-0 z-50 shadow-lg w-full border-royal/20">
      {!user.id && <LoginInterface />}
      {user.id && <UserInterface user={user} />}

      <div ref={bgRef} className="absolute w-full h-full left-0 top-0 opacity-50 -z-1" />
    </header>
  );
};
