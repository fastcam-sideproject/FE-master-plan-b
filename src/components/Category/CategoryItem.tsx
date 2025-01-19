import React from 'react';

interface CategoryItemProps {
  icon: JSX.Element;
  label: string;
  selected: boolean;
}
export default function CategoryItem({ icon, label, selected }: CategoryItemProps) {
  return (
    <div className="size-[100px] gap-5 flex flex-col items-center cursor-pointer">
      <div
        className={`flex items-center justify-center size-[64px] p-5 rounded-6 shadow-2 transition duration-300 hover:border hover:border-neutral-60 ${selected ? 'bg-neutral-85' : 'bg-neutral-0'}`}
      >
        <div className={`${selected ? 'text-neutral-0' : 'text-neutral-85'}`}>{icon}</div>
      </div>
      <label className="text-body-xsmall-desktop text-neutral-40 font-medium ">{label}</label>
    </div>
  );
}
