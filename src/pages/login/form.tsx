import Link from 'next/link';
import React, { useState } from 'react';

import { EyeIcon, EyeSlashIcon } from 'shared/ui/icons';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {}, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
          <Link
            href="#"
            className="font-medium link text-secondary hover:text-secondary-500 hover:border-b-2 border-secondary"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};
