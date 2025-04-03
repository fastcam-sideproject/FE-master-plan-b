import React from 'react';

interface DashboardCardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCardLayout({
  children,
  className,
}: DashboardCardLayoutProps) {
  return (
    <div
      className={`flex rounded-7 bg-neutral-0 px-10 py-9 shadow-2 desktop:w-[530px] tablet:w-[343px] tablet:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
