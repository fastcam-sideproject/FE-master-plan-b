// 로그인 요청 타입
export interface LoginRequest {
  username?: string;
  email?: string;
  password: string;
  [key: string]: any; // 추가 속성 허용
}

// 로그인 응답 타입
export interface LoginData {
  id?: string;
  name?: string;
  email?: string;
  nickname?: string;
  role?: string;
  token?: string;
  [key: string]: any; // 추가 속성 허용
}

// 로그아웃 응답 타입
export interface LogoutData {
  success: boolean;
  message?: string;
}
