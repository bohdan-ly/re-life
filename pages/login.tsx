import axios from 'axios';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import React from 'react';
import { useState } from 'react';

import { getGoogleOAuthURL } from 'shared';
import { EyeSlashIcon, EyeIcon } from 'shared/ui/icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {}, []);

  // const handleSignIn = () => {
  //   signIn('google').catch((e) => console.error(e));
  // };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-primaryColor">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-primaryDarken py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-mono appearance-none rounded-none relative block w-full px-3 py-2 border border-borderPrimary placeholder-secondary text-primaryColor rounded-t-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-mono appearance-none rounded-none relative block w-full px-3 py-2 border border-borderPrimary placeholder-secondary text-primaryColor focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center pr-2 z-20"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-colorPrimary" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-colorPrimary" />
                )}
              </button>
            </div>
            <div></div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primaryColor focus:ring-secondary border-secondary rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-primaryColor">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium link text-secondary hover:text-secondary-500 hover:border-b-2 border-secondary"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <a
              href={getGoogleOAuthURL()}
              className="text-primaryColor bg-secondary mt-4 w-full flex justify-center py-2 px-4 border border-secondary rounded-md shadow-sm text-sm font-medium hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
            >
              Sign in with Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default LoginPage;
