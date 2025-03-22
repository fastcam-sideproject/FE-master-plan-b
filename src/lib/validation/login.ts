import { LOGIN_FORMS } from '@/components/SignIn/constants';
import { LoginRequest } from '@/models/ApiTypes';

// 로그인 요청의 기본 유효성 검사
export const loginRequestValid = (loginRequest: LoginRequest) => {
  console.log('로그인 유효성 검사 시작:', loginRequest);

  // 필수 필드 확인: 이메일과 비밀번호
  const hasValidEmail =
    !!loginRequest.email && loginRequest.email.trim() !== '';
  const hasValidPassword =
    !!loginRequest.password && loginRequest.password.trim() !== '';

  console.log('로그인 유효성 검사 결과:', {
    hasValidEmail,
    hasValidPassword,
    email: loginRequest.email,
    password: loginRequest.password ? '***' : undefined,
  });

  // 이메일과 비밀번호가 모두 있어야 유효
  return hasValidEmail && hasValidPassword;
};
