import React from 'react';
import { IconPencil, IconWand } from '@tabler/icons-react';
import DashboardCardLayout from './DashboardCardLayout';

// 아, Tailwind CSS에서 동적 클래스 값을 템플릿 리터럴로 직접 사용하는 것은 작동하지 않습니다. 대신 인라인 스타일을 사용하여 너비를 설정하겠습니다.

type TimeComparisonGraphProps = {
  data: { written: number; practical: number; total: number };
};
export default function TimeComparisonGraph({
  data,
}: TimeComparisonGraphProps) {
  const maxType = data.written > data.practical ? '필기' : '실기';
  const isEqual = data.written === data.practical;
  const month = Math.floor(data.total / 30);
  const iconStyle =
    'text-primary-50 size-[48px] tablet:size-[31px] mobile:size-[31px]';
  const monthStyle =
    'relative bg-neutral-5 rounded-10 w-full h-[24px] tablet:h-[20px] mobile:h-[20px] px-6 text-label-small-desktop font-[400] flex items-center justify-end tablet:text-label-xsmall-desktop mobile:text-label-xsmall-desktop';
  const graphStyle =
    'absolute left-0 top-0 h-full rounded-full bg-primary-30 flex items-center px-6 text-label-small-desktop font-[400] text-neutral-85 tablet:text-label-xsmall-desktop mobile:text-label-xsmall-desktop';

  return (
    <DashboardCardLayout className="flex flex-col items-center tablet:w-[343px] tablet:p-6 mobile:w-[343px] mobile:p-6">
      <div className="flex w-full flex-col gap-5 tablet:w-[280px] mobile:w-[280px]">
        <div className="flex size-[80px] items-center justify-center rounded-10 bg-primary-5 tablet:size-[60px] mobile:size-[60px]">
          {isEqual ? (
            <IconWand className={iconStyle} />
          ) : data.written > data.practical ? (
            <IconPencil className={iconStyle} />
          ) : (
            <IconWand className={iconStyle} />
          )}
        </div>
        <ul className="text-title-medium-desktop tablet:text-title-small-desktop mobile:text-title-small-desktop">
          {isEqual ? (
            <>
              <li>필기와 실기 준비</li>
              <li>시간이 비슷해요</li>
            </>
          ) : (
            <>
              <li>평균적으로 {maxType}를</li>
              <li>더 오래 준비해요</li>
            </>
          )}
        </ul>
      </div>
      <ul className="flex w-full flex-col gap-2 text-neutral-50 tablet:w-[280px] tablet:gap-0 tablet:text-body-xxsmall-desktop mobile:w-[280px] mobile:gap-0 mobile:text-body-xxsmall-desktop">
        <li>필기</li>
        <li className={monthStyle}>
          {month}개월
          <p
            className={graphStyle}
            style={{ width: `${(data.written / data.total) * 100}%` }}
          >
            {data.written}일
          </p>
        </li>
        <li>실기</li>
        <li className={monthStyle}>
          {month}개월
          <p
            className={graphStyle}
            style={{ width: `${(data.practical / data.total) * 100}%` }}
          >
            {data.practical}일
          </p>
        </li>
      </ul>
    </DashboardCardLayout>
  );
}
