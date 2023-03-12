import Link from 'next/link';

import { getGoogleOAuthURL } from 'shared';
import { Google } from 'shared/ui/icons';

export const GoogleAuthButton = () => {
  return (
    <Link
      href={getGoogleOAuthURL()}
      className="border-[1px] flex hover:bg-primaryColorSemiTransparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-200 justify-center px-4 py-2 rounded-md shadow-sm text-primaryColor"
    >
      <Google className="mr-4 purify" />
      <p className="font-semibold text-2xl select-none">Sign in with Google</p>
    </Link>
  );
};
