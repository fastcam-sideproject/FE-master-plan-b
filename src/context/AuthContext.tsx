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
    const handleSessionUpdate = async (event: SessionUpdateEvent) => {
      const { accessToken } = event.detail;
      await update({
        ...session,
        user: {
          ...session?.user,
          accessToken,
        },
      });
    };

    window.addEventListener(
      'session-update',
      handleSessionUpdate as EventListener,
    );
    return () => {
      window.removeEventListener(
        'session-update',
        handleSessionUpdate as EventListener,
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
    router.push('/login');
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
