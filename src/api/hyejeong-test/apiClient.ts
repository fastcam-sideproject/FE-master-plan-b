import axios, { AxiosInstance } from 'axios';
import testToken from '../hyejeong-test/testToken';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: testToken,
      },
    });
  }

  async get<T>(url: string) {
    try {
      const response = await this.client.get<T>(url);
      return [null, response.data] as const;
    } catch (error) {
      console.error('GET 요청 중 오류:', error);
      return [error, null] as const;
    }
  }

  async delete<T>(url: string) {
    try {
      const response = await this.client.delete<T>(url);
      return [null, response.data] as const;
    } catch (error) {
      console.error('DELETE 요청 중 오류:', error);
      return [error, null] as const;
    }
  }

  async patch<T>(url: string, data?: any) {
    try {
      const response = await this.client.patch<T>(url, data);
      return [null, response.data] as const;
    } catch (error) {
      console.error('PATCH 요청 중 오류:', error);
      return [error, null] as const;
    }
  }
}

export const apiClient = new ApiClient();
