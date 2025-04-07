'use client';

import React, { useState } from 'react';
import RepresentativeBadgeSection from './BadgeComponents/RepresentativeBadgeSection';
import AllBadgesSection from './BadgeComponents/AllBadgesSection';

const ActivityBadge = () => {
  const [isPopoverVisible1, setIsPopoverVisible1] = useState(false);
  const [isPopoverVisible2, setIsPopoverVisible2] = useState(false);

  return (
    <div className="flex justify-center bg-neutral-80 px-9 pb-[64px] pt-[120px] tablet:px-6 tablet:py-[80px]">
      <div className="flex w-[1161px] flex-col gap-9 tablet:w-[656px]">
        <h1 className="text-heading-medium-desktop text-neutral-0">
          활동 배지
        </h1>
        <div className="flex items-end gap-[80px] tablet:gap-5">
          <RepresentativeBadgeSection
            isPopoverVisible={isPopoverVisible1}
            setIsPopoverVisible={setIsPopoverVisible1}
          />
          <AllBadgesSection
            isPopoverVisible={isPopoverVisible2}
            setIsPopoverVisible={setIsPopoverVisible2}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityBadge;
