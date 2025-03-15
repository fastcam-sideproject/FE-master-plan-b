'use client';

import React, { useEffect, useState } from 'react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import { myHistoryApi } from '@/api/hyejeong-test/mypage/myHistory';
import type { Post as ApiPost } from '@/api/hyejeong-test/mypage/myHistory';
// import { getMyPost } from '@/api/hyejeong-test/mypage/myhistoryapi';

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
  const [securityMessage, setSecurityMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const [error, response] = await myHistoryApi.getMyPosts();
      if (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        return;
      }
      if (response?.data?.posts) {
        // API 응답 데이터를 컴포넌트에서 사용하는 형식으로 변환
        const transformedData: Post[] = response.data.posts.map((post) => ({
          id: post.id,
          postId: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          nickname: '작성자', // API에서 제공하지 않는 경우 기본값 설정
          category: '카테고리', // API에서 제공하지 않는 경우 기본값 설정
          likeCount: 0,
          viewCount: 0,
          commentCount: 0,
        }));
        setCommunityData(transformedData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 py-[120px]">
      <></>
      {communityData.length === 0 ? (
        <div>작성하신 글이 없습니다.</div>
      ) : (
        communityData.map((item) => (
          <CommunityBox key={item.postId} data={item} variant="written" />
        ))
      )}
    </div>
  );
};

export default MyHistoryPage;
