import { apiClient } from '../apiClient';
import { MY_HISTORY_API_PATH } from '../path';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  category: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

export interface MyPostResponse {
  content: Post[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export const myHistoryApi = {
  getMyPosts: async () => {
    return await apiClient.get<ApiResponse<MyPostResponse>>(
      MY_HISTORY_API_PATH.my,
    );
  },

  deletePost: async (postId: number) => {
    return await apiClient.delete<ApiResponse<void>>(
      MY_HISTORY_API_PATH.posts + `${postId}`,
    );
  },

  patchPost: async (postId: number, data: Partial<Post>) => {
    return await apiClient.patch<ApiResponse<Post>>(
      MY_HISTORY_API_PATH.posts + `${postId}`,
      data,
    );
  },
};
