import React from 'react';
import { GoogleLoginBtn, KakaoLoginBtn } from '@/components/LoginButton';

const SignInPage = () => {
  return (
    <div>
      <KakaoLoginBtn />
      <GoogleLoginBtn />
      <button className="hover:bg-red-10">이메일로 시작하기</button>
    </div>
  );
};

export default SignInPage;
