import React, { useState } from 'react';
import {
  IconBookmark,
  IconBookmarkFilled,
  IconEye,
  IconHeart,
  IconMessageCircle,
  IconUpload,
} from '@tabler/icons-react';
import useGetTimeAgo from '@/hooks/useGetTimeAgo';
import { Avatar } from '../common/Avatar';

// TODO: handleCopyLink는 api가 나온 이후에 반영할 것.

interface CommunityDataProps {
  uploadedTime: string;
  title: string;
  category: string;
  content: string;
  view: number;
  reply: number;
  like: number;
  shareLink: string;
}

const communityData: CommunityDataProps[] = [
  {
    uploadedTime: '2025-02-07T18:51:00',
    title: '(아이콘 수정 예정)오늘 자 시험 난이도 어땠나요?',
    category: '시험 꿀팁',
    content: `안녕하세요! 오늘 토익 첫 시험을 봤는데, RC에서 시간이 부족해서 끝까지 못 풀었어요. 😭 다들
        시간 관리 어떻게 하세요? 문제 풀 때 팁이나 전략 있으면 공유 부탁드려요! 🙏`,
    view: 12345,
    reply: 12345,
    like: 12345,
    shareLink: 'https://localhost:3000/communityLinks',
  },
];

const CommunityBox = () => {
  const { getTimeAgo } = useGetTimeAgo();

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClicked = () => {
    setIsBookmarked((prev) => !prev);
  };

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('링크가 복사되었습니다!');
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

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
            <li className="text-neutral-30 h-full">{getTimeAgo(item.uploadedTime)}</li>
            <li className="py-2 px-3 bg-neutral-5 text-neutral-50 rounded-3 h-fit text-body-xsmall-desktop font-bold">
              {item.category}
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <li onClick={() => handleCopyLink(item.shareLink)} className="cursor-pointer">
              <IconUpload />
            </li>
            <li onClick={handleBookmarkClicked} className="cursor-pointer">
              {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-title-small-desktop text-neutral-85">{item.title}</div>
          <div className="text-body-small-desktop text-neutral-70">{item.content}</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6">
        <ul className="flex items-center gap-2">
          <IconEye />
          <li>{formatNumber(item.view)}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconMessageCircle />
          <li>{formatNumber(item.reply)}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconHeart />
          <li>{formatNumber(item.like)}</li>
        </ul>
      </div>
    </div>
  ));
};

export default CommunityBox;
