import React from 'react';
import { IconBookmark, IconBubble, IconEye, IconHeart, IconUpload } from '@tabler/icons-react';
import { Avatar } from '../common/Avatar';

interface CommunityDataProps {
  timeAgoText: number;
  title: string;
  category: string;
  content: string;
  view: number;
  reply: number;
  like: number;
}

const communityData: CommunityDataProps[] = [
  {
    timeAgoText: 1,
    title: '오늘 자 시험 난이도 어땠나요?',
    category: '시험 꿀팁',
    content: `안녕하세요! 오늘 토익 첫 시험을 봤는데, RC에서 시간이 부족해서 끝까지 못 풀었어요. 😭 다들
        시간 관리 어떻게 하세요? 문제 풀 때 팁이나 전략 있으면 공유 부탁드려요! 🙏`,
    view: 12345,
    reply: 12345,
    like: 12345,
  },
];

const CommunityBox = () => {
  return communityData.map((item, index) => (
    <div
      key={index}
      className="w-full h-[243px] max-w-[1080px] p-7 rounded-6 border-2 box-border border-neutral-0 hover:border-neutral-70 shadow-2 flex flex-col justify-between "
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <ul className="flex items-center gap-3">
            <Avatar size="md" src="icons/gnb/user-filled.svg" alt="아바타 아이콘" />
            <li className="text-neutral-30 h-full">•</li>
            <li className="text-neutral-30 h-full">{item.timeAgoText}일</li>
            <li className="py-2 px-3 bg-neutral-5 text-neutral-50 rounded-3 h-fit text-body-xsmall-desktop font-bold">
              {item.category}
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <IconUpload />
            <IconBookmark />
          </ul>
        </div>
        <div className="text-title-small-desktop text-neutral-85">{item.title}</div>
        <div className="text-body-small-desktop text-neutral-70">{item.content}</div>
      </div>
      <div className="flex items-center justify-end gap-6">
        <ul className="flex items-center gap-2">
          <IconEye />
          <li>{item.view}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconBubble />
          <li>{item.reply}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconHeart />
          <li>{item.like}</li>
        </ul>
      </div>
    </div>
  ));
};

export default CommunityBox;
