'use client';

import React, { useState } from 'react';
import { IconQuestionMark } from '@tabler/icons-react';
import Badge from '@/components/Badge/Badge';
import Popover from '@/components/Popover/Popover';

// 취득 배지
//
// 분야별 배지

const ActivityBadge = () => {
  const [isPopoverVisible1, setIsPopoverVisible1] = useState(false);
  const [isPopoverVisible2, setIsPopoverVisible2] = useState(false);

  return (
    <div className="flex w-full flex-col justify-end bg-neutral-80">
      <h1>활동 배지</h1>
      <div className="flex">
        <div className="h-fit">
          <ul className="flex">
            <li>나의 대표 배지</li>
            <li className="relative w-fit">
              <p
                className="h-fit w-fit rounded-10 border"
                onMouseEnter={() => setIsPopoverVisible1(true)}
                onMouseLeave={() => setIsPopoverVisible1(false)}
              >
                <IconQuestionMark />
              </p>
              {isPopoverVisible1 && (
                <Popover
                  label="대표 배지를 설정하고 프로필에 등록해 봐요"
                  mode="light"
                  tipDirection="up"
                  tipPosition="end"
                />
              )}
            </li>
          </ul>
          <Badge variant="secondary" achieveItem="growthApprentice" achieve />
        </div>
        {/* 오버플로우는 추후 정돈할 것 */}
        <div className="h-fit">
          <ul className="flex justify-between">
            <ul className="flex">
              <li>전체 배지</li>
              <li className="relative">
                <p
                  className="h-fit w-fit rounded-10 border"
                  onMouseEnter={() => setIsPopoverVisible2(true)}
                  onMouseLeave={() => setIsPopoverVisible2(false)}
                >
                  <IconQuestionMark />
                </p>
                {isPopoverVisible2 && (
                  <Popover
                    label="대표 배지를 설정하고 프로필에 등록해 봐요"
                    mode="light"
                    tipDirection="up"
                    tipPosition="center"
                  />
                )}
              </li>
            </ul>
            <ul>
              <li className="flex flex-col items-center justify-center">
                <p>모은 배지</p>
                <p>n개</p>
              </li>
              <li className="flex flex-col items-center justify-center">
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
