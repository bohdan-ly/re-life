import axios from 'axios';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { userModel } from 'shared/model';
import { User, UserResponse } from 'shared/model/session';

import { Footer } from 'widgets/session/footer';
import { Header } from 'widgets/session/header';

import { Home as HomePage } from 'pages/home';

export default function Home() {
  return (
    <>
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
