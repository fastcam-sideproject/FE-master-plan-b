import apiClient from '@/api/apiClient';
import { MY_HISTORY_API_PATH } from '@/api/path';
import { createApiCall, createPaginatedApiCall } from '@/lib/apiUtils';
import { ApiResponse, MyPostResponse, Post } from './type';

export const myHistoryApi = {
  getMyPosts: createPaginatedApiCall<MyPostResponse>(
    (page, size) =>
      apiClient.get<ApiResponse<MyPostResponse>>(
        `${MY_HISTORY_API_PATH.my}?page=${page}&size=${size}`,
      ),
    '내 게시글 조회 실패',
  ),

  deletePost: (postId: number) =>
    createApiCall<void>(
      () =>
        apiClient.delete<ApiResponse<void>>(
          `${MY_HISTORY_API_PATH.posts}/${postId}`,
        ),
      '게시글 삭제 실패',
    ),

  patchPost: (postId: number, data: Partial<Post>) =>
    createApiCall<Post>(
      () =>
        apiClient.patch<ApiResponse<Post>>(
          `${MY_HISTORY_API_PATH.posts}/${postId}`,
          data,
        ),
      '게시글 수정 실패',
    ),
};
