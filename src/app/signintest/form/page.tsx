import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const handleSubmit = () => {
  // TODO: 회원가입 로직 구현
};

const SignInFormPage = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <div>
          <p>닉네임</p>
          <Input placeholder="닉네임을 입력해주세요" />
          <p>/16</p>
        </div>
        <div>
          <p>아이디</p>
          <div className="flex">
            <Input placeholder="아이디를 입력해주세요" />
            <Button label="인증하기" variant="third" size="sm" />
          </div>
        </div>
        <div>
          <p>비밀번호</p>
          <div>
            <Input placeholder="비밀번호를 입력해주세요" />
            <Input placeholder="비밀번호를 다시 한 번 입력해주세요" />
          </div>
          <p>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자
            이하로 입력해주세요
          </p>
        </div>
        <div>
          <div>
            <Checkbox label="모두 동의해요" />
            <div className="border-b border-neutral-10"></div>
            <Checkbox label="모두 동의해요" requirText={true} required />
            <Checkbox label="모두 동의해요" requirText={true} required />
            <Checkbox label="모두 동의해요" optionalText={true} />
          </div>
        </div>
        <Button
          label="가입하기"
          variant="secondary"
          size="lg"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignInFormPage;
