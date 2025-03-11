import _axios, { AxiosInstance } from 'axios';
import { requestCookie, responseCookie } from './cookies';

const BACKEND_URL = process.env.BACKEND_URL;

const axios: AxiosInstance = _axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  },
  withCredentials: true,
});

axios.interceptors.request.use(async (config) => {
  const token =
    'Bearer%20eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTc0MTY2ODY0OSwiaWF0IjoxNzQxNjY1MDQ5LCJqdGkiOiJjZTk0MTUxYS1kYTkyLTQ0ZTktYTY3NC01MGM2ZWEyYjZiMGIifQ._3FrKPWDf21-JvAkFRGNUx13l1egaQudOMCvTq6OlxQ';

  if (typeof window === 'undefined') {
    config.baseURL = BACKEND_URL;
    config.headers.Authorization = token;
    const cookieConfig = await requestCookie(config);
    return cookieConfig;
  }

  config.baseURL = '/api';
  config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(async (response) => {
  if (typeof window === 'undefined') {
    const cookieResponse = await responseCookie(response);

    return cookieResponse;
  }

  return response;
});

export default axios;
