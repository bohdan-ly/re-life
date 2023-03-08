import { GetServerSideProps } from 'next';
import React, { useState } from 'react';

// eslint-disable-next-line boundaries/element-types
import { LoginPage } from 'pages/login';

export default function Login() {
  return <LoginPage />;
}
