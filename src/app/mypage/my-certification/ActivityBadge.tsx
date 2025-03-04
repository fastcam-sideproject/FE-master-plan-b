import React from 'react';
import { IconQuestionMark } from '@tabler/icons-react';
import Badge from '@/components/Badge/Badge';

const ActivityBadge = () => {
  return (
    <div className="flex w-full flex-col justify-end bg-neutral-80">
      <h1>활동 배지</h1>
      <div className="flex">
        <div className="h-fit">
          <ul className="flex">
            <li>나의 대표 배지</li>
            <li className="h-fit w-fit rounded-10 border">
              <IconQuestionMark />
            </li>
          </ul>
          <Badge variant="secondary" achieveItem="growthApprentice" achieve />
        </div>
        {/* 오버플로우는 추후 정돈할 것 */}
        <div className="h-fit">
          <ul className="flex justify-between">
            <ul className="flex">
              <li>전체 배지</li>
              <li className="h-fit w-fit rounded-10 border">
                <IconQuestionMark />
              </li>
            </ul>
            <ul>
              <li className="flex flex-col items-center">
                <p>모은 배지</p>
                <p>n개</p>
              </li>
              <li className="flex flex-col items-center">
                <p>전체 배지</p>
                <p>n개</p>
              </li>
            </ul>
          </ul>
          <div className="w-[708px] overflow-x-auto rounded-7 bg-neutral-70">
            <Badge achieveItem="all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBadge;
