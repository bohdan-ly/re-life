import React from 'react';

import { User } from 'shared/model/session';
import { RLImage, SpeedDial } from 'shared/ui/components';

export const UserInterface: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="relative z-10">
      <SpeedDial
        options={[]}
        button={
          <RLImage
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user.photo || ''}
            width={40}
            height={40}
            alt="User avatar"
          />
        }
      />
    </div>
  );
};
