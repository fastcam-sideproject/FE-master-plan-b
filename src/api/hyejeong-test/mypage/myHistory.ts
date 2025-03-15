import { apiClient } from '../apiClient';
import { MY_HISTORY_API_PATH } from '../path';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyPostResponse {
  posts: Post[];
  totalCount: number;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export const myHistoryApi = {
  getMyPosts: async () => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(MY_HISTORY_API_PATH.my);
  },

  deletePost: async (postId: number) => {
    return await apiClient.delete<ApiResponse<void>>(`/api/v1/posts/${postId}`);
  },

  updatePost: async (postId: number, data: Partial<Post>) => {
    return await apiClient.patch<ApiResponse<Post>>(`/api/v1/posts/${postId}`, data);
  },
};
