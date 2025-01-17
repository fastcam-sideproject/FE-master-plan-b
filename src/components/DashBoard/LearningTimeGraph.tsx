import React from 'react';
import DashboardCardLayout from './DashboardCardLayout';

type LearningTimeGraphProps = {
  data: { label: string; value: number }[];
};

export default function LearningTimeGraph({ data }: LearningTimeGraphProps) {
  const maxValue = Math.max(...data.map((item) => item.value));
  const updatedData = data.map((item) => ({
    label: item.label,
    value: item.value,
    height: (item.value / maxValue) * 100,
    isMax: item.value === maxValue,
  }));

  return (
    <DashboardCardLayout className="flex-col gap-9">
      <p className="text-title-medium-desktop text-neutral-80">필기 과목별 평균 학습시간</p>
      <div className="flex justify-center">
        <div className="relative w-[314px] h-[180px] flex gap-5">
          {updatedData.map((data, index) => (
            <div key={index} className="w-full flex flex-col gap-3 items-center justify-end">
              <span
                className={`${data.isMax ? 'text-neutral-85' : 'text-neutral-50'} text-body-medium-desktop `}
              >
                {data.value}%
              </span>
              <div
                className={`${data.isMax ? 'bg-neutral-85' : 'bg-neutral-10'} w-full rounded-t-4`}
                style={{ height: `${data.height}%` }}
              ></div>
              <span
                key={index}
                className={`${data.isMax ? 'text-neutral-85' : 'text-neutral-50'} text-body-xsmall-desktop`}
              >
                {data.label}
              </span>
            </div>
          ))}
          <div className="absolute bottom-[29px] w-full h-px bg-neutral-50"></div>
        </div>
      </div>
    </DashboardCardLayout>
  );
}
