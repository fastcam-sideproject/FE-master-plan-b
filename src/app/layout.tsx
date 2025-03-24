import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
