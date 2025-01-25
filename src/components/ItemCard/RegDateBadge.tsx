import React from 'react';
import Category from '../Category/Category';

type RegDateBadgeProps = {
  start?: string;
  end?: string;
  type: 'info' | 'community' | 'date';
  category?: string;
};
const BadgeSizeStyles = () => {
  return {
    badge:
      'desktop:h-[29px] desktop:text-label-small-desktop ' +
      'tablet:h-[24px] tablet:text-label-xsmall-desktop ' +
      'mobile:h-[20px] mobile:text-label-xsmall-mobile',
  };
};
export default function RegDateBadge({ start, end, type, category }: RegDateBadgeProps) {
  const badgeSize = BadgeSizeStyles();
  const commonStyles = 'flex items-center justify-center px-3 rounded-4';
  const today = new Date();

  if (!start || !end) return null;

  const startDate = new Date(start);
  const endDate = new Date(end);
  if (type === 'community') {
    return (
      <div className={`${badgeSize} ${commonStyles} text-neutral-40 bg-neutral-5 `}>
        <span>{category}</span>
      </div>
    );
  } else if (today < startDate) {
    const diffTime = startDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffTime / (1000 * 3600 * 24));
    return (
      <div className={`${badgeSize} ${commonStyles} text-neutral-40 bg-neutral-5 `}>
        <span>D-{daysRemaining}</span>
      </div>
    );
  }

  if (today >= startDate && today <= endDate) {
    return (
      <div className={`${badgeSize} ${commonStyles} text-primary-40 bg-neutral-85`}>
        <span>접수중</span>
      </div>
    );
  }

  if (today > endDate) {
    return (
      <div className={`${badgeSize} ${commonStyles} text-neutral-40 bg-neutral-5 `}>
        <span>접수마감</span>
      </div>
    );
  }

  return null;
}
