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
    <DashboardCardLayout className="flex-col items-center gap-9 tablet:w-[343px] tablet:justify-center tablet:gap-6 tablet:p-6 mobile:w-[343px] mobile:justify-center mobile:p-6">
      <p className="w-full text-title-medium-desktop text-neutral-80 tablet:w-[270px] tablet:text-title-small-desktop mobile:w-[270px] mobile:text-title-small-desktop">
        필기 과목별 평균 학습시간
      </p>
      <div className="flex justify-center">
        <div className="relative flex h-[180px] w-[314px] gap-5 tablet:h-[143px] tablet:w-[210px] mobile:h-[143px] mobile:w-[210px]">
          {updatedData.map((data, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-end gap-3 tablet:gap-1 mobile:gap-1"
            >
              <span
                className={`${data.isMax ? 'text-neutral-85' : 'text-neutral-50'} text-body-medium-desktop tablet:text-body-xxsmall-desktop mobile:text-body-xxsmall-desktop`}
              >
                {data.value}%
              </span>
              <div
                className={`${data.isMax ? 'bg-neutral-85' : 'bg-neutral-10'} w-full rounded-t-4`}
                style={{ height: `${data.height}%` }}
              ></div>
              <span
                key={index}
                className={`${data.isMax ? 'text-neutral-85' : 'text-neutral-50'} text-body-xsmall-desktop tablet:text-body-xxsmall-desktop mobile:text-body-xxsmall-desktop`}
              >
                {data.label}
              </span>
            </div>
          ))}
          <div className="absolute bottom-[29px] h-px w-full bg-neutral-50 tablet:bottom-[19px] mobile:bottom-[19px]"></div>
        </div>
      </div>
    </DashboardCardLayout>
  );
}
