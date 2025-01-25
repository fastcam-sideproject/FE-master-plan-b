import React from 'react';
import { IconUserFilled, IconChevronRight } from '@tabler/icons-react';

type CardContentCommunityProps = {
  examId: string;
  community: number;
};

export default function CardContentCommunity({ examId, community }: CardContentCommunityProps) {
  const handleGoToCommunity = () => {
    //TODO:
  };
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center size-fit gap-2 mobile:gap-0">
        <div className="bg-neutral-5 rounded-3 flex items-center justify-center size-8 p-[6px] mobile:size-7 mobile:p-2">
          <IconUserFilled className="size-full" />
        </div>
        <span className="text-body-medium-desktop tablet:text-body-small-desktop mobile:text-body-xxsmall-mobile text-neutral-50">
          +{community}명 참여중
        </span>
      </div>
      <button
        className="flex items-center justify-center size-9 tablet:size-8 mobile:size-6 bg-neutral-85 rounded-full p-[10px] tablet:p-[6px] mobile:p-1 text-neutral-5"
        onClick={handleGoToCommunity}
      >
        <IconChevronRight className="size-full" />
      </button>
    </div>
  );
}
