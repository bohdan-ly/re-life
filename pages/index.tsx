import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Footer } from 'widgets/session/footer';
import { Header } from 'widgets/session/header';

import { Home as HomePage } from 'pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ReLifeRPG</title>
        <meta
          name="description"
          content="ReLifeRPG is a gamified daily routine app that helps you level up your productivity and turn your daily tasks into a fun RPG game. Complete quests, gain experience points, and unlock rewards as you progress through your daily routines. With ReLifeRPG, you can transform your boring daily tasks into an exciting adventure and stay motivated to achieve your goals."
        />
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(context.locale as string, ['common', 'character'])),
        fallback: true,
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
}
