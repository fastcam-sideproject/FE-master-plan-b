'use client';

import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import BadgeIcon from './BadgeIcon';
import { Button } from '../ui/button';

// achieveItem='all'을 선택하면 모든 달성 항목이 출력됨
// achieveItem: 'apprentice'와 같이 이름을 적어넣을 경우 해당 내용만 출력됨
//
// selected={true}일 경우 노란색 border와 체크 표시가 출력됨.

type BadgeIconType =
  | 'chick'
  | 'medal'
  | 'trophy'
  | 'fire'
  | 'chart'
  | 'coin'
  | 'book'
  | 'pill'
  | 'palette'
  | 'gear'
  | 'lightBulb'
  | 'laptop'
  | 'globe'
  | 'bullseye'
  | 'speechbubble'
  | 'turtle'
  | 'graduationCap';

interface Achievement {
  achieveItem: string;
  title: string;
  condition: string;
  badgeIconName: BadgeIconType;
}

const achievements: Achievement[] = [
  {
    achieveItem: 'apprentice',
    title: '견습생',
    condition: '자격증 취득\n1개 이상',
    badgeIconName: 'chick',
  },
  {
    achieveItem: 'expert',
    title: '숙련자',
    condition: '자격증 취득\n3개 이상',
    badgeIconName: 'medal',
  },
  {
    achieveItem: 'master',
    title: '달인',
    condition: '자격증 취득\n5개 이상',
    badgeIconName: 'trophy',
  },
  {
    achieveItem: 'grandMaster',
    title: '마스터',
    condition: '자격증 취득\n10개 이상',
    badgeIconName: 'fire',
  },
  {
    achieveItem: 'businessBrain',
    title: '경영계 브레인',
    condition: '경영 회계 사무\n자격증 취득',
    badgeIconName: 'chart',
  },
  {
    achieveItem: 'financeFairy',
    title: '금융요정',
    condition: '금융 보험\n자격증 취득',
    badgeIconName: 'coin',
  },
  {
    achieveItem: 'knowledgeExplorer',
    title: '지식탐험가',
    condition: '교육 사회과학\n자격증 취득',
    badgeIconName: 'book',
  },
  {
    achieveItem: 'healthMentor',
    title: '건강멘토',
    condition: '보건 의료\n자격증 취득',
    badgeIconName: 'pill',
  },
  {
    achieveItem: 'designMaster',
    title: '디자인 마스터',
    condition: '예술 디자인\n자격증 취득',
    badgeIconName: 'palette',
  },
  {
    achieveItem: 'machineEnthusiast',
    title: '기계덕후',
    condition: '건설 기계\n자격증 취득',
    badgeIconName: 'gear',
  },
  {
    achieveItem: 'electronicsMaestro',
    title: '전자 마에스트로',
    condition: '전기 전자\n자격증 취득',
    badgeIconName: 'lightBulb',
  },
  {
    achieveItem: 'codingPro',
    title: '코딩프로',
    condition: '정보통신 IT\n자격증 취득',
    badgeIconName: 'laptop',
  },
  {
    achieveItem: 'globalCommunicator',
    title: '글로벌 커뮤니케이터',
    condition: '외국어\n자격증 취득',
    badgeIconName: 'globe',
  },
  {
    achieveItem: 'sprinter',
    title: '스프린터',
    condition: '한 달 이내\n자격증 취득',
    badgeIconName: 'bullseye',
  },
  {
    achieveItem: 'communityChampion',
    title: '커뮤니티 활동왕',
    condition: '커뮤니티/게시글\n30개 이상',
    badgeIconName: 'speechbubble',
  },
  {
    achieveItem: 'growthApprentice',
    title: '폭풍성장 견습생',
    condition: '자격증\n재도전',
    badgeIconName: 'turtle',
  },
];

const badgeVariants = cva('flex flex-col justify-between items-center', {
  variants: {
    variant: {
      // 프레임 없음
      default: 'text-body-xsmall-desktop text-neutral-0 w-[100px] break-keep',
      // 프레임 있음
      secondary:
        'w-[229px] h-[280px] rounded-7 p-6 text-body-large-desktop font-bold text-neutral-0 radial-gradient(59.53% 59.53% at 12.86% 22.03%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(66, 66, 66, 0.8)',
    },
  },
});

const Badge = ({
  achieveItem,
  variant = 'default',
  selected = false,
  achieve = false,
}: {
  achieveItem: string;
  variant?: 'default' | 'secondary';
  selected?: boolean;
  achieve?: boolean;
}) => {
  // 선택된 배지를 추적하기 위한 state 추가
  const [selectedBadge, setSelectedBadge] = React.useState<string>('');

  const filteredAchievements =
    achieveItem === 'all'
      ? achievements
      : achievements.filter((item) => item.achieveItem === achieveItem);

  return (
    <div className="flex">
      {filteredAchievements.map((item, index) => (
        <div
          key={index}
          className={cn(badgeVariants({ variant }))}
          onClick={() => setSelectedBadge(item.achieveItem)}
          style={
            variant === 'secondary'
              ? {
                  background:
                    'radial-gradient(59.53% 59.53% at 12.86% 22.03%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(66, 66, 66, 0.8)',
                }
              : undefined
          }
        >
          <div
            className={cn(
              'flex flex-col items-center justify-center',
              variant === 'secondary' ? 'gap-5' : 'gap-2',
            )}
          >
            <div
              className={cn(
                'relative flex h-[100px] w-[100px] items-center justify-center rounded-10 bg-neutral-80',
                !achieve && 'grayscale',
                selected && 'box-border border-2 border-primary-40',
              )}
            >
              <div>
                <BadgeIcon type={item.badgeIconName} />
              </div>
              <div
                className={cn(
                  'contents-[""] absolute right-0 top-0 rounded-10 bg-primary-40',
                  !selected && 'invisible',
                )}
              >
                <IconCheck className="text-neutral-0" />
              </div>
              <div
                className={cn(
                  'absolute z-10 whitespace-pre-line text-center text-body-xsmall-desktop text-neutral-0',
                  achieve && 'invisible',
                )}
              >
                {item.condition}
              </div>
            </div>
            <div className="text-center">{item.title}</div>
          </div>
          {variant === 'secondary' && (
            <Button
              variant="text"
              size="sm"
              className="w-fit bg-neutral-85 px-7 py-4 text-neutral-0"
            >
              대표 배지로 설정하기
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Badge;
