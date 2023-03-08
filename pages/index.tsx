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
