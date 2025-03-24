'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer/Footer';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';
import { useAuth } from '@/context/AuthContext';

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // 인증되지 않은 경우 로그인 페이지로 리다이렉트
    if (!isAuthenticated) {
      router.push('/signin/email');
    }
  }, [isAuthenticated, router]);

  // 인증되지 않은 경우 빈 화면 렌더링 (리다이렉트 전)
  if (!isAuthenticated) {
    return <div className="min-h-screen">인증 확인 중...</div>;
  }

  return (
    <div className="flex">
      <SideBarFavoriteCertifications />
      <div className="max-h-[100vh] w-full overflow-auto">
        <div className="flex justify-center">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
