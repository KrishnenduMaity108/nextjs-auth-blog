import GitHub from 'next-auth/providers/github';
import type { NextAuthOptions } from 'next-auth';

export const authConfig: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};