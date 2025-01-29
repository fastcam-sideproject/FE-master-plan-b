import React from 'react';

type StepperItemProps = {
  index: number;
  label: string;
  time: number;
};
export default function StepperItem({ index, label, time }: StepperItemProps) {
  return (
    <div className="flex flex-col items-center justify-between desktop:w-[140px] w-[80px] gap-4">
      <div className="text-neutral-30 text-body-xsmall-desktop mobile:text-body-xsmall-mobile">
        {index}
      </div>
      <div className="w-[90px] h-[62px] flex items-center text-center whitespace-pre-line break-spaces">
        {label}
      </div>
      <div className="bg-neutral-5 rounded-4 desktop:text-label-small-desktop text-label-xsmall-desktop text-neutral-60 px-3 py-2">
        {time}분
      </div>
    </div>
  );
}
