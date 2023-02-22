import { IncomingMessage, ServerResponse } from 'http';

import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import authOptions from './auth/[...nextauth]';

const getSession = async (
  req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }),
  res: any | ServerResponse<IncomingMessage> | NextApiResponse<any>,
) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};

export default getSession;
