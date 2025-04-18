'use server';

import { cookies } from 'next/headers';

export async function getAuthToken() {
  return cookies().get('token');
}
