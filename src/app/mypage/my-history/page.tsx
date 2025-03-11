'use client';

import React, { useEffect, useState } from 'react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import { getMyPost } from '@/api/hyejeong-test/mypage/myhistoryapi';

interface Post {
  postId: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
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
  const [securityMessage, setSecurityMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const [error, response] = await getMyPost();
      if (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        return;
      }
      if (response?.data?.content) {
        setCommunityData(response.data.content);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 py-[120px]">
      {/* <div className="mb-4 rounded bg-gray-100 p-4">
        <h2 className="mb-2 text-lg font-bold">보안 메시지:</h2>
        <p>{securityMessage}</p>
      </div> */}

      {communityData.length === 0 ? (
        <div>자료 없음</div>
      ) : (
        communityData.map((item) => (
          <CommunityBox key={item.postId} data={item} variant="written" />
        ))
      )}
    </div>
  );
};

export default MyHistoryPage;
