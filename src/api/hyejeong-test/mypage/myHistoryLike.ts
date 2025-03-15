import { apiClient } from '../apiClient';
import { MY_HISTORY_API_PATH } from '../path';
import { ApiResponse, MyPostResponse } from './type';

export const myHistoryLikeApi = {
  getMyLikedPosts: async () => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(
      MY_HISTORY_API_PATH.like,
    );
  },
};
