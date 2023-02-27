import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { GradientButton } from 'shared/ui/components';

export const LoginInterface = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  return (
    <div className="relative z-10 px-4 py-2 h-full w-full flex align-center">
      <Link href="/login">
        <GradientButton title="login" onClick={() => {}} />
      </Link>
    </div>
  );
};
