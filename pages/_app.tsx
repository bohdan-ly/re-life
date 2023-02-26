import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress'; //nprogress module
import { ReactElement, ReactNode } from 'react';

import { GlobalStyles } from 'shared/ui/theme';

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
    <>
      <Head>
        <title>ReLifeRPG</title>
        <meta
          name="description"
          content="ReLifeRPG is a gamified daily routine app that helps you level up your productivity and turn your daily tasks into a fun RPG game. Complete quests, gain experience points, and unlock rewards as you progress through your daily routines. With ReLifeRPG, you can transform your boring daily tasks into an exciting adventure and stay motivated to achieve your goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts
        withLayout={!Component.getLayout}
        component={() => (
          <ConnectAPI>
            <>
              {/* <div className="fixed right-2 transform -translate-x-1/2 top-2 z-10">
                <button
                  onClick={handleSignOut}
                  type="submit"
                  className="text-primaryColor bg-secondary mt-4 w-full flex justify-center py-2 px-4 border border-secondary rounded-md shadow-sm text-sm font-medium hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                >
                  Sign Out
                </button>
              </div> */}

              <Component {...pageProps} />
              <GlobalStyles />
            </>
          </ConnectAPI>
        )}
      />
    </>
  );
}

export default appWithTranslation(MyApp);
