import React from 'react';

import { User } from 'shared/model/session';
import { RLImage } from 'shared/ui/components';

export const UserInterface: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <RLImage
        className="w-10 h-10 rounded-full"
        src={user.photo || ''}
        width={40}
        height={40}
        alt="User avatar"
      />
    </div>
  );
};
