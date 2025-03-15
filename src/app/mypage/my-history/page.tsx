'use client';

import React, { useEffect, useState } from 'react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import { myHistoryApi } from '@/api/hyejeong-test/mypage/myHistory';
import { myHistoryLikeApi } from '@/api/hyejeong-test/mypage/myHistoryLike';
import { myHistoryStoredApi } from '@/api/hyejeong-test/mypage/myHistoryStored';
import type { Post as ApiPost } from '@/api/hyejeong-test/mypage/type';
import TabHorizonSmall from '@/app/mypage/my-history/TabHorizonSmall copy';
import { NumberPagination } from '@/components/common/Pagination';

export interface Post extends ApiPost {
  postId: number;
  nickname: string;
  category: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

interface TabButtonProp {
  innerText: string;
  type: 'liked' | 'written' | 'stored';
}

const tabButtonProps: TabButtonProp[] = [
  {
    innerText: '내가 좋아요한 글',
    type: 'liked',
  },
  {
    innerText: '내가 쓴 글',
    type: 'written',
  },
  {
    innerText: '내가 저장한 글',
    type: 'stored',
  },
] as const;

const MyHistoryPage = () => {
  const [communityData, setCommunityData] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'liked' | 'written' | 'stored'>(
    'liked',
  );

  const fetchPosts = async () => {
    let error, response;

    switch (activeTab) {
      case 'liked':
        [error, response] = await myHistoryLikeApi.getMyLikedPosts();
        break;
      case 'written':
        [error, response] = await myHistoryApi.getMyPosts();
        break;
      case 'stored':
        [error, response] = await myHistoryStoredApi.getMyStoredPosts();
        break;
    }

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

  const handleDeletePost = async (postId: number) => {
    console.log('Attempting to delete post:', postId);
    const [error] = await myHistoryApi.deletePost(postId);
    if (error) {
      console.error('삭제 중 오류', error);
      return;
    }
    console.log('잘 삭제됨');
    await fetchPosts();
  };

  const handlePatchPost = async (postId: number, data: Partial<Post>) => {
    const [error] = await myHistoryApi.patchPost(postId, data);
    if (error) {
      console.error('수정 중 오류', error);
      return;
    }
    await fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, [activeTab]);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCopyLink = (postId: string) => {
    // 링크 복사 로직 구현 필요
    console.log('Copy link:', postId);
  };

  return (
    <div className="flex w-[1080px] flex-col gap-9 py-[120px]">
      <div className="flex w-full flex-col gap-3">
        <h1 className="text-heading-small-desktop">내 활동</h1>
        <p className="text-body-large-desktop font-[400] text-neutral-50">
          {activeTab === 'liked' &&
            '내가 좋아요 한 글을 수정하고 삭제할 수 있습니다.'}
          {activeTab === 'written' &&
            '내가 저장한 글을 확인하고 삭제할 수 있습니다.'}
          {activeTab === 'stored' && '내가 저장한 글을 확인할 수 있습니다.'}
        </p>
      </div>
      <TabHorizonSmall
        btnProps={tabButtonProps}
        onTabChange={(type) => setActiveTab(type)}
      />
      {communityData.length === 0 ? (
        <div>작성하신 글이 없습니다.</div>
      ) : (
        <CommunityBox
          data={communityData}
          variant="written"
          onDelete={handleDeletePost}
          onEdit={handlePatchPost}
          onShare={(postId) => handleCopyLink(String(postId))}
          onStore={(postId) => {
            // 북마크 저장 로직 구현 필요
            console.log('Store post:', postId);
          }}
        />
      )}
      <div className="flex justify-center">
        <NumberPagination
          currentPage={currentPage}
          totalPages={communityData.totalPages}
          onPageChange={handlePageChange}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default MyHistoryPage;
