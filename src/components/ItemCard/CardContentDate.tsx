import { useEffect, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';
import { formatDateWeek } from '@/lib/utils';
import { Button } from '../ui/button';

type CardContentDateProps = {
  examId: string;
  regStartDate: string;
  examStartDate: string;
  onAddSchedule?: () => void;
};

export default function CardContentDate({
  regStartDate,
  examStartDate,
  onAddSchedule,
}: CardContentDateProps) {
  const { isMobile, isTablet } = useResponsive();
  const [mounted, setMounted] = useState(false);
  const textSize =
    'text-body-medium-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile';

  const buttonSize = mounted ? (isTablet || isMobile ? 'sm' : 'md') : 'sm';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-6 tablet:gap-3 mobile:gap-4">
        <div className="flex flex-col">
          <div className={`${textSize} flex gap-4 font-[400]`}>
            <span className="text-neutral-30">접수시작일</span>
            <span className="text-neutral-100">
              {formatDateWeek(regStartDate)}
            </span>
          </div>
          <div className={`${textSize} flex gap-4 font-[400]`}>
            <span className="text-neutral-30">시험시작일</span>
            <span className="text-neutral-100">
              {formatDateWeek(examStartDate)}
            </span>
          </div>
        </div>
        <Button
          size={buttonSize}
          variant={'secondary'}
          className="w-[136px] tablet:w-[109px] mobile:w-[98px]"
          onClick={onAddSchedule}
        >
          일정 추가하기
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 tablet:gap-3 mobile:gap-4">
      <div className={`flex flex-col ${isMobile ? 'hidden' : ''}`}>
        {!isTablet && !isMobile && (
          <div className={`${textSize} flex gap-4 font-[400]`}>
            <span className="text-neutral-30">접수시작일</span>
            <span className="text-neutral-100">
              {formatDateWeek(regStartDate)}
            </span>
          </div>
        )}
        {!isMobile && (
          <div className={`${textSize} flex gap-4 font-[400]`}>
            <span className="text-neutral-30">시험시작일</span>
            <span className="text-neutral-100">
              {formatDateWeek(examStartDate)}
            </span>
          </div>
        )}
      </div>
      <Button
        size={buttonSize}
        variant={'secondary'}
        className="w-[136px] tablet:w-[109px] mobile:w-[98px]"
        onClick={onAddSchedule}
      >
        일정 추가하기
      </Button>
    </div>
  );
}
