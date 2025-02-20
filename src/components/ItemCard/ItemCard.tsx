import React from 'react';

import useDateConverter from '@/hooks/useDateConverter';
import BookmarkButton from './BookmarkButton';
import StarRating from '../common/StarRating/StarRating';
import RegDateBadge from './RegDateBadge';
import CardContentInfo from './CardContentInfo';
import CardContentCommunity from './CardContentCommunity';
import CardContentDate from './CardContentDate';

type ItemCardProps = {
  type: 'info' | 'community' | 'date';
  data: {
    examId: string;
    exam: string;
    host: string;
    bookmark: boolean;
    starRating: number;
    category?: string;
    regStartDate?: string;
    regEndDate?: string;
    examStartDate?: string;
    community?: number;
  };
};
const getCardStyles = () => {
  return {
    card:
      'desktop:w-[285px] desktop:h-[270px] desktop:pt-[24px] desktop:pr-[21px] desktop:pb-[34px] desktop:pl-[19px] ' +
      'tablet:w-[218px] tablet:h-[219px] tablet:pt-[21px] tablet:pr-[12px] tablet:pb-[21px] tablet:pl-[16px] ' +
      'mobile:w-[163px] mobile:h-[179px] mobile:pt-[19px] mobile:pr-[17px] mobile:pb-[13px] mobile:pl-[16px]',
    gap: 'desktop:gap-5 tablet:gap-3 mobile:gap-3',
    textSize:
      'desktop:text-body-xxlarge-desktop tablet:text-body-xlarge-desktop mobile:text-body-xlarge-mobile',
    hostTextSize:
      'desktop:text-body-small-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile',
  };
};

export default function ItemCard({ type, data }: ItemCardProps) {
  const { card, gap, textSize, hostTextSize } = getCardStyles();

  return (
    <div
      className={`${card}  flex flex-col justify-between shadow-2 rounded-6 border-2 border-transparent transition duration-300 hover:border-neutral-70 cursor-pointer bg-neutral-0`}
    >
      <div className={`${gap} flex flex-col`}>
        <div className="flex justify-between">
          <RegDateBadge
            start={data.regStartDate}
            end={data.regEndDate}
            type={type}
            category={data.category}
          />
          <BookmarkButton examId={data.examId} initialBookmark={data.bookmark} />
        </div>
        <div className="flex flex-col">
          <StarRating size={'small'} rating={data.starRating} />
          <p className={`${textSize} text-neutral-100`}>{data.exam}</p>
          <p className={`${hostTextSize} text-neutral-40`}>{data.host}</p>
        </div>
      </div>
      {type === 'info' && (
        <CardContentInfo
          regStartDate={data.regStartDate || 'Default'}
          examStartDate={data.examStartDate || 'Default'}
        />
      )}
      {type === 'community' && <div className="w-full h-px bg-neutral-10"></div>}
      {type === 'community' && (
        <CardContentCommunity examId={data.examId} community={data.community || 0} />
      )}
      {type === 'date' && (
        <CardContentDate
          examId={data.examId}
          regStartDate={data.regStartDate || 'Default'}
          examStartDate={data.examStartDate || 'Default'}
        />
      )}
    </div>
  );
}
