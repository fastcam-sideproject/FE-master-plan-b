import type { Metadata } from 'next';
import './globals.css';
import appleSdGothic from '@/components/AppleSdGothic';
import MSWComponent from '@/components/MSWComponent';
import ReactQueryProviders from '@/hooks/useReactQuery';
import Footer from '@/components/Footer/Footer';

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
      <body className={`${appleSdGothic.className}`} suppressHydrationWarning={true}>
        <ReactQueryProviders>
          <MSWComponent>{children}</MSWComponent>
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
