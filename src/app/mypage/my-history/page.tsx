'use client';

import React, { useEffect, useState } from 'react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import { myHistoryApi } from '@/api/hyejeong-test/mypage/myHistory';
import { myHistoryLikeApi } from '@/api/hyejeong-test/mypage/myHistoryLike';
import { myHistoryStoredApi } from '@/api/hyejeong-test/mypage/myHistoryStored';
import type { Post as ApiPost } from '@/api/hyejeong-test/mypage/type';
import TabHorizonSmall from '@/app/mypage/my-history/TabHorizonSmall copy';
import { NumberPagination } from '@/components/common/Pagination';

// todo: 스웨거에서 /api/v1/{postId}/store 401에러. 내가 쓴 글이 아닌 경우에만 store가 동작하는 것인지? like는 잘 동작하고 있음. 태희 님께 여쭤볼 것.
// todo: /api/v1/{postId}/store는 like 추가 및 삭제(/api/v1/posts/{postId}/like)와 경로가 다른데, 이 경로가 맞는지?
// todo: like 읽어오기는 정상 작동하나 링크에 posts가 두 번 나옴('api/v1/posts/posts/liked').
// todo: tab의 기능 수정 필요?: 현재 탭에는 링크가 붙어 있으며, 이를 필수로 입력해야 동작하고 있습니다. 이 문제에 대응하기 위해 my-history 페이지에는 복사해 별도로 수정한 tabSmall을 사용하고 있는 상태입니다.
// todo: uxui 팀에 커뮤니티박스에 들어가는 '시험꿀팁' 외에 어떤 태그가 더 필요한지 물어볼 것.
// todo(알림): 희준 님께. 커뮤니티박스 컴포넌트를 대대적으로 수정했습니다. 희준 님께서 사용하실 만한 variant는 'written'(내가 쓴 글)과 'stored'(남이 쓴 글)일 텐데, 혹시나 싶어 미리 알려드립니다.

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page: number) => {
    let error, response;

    switch (activeTab) {
      case 'liked':
        [error, response] = await myHistoryLikeApi.getMyLikedPosts(page - 1);
        break;
      case 'written':
        [error, response] = await myHistoryApi.getMyPosts(page - 1);
        break;
      case 'stored':
        [error, response] = await myHistoryStoredApi.getMyStoredPosts(page - 1);
        break;
    }

    if (error) {
      console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      return;
    }
    if (response?.data) {
      console.log('API 응답 데이터(전체):', response.data.content);
      const transformedData = response.data.content.map((postId) => {
        return {
          ...postId,
        };
      });
      console.log('변환된 데이터:', transformedData);
      setCommunityData(transformedData);
      setTotalPages(response.data.totalPages);
    }
  };

  const handleDeletePost = async (postId: number) => {
    if (!postId) {
      console.error('삭제할 게시글 ID가 없습니다.');
      return;
    }

    console.log('삭제하려는 게시글 ID:', postId);
    const [error] = await myHistoryApi.deletePost(postId);

    if (error) {
      console.error('삭제 중 오류:', error);
      return;
    }

    console.log('게시글이 성공적으로 삭제되었습니다.');
    await fetchPosts(currentPage);
  };

  const handlePatchPost = async (postId: number, data: Partial<Post>) => {
    const [error] = await myHistoryApi.patchPost(postId, data);
    if (error) {
      console.error('수정 중 오류', error);
      return;
    }
    await fetchPosts(currentPage);
  };

  const handleStorePost = async (postId: number) => {
    const [error] = await myHistoryStoredApi.editMyStoredPost(postId);
    if (error) {
      console.error('저장 상태 변경 중 오류:', error);
      return;
    }
    await fetchPosts(currentPage);
  };

  const handleLikePost = async (postId: number) => {
    const [error] = await myHistoryLikeApi.editMyLikedPost(postId);
    if (error) {
      console.error('저장 상태 변경 중 오류:', error);
      return;
    }
    await fetchPosts(currentPage);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [activeTab]);

  const handleCopyLink = (postId: number) => {
    // 링크 복사 로직 구현 필요
    console.log('Copy link:', postId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPosts(page);
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
        <div>
          {activeTab === 'liked' && '좋아요한 글이 없습니다.'}
          {activeTab === 'written' && '작성한 글이 없습니다.'}
          {activeTab === 'stored' && '저장한 글이 없습니다.'}
        </div>
      ) : (
        <CommunityBox
          data={communityData}
          variant={activeTab}
          onDelete={(postId) => {
            console.log('삭제 요청된 postId:', postId);
            handleDeletePost(Number(postId));
          }}
          onEdit={handlePatchPost}
          onShare={(postId) => handleCopyLink(postId)}
          onStore={(postId) => handleStorePost(postId)}
          onLike={(postId) => handleLikePost(postId)}
        />
      )}
      <div className="flex justify-center">
        <NumberPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default MyHistoryPage;
