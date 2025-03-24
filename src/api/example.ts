import apiClient from '@/api/apiClient';
import { createApiCall, createPaginatedApiCall } from '@/lib/apiUtils';
import { ApiResponse } from './mypage/myHistory/type';

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserListResponse {
  content: User[];
  totalPages: number;
  totalElements: number;
}

interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export const userApi = {
  // 페이지네이션이 있는 API 호출
  getUserList: createPaginatedApiCall<UserListResponse>(
    (page, size) =>
      apiClient.get<ApiResponse<UserListResponse>>(
        `/api/users?page=${page}&size=${size}`,
      ),
    '사용자 목록 조회 실패',
  ),

  // 페이지네이션이 없는 단일 데이터 조회
  getUser: (userId: number) =>
    createApiCall<User>(
      () => apiClient.get<ApiResponse<User>>(`/api/users/${userId}`),
      '사용자 정보 조회 실패',
    ),

  // 페이지네이션이 없는 데이터 생성
  createUser: (data: CreateUserDto) =>
    createApiCall<User>(
      () => apiClient.post<ApiResponse<User>>('/api/users', data),
      '사용자 생성 실패',
    ),

  // 페이지네이션이 없는 데이터 수정
  updateUser: (userId: number, data: Partial<User>) =>
    createApiCall<User>(
      () => apiClient.patch<ApiResponse<User>>(`/api/users/${userId}`, data),
      '사용자 정보 수정 실패',
    ),

  // 페이지네이션이 없는 데이터 삭제
  deleteUser: (userId: number) =>
    createApiCall<void>(
      () => apiClient.delete<ApiResponse<void>>(`/api/users/${userId}`),
      '사용자 삭제 실패',
    ),
};

/*
페이지 본문에서는 이런 식으로 응용하세요.

응용 1
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


응용 2
// 페이지네이션이 있는 API 호출
const [error, response] = await userApi.getUserList(0, 20);

// 페이지네이션이 없는 API 호출
const [error, response] = await userApi.getUser(123);
*/
