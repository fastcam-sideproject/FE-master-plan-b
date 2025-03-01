import React from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import StepperItem from './StepperItem';

export type StepperProps = {
  data: { label: string; time: number }[];
};
export default function Stepper({ data }: StepperProps) {
  return (
    <div className="flex w-full items-center justify-between mobile:grid mobile:grid-cols-6 mobile:justify-items-center mobile:gap-y-6">
      {data.map((item, index) => (
        <>
          <StepperItem index={index + 1} label={item.label} time={item.time} />
          {index < data.length - 1 && (
            <IconChevronRight className="size-[20px] text-neutral-10 desktop:size-[32px]" />
          )}
        </>
      ))}
    </div>
  );
}
