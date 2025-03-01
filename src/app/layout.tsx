import type { Metadata } from 'next';
import './globals.css';
import MswWrapper from '@/components/MswWrapper';
import ReactQueryProviders from '@/hooks/useReactQuery';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

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
          <Header />
          <MswWrapper>{children}</MswWrapper>
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
