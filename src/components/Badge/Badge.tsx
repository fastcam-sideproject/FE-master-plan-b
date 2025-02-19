import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import BadgeIcon from './BadgeIcon';
import { Button } from '../ui/button';

// 배지 이미지(이미지 대신 텍스트가 들어갈 수 있음)와 타이틀
// 노란색 border와 체크 표시가 되어 있는 배지
// 사각 프레임이 있는 배지
// 달성 여부에 따라 흑백(미달성)/컬러(달성) 상태 만들 것(최종 전달 화면에 근거)
// 캐릭터 이미지, 배지에 들어갈 이미지 public 폴더에 넣어서 사용
// achieveItem='all'을 선택하면 모든 달성 항목이 출력됨
// achieveItem=''

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
  achieve: boolean;
  badgeIconName: BadgeIconType;
}

const achievements: Achievement[] = [
  {
    achieveItem: 'apprentice',
    title: '견습생',
    condition: '자격증 취득\n1개 이상',
    achieve: true,
    badgeIconName: 'chick',
  },
  {
    achieveItem: 'expert',
    title: '숙련자',
    condition: '자격증 취득\n3개 이상',
    achieve: true,
    badgeIconName: 'medal',
  },
  {
    achieveItem: 'master',
    title: '달인',
    condition: '자격증 취득\n5개 이상',
    achieve: false,
    badgeIconName: 'trophy',
  },
  {
    achieveItem: 'grandMaster',
    title: '마스터',
    condition: '자격증 취득\n10개 이상',
    achieve: false,
    badgeIconName: 'fire',
  },
  {
    achieveItem: 'businessBrain',
    title: '경영계 브레인',
    condition: '경영 회계 사무\n자격증 취득',
    achieve: true,
    badgeIconName: 'chart',
  },
  {
    achieveItem: 'financeFairy',
    title: '금융요정',
    condition: '금융 보험\n자격증 취득',
    achieve: true,
    badgeIconName: 'coin',
  },
  {
    achieveItem: 'knowledgeExplorer',
    title: '지식탐험가',
    condition: '교육 사회과학\n자격증 취득',
    achieve: true,
    badgeIconName: 'book',
  },
  {
    achieveItem: 'healthMentor',
    title: '건강멘토',
    condition: '보건 의료\n자격증 취득',
    achieve: false,
    badgeIconName: 'pill',
  },
  {
    achieveItem: 'designMaster',
    title: '디자인 마스터',
    condition: '예술 디자인\n자격증 취득',
    achieve: true,
    badgeIconName: 'palette',
  },
  {
    achieveItem: 'machineEnthusiast',
    title: '기계덕후',
    condition: '건설 기계\n자격증 취득',
    achieve: false,
    badgeIconName: 'gear',
  },
  {
    achieveItem: 'electronicsMaestro',
    title: '전자 마에스트로',
    condition: '전기 전자\n자격증 취득',
    achieve: false,
    badgeIconName: 'lightBulb',
  },
  {
    achieveItem: 'codingPro',
    title: '코딩프로',
    condition: '정보통신 IT\n자격증 취득',
    achieve: true,
    badgeIconName: 'laptop',
  },
  {
    achieveItem: 'globalCommunicator',
    title: '글로벌 커뮤니케이터',
    condition: '외국어\n자격증 취득',
    achieve: true,
    badgeIconName: 'globe',
  },
  {
    achieveItem: 'sprinter',
    title: '스프린터',
    condition: '한 달 이내\n자격증 취득',
    achieve: true,
    badgeIconName: 'bullseye',
  },
  {
    achieveItem: 'communityChampion',
    title: '커뮤니티 활동왕',
    condition: '커뮤니티/게시글\n30개 이상',
    achieve: false,
    badgeIconName: 'speechbubble',
  },
  {
    achieveItem: 'growthApprentice',
    title: '폭풍성장 견습생',
    condition: '자격증\n재도전',
    achieve: true,
    badgeIconName: 'turtle',
  },
];

const badgeVariants = cva('flex flex-col justify-between items-center', {
  variants: {
    variant: {
      default: 'text-body-xsmall-desktop text-neutral-0',
      secondary:
        'w-[229px] h-[280px] rounded-7 p-6 text-body-large-desktop font-bold text-neutral-0 radial-gradient(59.53% 59.53% at 12.86% 22.03%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(66, 66, 66, 0.8)',
    },
  },
});

// , withFrame 이라는 이름으로 프레임 선택 여부 넣기
const Badge = ({
  achieveItem,
  variant = 'default',
  selected = false,
}: {
  achieveItem: string;
  variant?: 'default' | 'secondary';
  selected?: boolean;
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
              'flex flex-col justify-center items-center',
              variant === 'secondary' ? 'gap-5' : 'gap-2',
            )}
          >
            <div
              className={cn(
                'bg-neutral-80 rounded-10 w-[100px] h-[100px] flex justify-center items-center relative',
                !item.achieve && 'grayscale',
                selected && 'border-2 border-primary-40 box-border',
              )}
            >
              <div>
                <BadgeIcon type={item.badgeIconName} />
              </div>
              <div
                className={cn(
                  'absolute contents-[""] right-0 top-0 rounded-10 bg-primary-40',
                  selected === true ? '' : 'invisible',
                )}
              >
                <IconCheck className="text-neutral-0" />
              </div>
              <div
                className={cn(
                  'text-neutral-0 text-center whitespace-pre-line text-body-xsmall-desktop absolute z-10',
                  item.achieve && 'invisible',
                )}
              >
                {item.condition}
              </div>
            </div>
            <div className="">{item.title}</div>
          </div>
          {variant === 'secondary' && (
            <Button
              variant="text"
              size="sm"
              className="w-fit bg-neutral-85 text-neutral-0 py-4 px7"
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
