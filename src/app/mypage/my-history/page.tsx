'use client';

import React, { useEffect, useState } from 'react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import { myHistoryApi } from '@/api/hyejeong-test/mypage/myHistory';
import type { Post as ApiPost } from '@/api/hyejeong-test/mypage/myHistory';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';

interface Post extends ApiPost {
  postId: number;
  nickname: string;
  category: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

interface ApiResponse {
  content: Post[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    // ... 기타 페이지네이션 관련 필드
  };
  totalElements: number;
  totalPages: number;
}

const MyHistoryPage = () => {
  const [communityData, setCommunityData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [error, response] = await myHistoryApi.getMyPosts();
      if (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        return;
      }
      if (response?.data?.content) {
        const transformedData = response.data.content.map((post) => ({
          ...post,
          postId: post.id,
        }));
        setCommunityData(transformedData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 py-[120px]">
      <TabHorizonSmall isDark={false} />
      {communityData.length === 0 ? (
        <div>작성하신 글이 없습니다.</div>
      ) : (
        <CommunityBox data={communityData} variant="written" />
      )}
    </div>
  );
};

export default MyHistoryPage;
