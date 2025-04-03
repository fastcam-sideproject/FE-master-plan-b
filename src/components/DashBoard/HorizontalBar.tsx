import React from 'react';

type HorizontalBarProps = {
  label: string;
  value: number;
};
export default function HorizontalBar({ label, value }: HorizontalBarProps) {
  return (
    <div className="relative flex h-[55px] items-center rounded-4 bg-neutral-5 tablet:h-[36px] mobile:h-[36px]">
      <div
        className="absolute left-0 h-full rounded-4 bg-neutral-90"
        style={{ width: `${value}%` }}
      ></div>
      <label className="absolute left-6 text-body-small-desktop text-neutral-0 tablet:text-label-xsmall-desktop mobile:text-label-xsmall-desktop">
        {label}
      </label>
      <div className="absolute right-6 text-body-small-desktop text-neutral-30 tablet:text-label-xsmall-desktop mobile:text-label-xsmall-desktop">
        {value}%
      </div>
    </div>
  );
}
