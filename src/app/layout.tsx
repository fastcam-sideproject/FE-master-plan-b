import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
