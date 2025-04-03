import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { USERS_API_PATH } from '@/api/path';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 개발 환경에서는 항상 로그인 성공
        // todo: 개발자 로그인은 배포 시 제거할 것
        if (process.env.NODE_ENV === 'development') {
          return {
            id: 'dev-user',
            email: credentials.email,
            nickname: '개발자',
            role: 'user',
            accessToken: 'dev-token',
          };
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}${USERS_API_PATH.login}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            },
          );

          const data = await res.json();
          const authHeader = res.headers.get('authorization') || undefined;

          console.log('로그인 응답 데이터:', data);
          console.log('인증 헤더:', authHeader);

          if (data.status === 200 && data.data) {
            const user = {
              id: data.data.email,
              email: data.data.email,
              nickname: data.data.nickname,
              role: data.data.role,
              accessToken: authHeader,
            };
            console.log('생성된 사용자 객체:', user);
            return user;
          }
          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT 콜백:', { token, user });
      if (user) {
        token.email = user.email;
        token.nickname = user.nickname;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('세션 콜백:', { session, token });
      if (session.user) {
        session.user.email = token.email;
        session.user.nickname = token.nickname;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin/email',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1시간
  },
  secret: process.env.NEXTAUTH_SECRET,
};
