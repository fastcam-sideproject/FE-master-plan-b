import useResponsive from '@/hooks/useResponsive';
import { formatDateWeek } from '@/lib/utils';
import React from 'react';

type CardContentInfoProps = {
  regStartDate: string;
  examStartDate: string;
};
export default function CardContentInfo({ regStartDate, examStartDate }: CardContentInfoProps) {
  const { isMobile } = useResponsive();
  const textSize =
    'text-body-medium-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile';

  return (
    <div className="flex flex-col">
      <div className={`${textSize} flex gap-4`}>
        <span className="text-neutral-30">{isMobile ? '접수' : '접수시작일'}</span>
        <span className="text-neutral-100">{formatDateWeek(regStartDate)}</span>
      </div>
      <div className={`${textSize} flex gap-4`}>
        <span className="text-neutral-30">{isMobile ? '시험' : '시험시작일'}</span>
        <span className="text-neutral-100">{formatDateWeek(examStartDate)}</span>
      </div>
    </div>
  );
}
