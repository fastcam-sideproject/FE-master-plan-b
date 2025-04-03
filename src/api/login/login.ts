'use server';

import { setCookie } from '@/lib/cookies';
import { USERS_API_PATH } from '../path';
import apiClient from '../apiClient';

export async function loginApi() {
  const res = apiClient.post(USERS_API_PATH.login);

  const { accessToken } = await res.json();

  setCookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60, // 1h,
  });
}
