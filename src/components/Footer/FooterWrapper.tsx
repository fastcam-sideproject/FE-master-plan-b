'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const isMyPage = pathname?.startsWith('/mypage');

  if (isMyPage) return null;

  return <Footer />;
}
