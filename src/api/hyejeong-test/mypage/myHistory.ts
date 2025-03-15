import { apiClient } from '../apiClient';
import { MY_HISTORY_API_PATH } from '../path';
import { ApiResponse, MyPostResponse, Post } from './type';

export const myHistoryApi = {
  getMyPosts: async () => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(
      MY_HISTORY_API_PATH.my,
    );
  },

  deletePost: async (postId: number) => {
    return await apiClient.delete<ApiResponse<void>>(
      `${MY_HISTORY_API_PATH.posts}/${postId}`,
    );
  },

  patchPost: async (postId: number, data: Partial<Post>) => {
    return await apiClient.patch<ApiResponse<Post>>(
      `${MY_HISTORY_API_PATH.posts}/${postId}`,
      data,
    );
  },
};
