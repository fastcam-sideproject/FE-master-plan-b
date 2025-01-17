import React from 'react';

interface DashboardCardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCardLayout({ children, className }: DashboardCardLayoutProps) {
  return (
    <div className={`flex w-[530px] px-10 py-9 rounded-7 shadow-2 ${className}`}>{children}</div>
  );
}
