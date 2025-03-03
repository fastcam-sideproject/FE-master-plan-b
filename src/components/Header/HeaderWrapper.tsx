'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isMyPage = pathname?.startsWith('/mypage');

  if (isMyPage) return null;

  return <Header />;
}
