import { createApiCall } from '@/lib/apiUtils';
import apiClient from '../apiClient';
import { SIGN_UP_API_PATH } from '../path';
import {
  ApiResponse,
  CreateUserRequest,
  SendVerificationCodeRequest,
  User,
  VerificationRequest,
} from './type';

export const signUpMasterplanApi = {
  postVerification: () =>
    createApiCall<User>(
      () =>
        apiClient.post<ApiResponse<VerificationRequest>>(
          `${SIGN_UP_API_PATH.verification}`,
        ),
      '인증번호 일치 확인 실패',
    ),
  sendVerificationCode: (data: SendVerificationCodeRequest) =>
    createApiCall<User>(
      () =>
        apiClient.post<ApiResponse<SendVerificationCodeRequest>>(
          `${SIGN_UP_API_PATH.sendVerificationCode}`,
          data,
        ),
      '이메일 중복 확인 및 인증번호 발송 실패',
    ),
  create: (data: CreateUserRequest) =>
    createApiCall<User>(
      () =>
        apiClient.post<ApiResponse<CreateUserRequest>>(
          `${SIGN_UP_API_PATH.create}`,
          data,
        ),
      '회원가입 실패',
    ),
};

/* 
POST /api/v1/member/verification
인증번호 일치 확인 Example Value
{
  "email": "string",
  "verification": 0
}
Responses Code	Description	Links
{
  "status": 0,
    "message": "string",
      "data": { }
}
POST  / api / v1 / member / send - verification - code
이메일 중복 확인 및 인증번호 발송
{
  "email": "string"
}
Responses Code	Description	Links 200 OK
{
  "status": 0,
  "message": "string",
  "data": {}
}

POST /api/v1/member/create
회원가입
{
  "email": "string",
  "nickname": "LmXIBq4kqh81MuolSDv1IjQVcAh24YCkgGxJM9G4NGcJSGUWEnuwzqrflxtoZrWaWF0dzx",
  "password": "o(fwBU+SI8PnTJH89DEHMJ7n0K^M[rmdT-g(x911HNvn!Ib^5#%z!AZjW3-t_r[B(?2Qc,5",
  "isAgreed": true
}
Responses Code	Description	Links 200	 OK
{
  "status": 0,
  "message": "string",
  "data": {}
}*/
