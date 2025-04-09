'use server';

import { setCookie } from '@/lib/cookies';
import { USERS_API_PATH } from '../path';
import apiClient from '../apiClient';

interface LoginResponse {
  accessToken: string;
}

export async function loginApi() {
  const res = await apiClient.post<LoginResponse>(USERS_API_PATH.login);

  const { accessToken } = res;

  setCookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60, // 1h,
  });
}
