import 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      email?: string;
      nickname?: string;
      role?: string;
      accessToken?: string;
      refreshToken?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    nickname: string;
    role: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    email?: string;
    nickname?: string;
    role?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}
