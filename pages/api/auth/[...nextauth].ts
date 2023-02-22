import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import AppleProvider from "next-auth/providers/apple"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],

  secret: process.env.JWT_SECRET,

  //   session: {
  //     strategy: 'jwt',

  //     // Seconds - How long until an idle session expires and is no longer valid.
  //     // maxAge: 30 * 24 * 60 * 60, // 30 days

  //     // Seconds - Throttle how frequently to write to database to extend a session.
  //     // Use it to limit write operations. Set to 0 to always update the database.
  //     // Note: This option is ignored if using JSON Web Tokens
  //     // updateAge: 24 * 60 * 60, // 24 hours
  //   },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  //   jwt: {
  //     secret: process.env.SECRET,
  //   },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    // async session({ session, token, user }) { return session },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});
