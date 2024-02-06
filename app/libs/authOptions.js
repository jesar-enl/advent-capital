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
    async session({ session, user, token }) {
      if (token) {
        console.log(`token: ${token} in session`);
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.emailVerified = token.emailVerified;
      }
      console.log(`session: ${session.user}`);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.emailVerified = user.emailVerified;
      }
      console.log(`token: ${token}`);
      return token;
    },
  },
};
