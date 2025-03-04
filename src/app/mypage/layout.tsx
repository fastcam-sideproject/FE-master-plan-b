import React from 'react';
import Footer from '@/components/Footer/Footer';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';

export default function MypageLayout({ children }: { children: React.ReactNode }) {
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
