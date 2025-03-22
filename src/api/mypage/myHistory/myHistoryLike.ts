import apiClient from '@/api/apiClient';
import { createApiCall, createPaginatedApiCall } from '@/lib/apiUtils';
import { MY_HISTORY_API_PATH } from '../../path';
import { ApiResponse, MyPostResponse } from './type';

export const myHistoryLikeApi = {
  getMyLikedPosts: createPaginatedApiCall<MyPostResponse>(
    (page, size) =>
      apiClient.get<ApiResponse<MyPostResponse>>(
        `${MY_HISTORY_API_PATH.liked}?page=${page}&size=${size}`,
      ),
    '좋아요한 게시글 조회 실패',
  ),

  editMyLikedPost: (postId: number) =>
    createApiCall<void>(
      () =>
        apiClient.post<ApiResponse<void>>(
          `${MY_HISTORY_API_PATH.posts}/${postId}/like`,
        ),
      '좋아요 상태 변경 실패',
    ),
};
