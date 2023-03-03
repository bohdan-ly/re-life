import { env } from 'process';

import { HttpStatusCode } from 'axios';

import { Api } from '../api';

import { User, UserResponse } from './types';

export const getUser = async (): Promise<User> => {
  const { data, status } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/users/me`,
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
  });

  if (status !== HttpStatusCode.Ok || !data) throw new Error('Failed to fetch user');

  const { data: user } = data;

  if (!user) throw new Error('Failed to fetch user');

  const { _id, email, name, google, photo } = user as UserResponse;

  const userProfile: User = {
    id: _id,
    email,
    name,
    google,
    photo,
    session: '',
    iat: 0,
    exp: 0,
  };

  return userProfile;
};
