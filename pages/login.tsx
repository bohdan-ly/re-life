import { GetServerSideProps } from 'next';
import React, { useState } from 'react';

import { LoginPage } from 'pages/login';

export default function Login() {
  return <LoginPage />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // const session = getCookie('refreshToken', { req, res });

  // try {
  //   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/v1/users`, {
  //     headers: req.headers,
  //     withCredentials: true,
  //   });

  //   console.log(data);
  // } catch (e) {
  //   console.log(e);
  // }

  // if (session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};
