import { Inter } from '@next/font/google';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Footer } from 'widgets/session/footer';

import { Home as HomePage } from 'pages/home';

export default function Home() {
  return (
    <>
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
