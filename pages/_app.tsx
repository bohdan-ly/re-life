import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress'; //nprogress module
import { ReactElement, ReactNode } from 'react';

import { TwinGlobalStyles } from 'shared/ui/theme';

import { Layouts } from 'app';
import { ConnectAPI } from 'app/providers/with-api';
import type { AppProps } from 'next/app';

import 'nprogress/nprogress.css';
// eslint-disable-next-line import/no-internal-modules
import '../public/globals.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  // const handleSignOut = (e: { preventDefault: () => void }) => {
  //   signOut().catch((e) => console.error(e));
  // };

  return (
    <Layouts
      withLayout={!Component.getLayout}
      component={() => (
        <ConnectAPI>
          <>
            <Component {...pageProps} />
            <TwinGlobalStyles />
          </>
        </ConnectAPI>
      )}
    />
  );
}

export default appWithTranslation(MyApp);
