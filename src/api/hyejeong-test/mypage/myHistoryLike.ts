import { apiClient } from '../apiClient';
import { MY_HISTORY_API_PATH } from '../path';
import { ApiResponse, MyPostResponse } from './type';

export const myHistoryLikeApi = {
  getMyLikedPosts: async (page: number = 0) => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(
      `${MY_HISTORY_API_PATH.liked}?page=${page}&size=20`,
    );
  },

  editMyLikedPost: async (postId: number) => {
    return await apiClient.post<ApiResponse<void>>(
      `${MY_HISTORY_API_PATH.posts}/${postId}/like`,
    );
  },
};
