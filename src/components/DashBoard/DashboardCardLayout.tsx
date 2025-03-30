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
      className={`flex w-[530px] rounded-7 bg-neutral-0 px-10 py-9 shadow-2 ${className}`}
    >
      {children}
    </div>
  );
}
