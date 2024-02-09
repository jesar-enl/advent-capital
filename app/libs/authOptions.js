import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

import { compare } from 'bcrypt';
import db from './db';

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          console.log('Authorize function received credentials: ', credentials);

          if (!credentials?.email || !credentials?.password) {
            throw { error: 'No inputs received', status: 401 };
          }
          console.log('Check 1 passed.');

          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            console.log('No user found');
            throw { error: 'No user found', status: 401 };
          }
          console.log('Check 2 passed.');
          // If the passwords match return the user object
          const passwordsMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          if (!passwordsMatch) {
            console.log('Passwords do not match');
            throw { error: 'Passwords do not match', status: 401 };
          }
          console.log('Check 3 passed.');

          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            image: existingUser.image,
            role: existingUser.role,
            emailVerified: existingUser.emailVerified,
          };
          console.log('User compiled successfully.');

          return user;
        } catch (error) {
          console.log('ALL Failed');
          console.log(error);
          throw { error: 'Something went wrong', status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
          emailVerified: user.emailVerified,
        };
      }
      console.log(`token: ${token}`);
      return token;
    },
    async session({ session, token }) {
      console.log(`token: ${token} in session`);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
          image: token.image,
          emailVerified: token.emailVerified,
        },
      };
      console.log(`session: ${session.user}`);
    },
  },
};
