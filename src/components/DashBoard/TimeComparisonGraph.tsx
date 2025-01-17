import React from 'react';
import DashboardCardLayout from './DashboardCardLayout';

type TimeComparisonGraphProps = {
  data: { written: number; practical: number; total: number };
};
export default function TimeComparisonGraph({ data }: TimeComparisonGraphProps) {
  const maxType = data.written > data.practical ? '필기' : '실기';
  return (
    <DashboardCardLayout className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <div className="rounded-full"></div>
      </div>
    </DashboardCardLayout>
  );
}
//TODO:UXUI피드백받은 후 작업 추가 예정
