'use client';

import React, { useState } from 'react';
import {
  IconBookmark,
  IconBookmarkFilled,
  IconEye,
  IconHeart,
  IconMessageCircle,
  IconUpload,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';
import useGetTimeAgo from '@/hooks/useGetTimeAgo';
import { Avatar } from '../common/Avatar';

interface CommunityDataProps {
  data: Array<{
    postId: number;
    title: string;
    content: string;
    nickname: string;
    createdAt: string;
    category: string;
    likeCount: number;
    viewCount: number;
    commentCount: number;
  }>;
  variant?: 'written' | 'bookmarked' | 'liked';
}

const CommunityBox = ({ data, variant = 'bookmarked' }: CommunityDataProps) => {
  const { getTimeAgo } = useGetTimeAgo();

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClicked = () => {
    setIsBookmarked((prev) => !prev);
  };

  const getCategoryDisplay = (category: string): string => {
    switch (category) {
      case 'TIP':
        return '시험 꿀팁';
      case 'SHARE':
        return '자료 공유';
      case 'PLACE':
        return '시험장';
      case 'PROBLEM':
        return '시험 문제';
      case 'PASS':
        return '합격자 조회';
      default:
        return category;
    }
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
    <>
      {data.map((item) => (
        <div
          key={item.postId}
          className="box-border flex h-[243px] w-full max-w-[1080px] flex-col justify-between rounded-6 border-2 border-neutral-0 bg-neutral-0 p-7 shadow-2 hover:border-neutral-70"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <ul className="flex items-center gap-3">
                <Avatar
                  size="md"
                  src="icons/gnb/user-filled.svg"
                  alt="아바타 아이콘"
                />
                <li className="h-full text-neutral-30">•</li>
                <li className="h-full text-neutral-30">
                  {getTimeAgo(item.createdAt)}
                </li>
                <li className="h-fit rounded-3 bg-neutral-5 px-3 py-2 text-body-xsmall-desktop font-bold text-neutral-50">
                  {getCategoryDisplay(item.category)}
                </li>
              </ul>
              <ul className="flex items-center gap-5">
                <li className="cursor-pointer">
                  {variant === 'liked' ? null : variant === 'written' ? (
                    <IconPencil />
                  ) : (
                    <IconUpload
                      onClick={() => handleCopyLink(String(item.postId))}
                    />
                  )}
                </li>
                <li className="cursor-pointer">
                  {variant === 'written' || 'liked' ? (
                    <IconTrash className="text-red-40" />
                  ) : (
                    <div onClick={handleBookmarkClicked}>
                      {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-title-small-desktop text-neutral-85">
                {item.title}
              </div>
              <div className="text-body-small-desktop text-neutral-70">
                {item.content}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <ul className="flex items-center gap-2">
              <IconEye />
              <li>{formatNumber(item.viewCount)}</li>
            </ul>
            <ul className="flex items-center gap-2">
              <IconMessageCircle />
              <li>{formatNumber(item.commentCount)}</li>
            </ul>
            <ul className="flex items-center gap-2">
              <IconHeart />
              <li>{formatNumber(item.likeCount)}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommunityBox;
