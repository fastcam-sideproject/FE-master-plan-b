import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import BadgeGridHeader from './BadgeGridHeader';
import BadgeGrid from './BadgeGrid';
import { AllBadgesSectionProps } from './types';
import { achievementsBadge, departmentsBadge, activityBadge } from './data';

const popoverText = '마스터 플랜비에서 활동하고\n배지를 모아봐요';
const allBadges = 16;
const collectedBadges = 0;

const AllBadgesSection = ({
  isPopoverVisible,
  setIsPopoverVisible,
}: AllBadgesSectionProps) => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  return (
    <div className="flex flex-col gap-3">
      <ul className="flex items-end justify-between">
        <BadgeGridHeader
          title="전체 배지"
          helpText={popoverText}
          isPopoverVisible={isPopoverVisible}
          setIsPopoverVisible={setIsPopoverVisible}
        />
        <ul className="hidden gap-4 desktop:flex">
          <li className="flex flex-col items-center justify-center gap-[3.2px] text-body-xsmall-desktop text-neutral-30">
            <p>모은 배지</p>
            <p className="text-body-large-desktop text-primary-40">
              {collectedBadges}개
            </p>
          </li>
          <li className="border border-r-0 border-neutral-30"></li>
          <li className="flex flex-col items-center justify-center gap-[3.2px] text-body-xsmall-desktop text-neutral-30">
            <p>전체 배지</p>
            <p className="text-body-large-desktop text-neutral-0">
              {allBadges}개
            </p>
          </li>
        </ul>
      </ul>
      <div className="h-[280px] w-[708px] rounded-7 bg-neutral-70 p-7 tablet:w-[428px]">
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-20 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:ml-[20px] [&::-webkit-scrollbar]:w-[6px]">
          <div className="flex flex-col gap-9">
            <BadgeGrid title="취득 배지" badges={achievementsBadge} />
            <BadgeGrid title="분야별 배지" badges={departmentsBadge} />
            <BadgeGrid title="참여 배지" badges={activityBadge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBadgesSection;
