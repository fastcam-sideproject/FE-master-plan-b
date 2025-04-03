import { cookies } from 'next/headers';

export function setCookie(
  key: string,
  value: string,
  options?: Record<string, any>,
) {
  return cookies().set(key, value, options);
}

export function getCookie(key: string) {
  return cookies().get(key)?.value;
}
