import React from 'react';

type HorizontalBarProps = {
  label: string;
  value: number;
};
export default function HorizontalBar({ label, value }: HorizontalBarProps) {
  return (
    <div className="relative flex items-center h-[55px] rounded-4 bg-neutral-5">
      <div
        className="absolute left-0 h-[55px] rounded-4 bg-neutral-90"
        style={{ width: `${value}%` }}
      ></div>
      <label className="absolute left-6 text-neutral-0 text-body-small-desktop">{label}</label>
      <div className="absolute right-6 text-neutral-30 text-body-small-desktop">{value}%</div>
    </div>
  );
}
