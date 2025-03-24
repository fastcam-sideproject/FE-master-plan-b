'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import CommunityBox from '@/components/CommunityBox/CommunityBox';

import { myHistoryLikeApi } from '@/api/mypage/myHistory/myHistoryLike';
import { myHistoryStoredApi } from '@/api/mypage/myHistory/myHistoryStored';
import type { Post as ApiPost } from '@/api/mypage/myHistory/type';
import TabHorizonSmall from '@/app/(withAuth)/mypage/my-history/TabHorizonSmall copy';
import { NumberPagination } from '@/components/common/Pagination';
import { myHistoryApi } from '@/api/mypage/myHistory/myHistory';

// todo: store, like의 포스트는 되는데 delete가 안 되고 있음(저번엔 잘 됨).

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
  const { data: session, status } = useSession();
  const [communityData, setCommunityData] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'liked' | 'written' | 'stored'>(
    'liked',
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async (page: number) => {
    if (status !== 'authenticated' || !session) {
      console.log('세션이 준비되지 않았습니다.');
      return;
    }

    setIsLoading(true);
    let error, response;

    try {
      switch (activeTab) {
        case 'liked':
          [error, response] = await myHistoryLikeApi.getMyLikedPosts(page - 1);
          break;
        case 'written':
          [error, response] = await myHistoryApi.getMyPosts(page - 1);
          break;
        case 'stored':
          [error, response] = await myHistoryStoredApi.getMyStoredPosts(
            page - 1,
          );
          break;
      }

      if (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        return;
      }
      if (response?.data) {
        const transformedData = response.data.content.map((post: ApiPost) => {
          return {
            ...post,
          };
        });
        setCommunityData(transformedData);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error('데이터 로딩 중 오류:', error);
    } finally {
      setIsLoading(false);
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
    const [error, response] = await myHistoryStoredApi.editMyStoredPost(postId);
    if (error) {
      console.error('저장 상태 변경 중 오류:', error);
      return;
    }
    await fetchPosts(currentPage);
  };

  const handleLikePost = async (postId: number) => {
    const [error, response] = await myHistoryLikeApi.editMyLikedPost(postId);
    if (error) {
      console.error('저장 상태 변경 중 오류:', error);
      return;
    }
    await fetchPosts(currentPage);
  };

  useEffect(() => {
    if (status === 'authenticated') {
      fetchPosts(currentPage);
    }
  }, [activeTab, status]);

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
      {status === 'loading' || isLoading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-body-large-desktop">로딩 중...</p>
        </div>
      ) : status === 'unauthenticated' ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-body-large-desktop">로그인이 필요합니다.</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default MyHistoryPage;
