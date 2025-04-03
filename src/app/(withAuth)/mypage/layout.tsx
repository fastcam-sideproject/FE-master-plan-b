'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer/Footer';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header/Header';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery('(max-width: 767.9px)');

  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('마이페이지 레이아웃 인증 상태:', { isAuthenticated, loading });
    if (!loading && !isAuthenticated) {
      console.log('인증되지 않은 사용자, 로그인 페이지로 리다이렉트');
      router.push('/signin/email');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>인증 확인 중...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex mobile:flex-col">
      {isMobile ? <Header /> : <SideBarFavoriteCertifications />}

      <div className="max-h-[100vh] w-full overflow-auto mobile:overflow-visible">
        <div className="flex justify-center">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
