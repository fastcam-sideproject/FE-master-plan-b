// API 응답의 기본 구조
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// 사용자 정보 타입
export interface User {
  email: string;
  nickname?: string;
  password?: string;
  isAgreed?: boolean;
}

// 인증번호 확인 요청 타입
export interface VerificationRequest {
  email: string;
  verification: number;
}

// 이메일 인증코드 발송 요청 타입
export interface SendVerificationCodeRequest {
  email: string;
}

// 회원가입 요청 타입
export interface CreateUserRequest {
  email: string;
  nickname: string;
  password: string;
  isAgreed: boolean;
}
