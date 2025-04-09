import { AchievementForActivityBadge } from './types';

// 취득 배지 데이터
export const achievementsBadge: AchievementForActivityBadge[] = [
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
];

// 분야별 배지 데이터
export const departmentsBadge: AchievementForActivityBadge[] = [
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
    achieve: true,
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
];

// 참여 배지 데이터
export const activityBadge: AchievementForActivityBadge[] = [
  {
    achieveItem: 'sprinter',
    achieve: true,
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
