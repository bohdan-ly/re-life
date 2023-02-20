import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { ReactElement, ReactNode } from 'react';

import { GlobalStyles } from 'shared/ui/theme';

import { Footer } from 'widgets/session/footer';

import { Layouts } from 'app';
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
      <Layouts withLayout={!Component.getLayout}>
        {getLayout(
          <>
            <Component {...pageProps} />
            <GlobalStyles />
            <Footer />
          </>,
        )}
      </Layouts>
    </>
  );
}

export default MyApp;
