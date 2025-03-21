import { apiClient } from '../../apiClient';
import { MY_HISTORY_API_PATH } from '../../path';
import { ApiResponse, MyPostResponse } from './type';

export const myHistoryStoredApi = {
  getMyStoredPosts: async (page: number = 0) => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(
      `${MY_HISTORY_API_PATH.stored}?page=${page}&size=20`,
    );
  },

  editMyStoredPost: async (postId: number) => {
    return await apiClient.post<ApiResponse<void>>(
      `${MY_HISTORY_API_PATH.posts}/${postId}/store`,
    );
  },
};
