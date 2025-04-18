import axios, { AxiosInstance } from 'axios';
import { getSession, signOut } from 'next-auth/react';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

class ApiClient {
  private client: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
  }> = [];

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    // 요청 인터셉터 설정
    this.client.interceptors.request.use(async (config) => {
      const session = await getSession();
      if (session?.user?.accessToken) {
        config.headers.Authorization = `${session.user.accessToken}`;
      }
      return config;
    });

    // 응답 인터셉터
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            try {
              const token = await new Promise<string>((resolve, reject) => {
                this.failedQueue.push({ resolve, reject });
              });
              originalRequest.headers.Authorization = token;
              return this.client(originalRequest);
            } catch (err) {
              return Promise.reject(err);
            }
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const session = await getSession();
            const expiredAccessToken = session?.user?.accessToken;

            console.log('토큰 갱신 시도:', {
              expiredAccessToken,
              originalRequest: originalRequest.url,
            });

            if (!expiredAccessToken) {
              throw new Error('액세스 토큰이 없습니다.');
            }

            const response = await fetch(`${BASE_URL}/api/v1/member/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: expiredAccessToken,
              },
            });

            console.log('토큰 갱신 응답:', {
              status: response.status,
              headers: Object.fromEntries(response.headers.entries()),
              body: await response.text(),
            });

            if (!response.ok) {
              throw new Error('토큰 갱신 실패');
            }

            const newAccessToken = response.headers.get('authorization');
            console.log('새로운 액세스 토큰:', newAccessToken);

            if (!newAccessToken) {
              throw new Error('새 액세스 토큰을 받지 못했습니다.');
            }

            // 새 토큰을 세션에 저장
            const event = new CustomEvent('session-update', {
              detail: {
                accessToken: newAccessToken,
              },
            });
            window.dispatchEvent(event);

            this.failedQueue.forEach((prom) => {
              prom.resolve(newAccessToken);
            });

            originalRequest.headers.Authorization = newAccessToken;
            return this.client(originalRequest);
          } catch (error) {
            console.error('토큰 갱신 중 오류 발생:', error);
            this.failedQueue.forEach((prom) => {
              prom.reject(error);
            });
            await signOut({ redirect: true, callbackUrl: '/signin/email' });
            return Promise.reject(error);
          } finally {
            this.isRefreshing = false;
            this.failedQueue = [];
          }
        }
        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data?: any) {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  async patch<T>(url: string, data?: any) {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string) {
    const response = await this.client.delete<T>(url);
    return response.data;
  }
}

const apiClient = new ApiClient();
export default apiClient;
