import React from 'react';
import Badge from '@/components/Badge/Badge';
import { BadgeGridProps } from './types';

const BadgeGrid = ({ title, badges }: BadgeGridProps) => (
  <div className="flex flex-col gap-6">
    <p className="text-title-small-desktop text-neutral-30">{title}</p>
    <div className="grid grid-cols-5 tablet:grid-cols-3">
      {badges.map((item, index) => (
        <Badge
          key={index}
          achieveItem={item.achieveItem}
          achieve={item.achieve}
          onClick={
            item.achieve ? () => alert(`${item.title} 선택 ㄱ?`) : undefined
          }
        />
      ))}
    </div>
  </div>
);

export default BadgeGrid;
