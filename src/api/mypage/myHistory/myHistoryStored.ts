import apiClient from '@/api/apiClient';
import { MY_HISTORY_API_PATH } from '@/api/path';
import { createApiCall, createPaginatedApiCall } from '@/lib/apiUtils';
import { ApiResponse, MyPostResponse } from './type';

export const myHistoryStoredApi = {
  getMyStoredPosts: createPaginatedApiCall<MyPostResponse>(
    (page, size) =>
      apiClient.get<ApiResponse<MyPostResponse>>(
        `${MY_HISTORY_API_PATH.stored}?page=${page}&size=${size}`,
      ),
    '저장된 게시글 조회 실패',
  ),

  editMyStoredPost: (postId: number) =>
    createApiCall<void>(
      () =>
        apiClient.post<ApiResponse<void>>(
          `${MY_HISTORY_API_PATH.posts}/${postId}/store`,
        ),
      '저장 상태 변경 실패',
    ),
};
