import useResponsive from '@/hooks/useResponsive';
import { formatDateWeek } from '@/lib/utils';
import { Button } from '../ui/button';

type CardContentDateProps = {
  examId: string;
  regStartDate: string;
  examStartDate: string;
};
export default function CardContentDate({
  regStartDate,
  examStartDate,
}: CardContentDateProps) {
  const { isMobile, isTablet } = useResponsive();
  const textSize =
    'text-body-medium-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile';
  const buttonSize = isTablet ? 'md' : isMobile ? 'sm' : 'lg';
  return (
    <div className="flex flex-col gap-6 tablet:gap-3">
      <div className="flex flex-col">
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
      <Button size={'md'} variant={'secondary'} className="w-[136px]">
        일정 추가하기
      </Button>
    </div>
  );
}
