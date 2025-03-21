import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/react';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

class ApiClient {
  private client: AxiosInstance;

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
        config.headers.Authorization = `Bearer ${session.user.accessToken}`;
      }
      return config;
    });

    // 응답 인터셉터
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API 요청 에러:', error);
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

  async put<T>(url: string, data?: any) {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string) {
    const response = await this.client.delete<T>(url);
    return response.data;
  }
}

const apiClient = new ApiClient();
export default apiClient;
