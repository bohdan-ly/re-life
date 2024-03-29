import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { BorderedButton } from 'shared/ui/components';

import { GoogleAuthButton } from 'features/login';

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Login | ReLifeRPG</title>
        <meta name="robots" content="none" />
      </Head>
      <header className="block fixed top-0 inset-x-0 z-50 w-full border-royal/20">
        <div className="relative z-10 px-4 py-2 h-full w-full flex align-center">
          <Link href="/">
            <BorderedButton title="Back" />
          </Link>
        </div>
      </header>
      <div className="relative z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primaryColor">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-primaryDarken py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <GoogleAuthButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
