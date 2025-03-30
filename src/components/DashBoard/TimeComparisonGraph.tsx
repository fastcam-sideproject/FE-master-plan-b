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
  const iconStyle = 'text-primary-50 w-[48px] h-[48px]';
  const monthStyle =
    'relative bg-neutral-5 rounded-10 w-full h-[24px] px-6 text-label-small-desktop font-[400] flex items-center justify-end';
  const graphStyle =
    'absolute left-0 top-0 h-full rounded-full bg-primary-30 flex items-center px-6 text-label-small-desktop font-[400]';

  return (
    <DashboardCardLayout className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-10 bg-primary-5">
          {isEqual ? (
            <IconWand className={iconStyle} />
          ) : data.written > data.practical ? (
            <IconPencil className={iconStyle} />
          ) : (
            <IconWand className={iconStyle} />
          )}
        </div>
        <ul className="text-title-medium-desktop">
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
      <ul className="flex flex-col gap-2">
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
