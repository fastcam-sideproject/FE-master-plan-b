'use client';

import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SessionUpdateEvent extends CustomEvent {
  detail: {
    accessToken: string;
  };
}

interface AuthContextType {
  isAuthenticated: boolean;
  userInfo: {
    email?: string | null;
    nickname?: string | null;
    role?: string | null;
    accessToken?: string | null;
  } | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log('세션 상태 변화:', { status, session });
  }, [status, session]);

  useEffect(() => {
    const handleSessionUpdate = async (event: SessionUpdateEvent) => {
      const { accessToken } = event.detail;
      console.log('세션 업데이트 이벤트 수신:', { accessToken });

      await update({
        ...session,
        user: {
          ...session?.user,
          accessToken,
        },
      });
      console.log('세션 업데이트 완료');
    };

    window.addEventListener(
      'session-update',
      handleSessionUpdate as unknown as EventListener,
    );
    return () => {
      window.removeEventListener(
        'session-update',
        handleSessionUpdate as unknown as EventListener,
      );
    };
  }, [session, update]);

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.ok) {
        // todo: 로그인에 성공하면 원래 들어가려던 페이지로 이동
        router.push('/mypage');
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/signin/email');
  };

  const value = {
    isAuthenticated: status === 'authenticated',
    userInfo: session?.user ?? null,
    loading: status === 'loading',
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
