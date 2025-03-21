'use client';

import React, { useState } from 'react';
import { IconHelp } from '@tabler/icons-react';
import Popover from '@/components/Popover/Popover';
import Badge from '@/components/Badge/Badge';

// todo: 달성 여부에 따른 배지들은 추후 api에서 끌어올 것
interface AchievementForActivityBadge {
  achieveItem: string;
  achieve: boolean;
  title: string;
}

const achievementsForActivityBadge: AchievementForActivityBadge[] = [
  {
    achieveItem: 'apprentice',
    achieve: true,
    title: '견습생',
  },
  {
    achieveItem: 'expert',
    achieve: true,
    title: '숙련자',
  },
  {
    achieveItem: 'master',
    achieve: false,
    title: '달인',
  },
  {
    achieveItem: 'grandMaster',
    achieve: false,
    title: '마스터',
  },
  {
    achieveItem: 'businessBrain',
    achieve: false,
    title: '경영계 브레인',
  },
  {
    achieveItem: 'financeFairy',
    achieve: true,
    title: '금융요정',
  },
  {
    achieveItem: 'knowledgeExplorer',
    achieve: false,
    title: '지식탐험가',
  },
  {
    achieveItem: 'healthMentor',
    achieve: true,
    title: '건강멘토',
  },
  {
    achieveItem: 'designMaster',
    achieve: false,
    title: '디자인 마스터',
  },
  {
    achieveItem: 'machineEnthusiast',
    achieve: true,
    title: '기계덕후',
  },
  {
    achieveItem: 'electronicsMaestro',
    achieve: false,
    title: '전자 마에스트로',
  },
  {
    achieveItem: 'codingPro',
    achieve: false,
    title: '코딩프로',
  },
  {
    achieveItem: 'globalCommunicator',
    achieve: false,
    title: '글로벌 커뮤니케이터',
  },
  {
    achieveItem: 'sprinter',
    achieve: false,
    title: '스프린터',
  },
  {
    achieveItem: 'communityChampion',
    achieve: true,
    title: '커뮤니티 활동왕',
  },
  {
    achieveItem: 'growthApprentice',
    achieve: false,
    title: '폭풍성장 견습생',
  },
];

const ActivityBadge = () => {
  const [isPopoverVisible1, setIsPopoverVisible1] = useState(false);
  const [isPopoverVisible2, setIsPopoverVisible2] = useState(false);

  const achieveTrue = achievementsForActivityBadge.filter(
    (item) => item.achieve === true,
  );
  const achieveFalse = achievementsForActivityBadge.filter(
    (item) => item.achieve === false,
  );

  return (
    // <div className="flex w-full flex-col justify-end bg-neutral-80 px-9 pt-[120px]">
    <div className="flex justify-center bg-neutral-80 px-9 pb-[64px] pt-[120px]">
      <div className="flex w-[1161px] flex-col gap-9">
        <h1 className="text-heading-medium-desktop text-neutral-0">
          활동 배지
        </h1>
        <div className="flex items-end gap-[80px]">
          {/* 나의 대표 배지 영역 */}
          <div className="flex flex-col gap-3">
            <ul className="flex gap-3">
              <li className="text-body-medium-desktop font-[700] text-neutral-0">
                나의 대표 배지
              </li>
              <ul>
                <li className="relative w-fit">
                  <IconHelp
                    onMouseEnter={() => setIsPopoverVisible1(true)}
                    onMouseLeave={() => setIsPopoverVisible1(false)}
                    className="text-neutral-0"
                  />
                  {isPopoverVisible1 && (
                    <Popover
                      label="대표 배지를 설정하고 프로필에 등록해 봐요"
                      mode="light"
                      tipDirection="up"
                      tipPosition="center"
                    />
                  )}
                </li>
              </ul>
            </ul>
            <Badge
              variant="secondary"
              achieveItem="growthApprentice"
              achieve
              selected="true"
            />
          </div>
          {/* 전체 배지 영역 */}
          <div className="flex flex-col gap-3">
            <ul className="flex items-end justify-between">
              <ul className="flex gap-3">
                <li className="text-body-medium-desktop font-[700] text-neutral-0">
                  전체 배지
                </li>
                <ul>
                  <li className="relative w-fit">
                    <IconHelp
                      onMouseEnter={() => setIsPopoverVisible2(true)}
                      onMouseLeave={() => setIsPopoverVisible2(false)}
                      className="text-neutral-0"
                    />
                    {isPopoverVisible2 && (
                      <Popover
                        label="마스터 플랜비에서 활동하고 배지를 모아봐요"
                        mode="light"
                        tipDirection="up"
                        tipPosition="center"
                      />
                    )}
                  </li>
                </ul>
              </ul>
              <ul className="flex gap-4">
                <li className="flex flex-col items-center justify-center gap-[3.2px] text-body-xsmall-desktop text-neutral-30">
                  <p>모은 배지</p>
                  <p className="text-body-large-desktop text-primary-40">n개</p>
                </li>
                <li className="border border-r-0 border-neutral-30"></li>
                <li className="flex flex-col items-center justify-center gap-[3.2px] text-body-xsmall-desktop text-neutral-30">
                  <p>전체 배지</p>
                  <p className="text-body-large-desktop text-neutral-0">n개</p>
                </li>
              </ul>
            </ul>
            <div className="h-[280px] w-[708px] rounded-7 bg-neutral-70 p-7">
              <div className="h-full overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-20 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:ml-[20px] [&::-webkit-scrollbar]:w-[6px]">
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-6">
                    <p className="text-title-small-desktop text-neutral-30">
                      취득 배지
                    </p>
                    <div className="grid grid-cols-5">
                      {achieveTrue.map((item, index) => (
                        <Badge
                          key={index}
                          achieveItem={item.achieveItem}
                          achieve={true}
                          onClick={() => alert(`${item.title} 선택 ㄱ?`)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-title-small-desktop text-neutral-30">
                      분야별 배지
                    </p>
                    <div className="grid grid-cols-5">
                      {achieveFalse.map((item, index) => (
                        <Badge key={index} achieveItem={item.achieveItem} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBadge;
