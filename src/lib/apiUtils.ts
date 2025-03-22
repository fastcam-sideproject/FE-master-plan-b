import { ApiResponse } from '../api/mypage/myHistory/type';

type ApiResult<T> = Promise<[Error | null, ApiResponse<T> | null]>;

/**
 * 일반 API 호출을 위한 유틸리티 함수
 * @example
 * // 단일 데이터 조회
 * const getUser = (userId: string) => createApiCall<User>(
 *   () => apiClient.get(`/api/users/${userId}`),
 *   '사용자 정보 조회 실패'
 * );
 *
 * // 데이터 생성
 * const createUser = (data: CreateUserDto) => createApiCall<User>(
 *   () => apiClient.post('/api/users', data),
 *   '사용자 생성 실패'
 * );
 */
export const createApiCall = <T>(
  apiCall: () => Promise<ApiResponse<T>>,
  errorMessage?: string,
): ApiResult<T> => {
  return new Promise(async (resolve) => {
    try {
      const response = await apiCall();
      resolve([null, response]);
    } catch (error) {
      if (errorMessage) {
        console.error(errorMessage, error);
      }
      resolve([error as Error, null]);
    }
  });
};

/**
 * 페이지네이션이 있는 API 호출을 위한 유틸리티 함수
 * @example
 * // 페이지네이션된 목록 조회
 * const getUserList = createPaginatedApiCall<UserListResponse>(
 *   (page, size) => apiClient.get(`/api/users?page=${page}&size=${size}`),
 *   '사용자 목록 조회 실패'
 * );
 */
export const createPaginatedApiCall = <T>(
  apiCall: (page: number, size?: number) => Promise<ApiResponse<T>>,
  errorMessage?: string,
) => {
  return (page: number = 0, size: number = 20): ApiResult<T> => {
    return createApiCall(() => apiCall(page, size), errorMessage);
  };
};
