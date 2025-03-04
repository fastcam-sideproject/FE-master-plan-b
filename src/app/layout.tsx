import type { Metadata } from 'next';
import './globals.css';
import MswWrapper from '@/components/MswWrapper';
import ReactQueryProviders from '@/hooks/useReactQuery';
import HeaderWrapper from '@/components/Header/HeaderWrapper';
import FooterWrapper from '@/components/Footer/FooterWrapper';
// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Master Plan B',
  description: '자격증 정보',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true} className="bg-neutral-5">
        <ReactQueryProviders>
          <HeaderWrapper />
          <MswWrapper>{children}</MswWrapper>
          <FooterWrapper />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
