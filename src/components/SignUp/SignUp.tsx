'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signUpMasterplanApi } from '@/api/signUp/signUp';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AgreementCheckboxes from './AgreementCheckboxes';

// signUpMasterplanApi.postVerification;
// signUpMasterplanApi.sendVerificationCode;
// signUpMasterplanApi.create;

export default function SignUp() {
  const router = useRouter();
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleEmailVerificationCode = async () => {
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    try {
      console.log('인증코드 발송 시도');
      await signUpMasterplanApi.sendVerificationCode({ email });
      alert('인증 코드가 발송되었습니다!');
    } catch (error) {
      alert('인증 코드 발송에 실패했습니다.');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpMasterplanApi.create({
        email,
        password,
        nickname,
        isAgreed: isAgreementChecked,
      });
      router.push('/welcome');
    } catch (error) {
      alert('회원가입 실패!');
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-title-large-desktop">회원가입</h2>
      <form className="flex w-[360px] flex-col gap-6" onSubmit={handleSubmit}>
        <label className="mt-10 flex flex-col gap-4">
          닉네임
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-4">
          아이디
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="아이디를 입력해주세요"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              label="인증하기"
              variant={'third'}
              size={'md'}
              type="button"
              onClick={handleEmailVerificationCode}
            />
          </div>
        </label>
        <label className="mb-10 flex flex-col gap-4">
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            required
          />
          <p className="text-body-xsmall-desktop text-neutral-30">
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
            <br /> 16자 이하로 입력해주세요
          </p>
        </label>
        <AgreementCheckboxes onChange={setIsAgreementChecked} />
        <Button
          type="submit"
          variant={'secondary'}
          size={'md'}
          textColor={'gray'}
          label="가입하기"
          disabled={!isAgreementChecked}
        />
      </form>
    </section>
  );
}
