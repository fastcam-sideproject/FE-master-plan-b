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
  data: {
    uploadedTime: string;
    title: string;
    category: string;
    content: string;
    view: number;
    reply: number;
    like: number;
    shareLink: string;
  };
}

const CommunityBox = ({ data }: CommunityDataProps) => {
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

  return (
    <div className="w-full h-[243px] max-w-[1080px] p-7 rounded-6 border-2 box-border border-neutral-0 hover:border-neutral-70 shadow-2 flex flex-col justify-between ">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <ul className="flex items-center gap-3">
            <Avatar size="md" src="icons/gnb/user-filled.svg" alt="아바타 아이콘" />
            <li className="text-neutral-30 h-full">•</li>
            <li className="text-neutral-30 h-full">{getTimeAgo(data.uploadedTime)}</li>
            <li className="py-2 px-3 bg-neutral-5 text-neutral-50 rounded-3 h-fit text-body-xsmall-desktop font-bold">
              {data.category}
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <li onClick={() => handleCopyLink(data.shareLink)} className="cursor-pointer">
              <IconUpload />
            </li>
            <li onClick={handleBookmarkClicked} className="cursor-pointer">
              {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-title-small-desktop text-neutral-85">{data.title}</div>
          <div className="text-body-small-desktop text-neutral-70">{data.content}</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6">
        <ul className="flex items-center gap-2">
          <IconEye />
          <li>{formatNumber(data.view)}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconMessageCircle />
          <li>{formatNumber(data.reply)}</li>
        </ul>
        <ul className="flex items-center gap-2">
          <IconHeart />
          <li>{formatNumber(data.like)}</li>
        </ul>
      </div>
    </div>
  );
};

export default CommunityBox;
