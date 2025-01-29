import React from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import StepperItem from './StepperItem';

type StepperProps = {
  data: { label: string; time: number }[];
};
export default function Stepper({ data }: StepperProps) {
  return (
    <div className="w-full mobile:grid mobile:grid-cols-6 mobile:justify-items-center mobile:gap-y-6 flex items-center justify-between">
      {data.map((item, index) => (
        <>
          <StepperItem index={index + 1} label={item.label} time={item.time} />
          {index < data.length - 1 && (
            <IconChevronRight className="text-neutral-10 size-[20px] desktop:size-[32px]" />
          )}
        </>
      ))}
    </div>
  );
}
