'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider as JotaiProvider } from 'jotai';
import ReactQueryProviders from '@/hooks/useReactQuery';
import HeaderWrapper from '@/components/Header/HeaderWrapper';
import FooterWrapper from '@/components/Footer/FooterWrapper';
import { AuthProvider } from '@/context/AuthContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <JotaiProvider>
          <ReactQueryProviders>
            <HeaderWrapper />
            {children}
            <FooterWrapper />
          </ReactQueryProviders>
        </JotaiProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
