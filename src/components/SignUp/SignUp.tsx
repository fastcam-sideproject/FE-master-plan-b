'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signUpMasterplanApi } from '@/api/signUp/signUp';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AgreementCheckboxes from './AgreementCheckboxes';

export default function SignUp() {
  const router = useRouter();
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidationError, setPasswordValidationError] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailExist, setEmailExist] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(false);

  const handleEmailVerificationCode = async () => {
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }

    // 상태 초기화
    setEmailExist(false);
    setEmailAvailable(false);

    try {
      console.log('인증코드 발송 시도');
      console.log('요청 데이터:', { email });

      // API 호출
      const [error, response] = await signUpMasterplanApi.sendVerificationCode({
        email,
      });

      if (error) {
        // 에러 처리
        if (error.response?.status === 409) {
          setEmailExist(true);
        } else {
          alert(
            '인증 코드 발송에 실패했습니다. 개발자 도구의 콘솔을 확인해주세요.',
          );
        }
        return;
      }

      // 성공 시 실행
      setEmailAvailable(true);
      alert('인증 코드가 발송되었습니다!');
    } catch (error: any) {
      console.error('상세 에러:', error);
    }
  };

  const validatePasswordFormat = (password: string) => {
    if (password.length < 8 || password.length > 16) {
      setPasswordValidationError('비밀번호가 올바르지 않아요');
      return false;
    }

    let containsUpperCase = /[A-Z]/.test(password);
    let containsLowerCase = /[a-z]/.test(password);
    let containsNumber = /[0-9]/.test(password);
    let containsSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let satisfiedConditions = [
      containsUpperCase,
      containsLowerCase,
      containsNumber,
      containsSpecial,
    ].filter(Boolean).length;

    if (satisfiedConditions < 3) {
      setPasswordValidationError('비밀번호가 올바르지 않아요');
      return false;
    }

    setPasswordValidationError('');
    return true;
  };

  const validatePassword = (password: string, passwordConfirm: string) => {
    if (!validatePasswordFormat(password)) {
      return false;
    }

    if (passwordConfirm && password !== passwordConfirm) {
      setPasswordError('비밀번호가 일치하지 않습니다');
      return false;
    }

    setPasswordError('비밀번호가 일치합니다!');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password, passwordConfirm)) {
      return;
    }
    try {
      await signUpMasterplanApi.create({
        email,
        password,
        nickname,
        isAgreed: isAgreementChecked,
      });
      router.push(`/welcome?nickname=${encodeURIComponent(nickname)}`);
    } catch (error) {
      alert('회원가입 실패!');
      console.error(error);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 16) {
      setNickname(value);
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
            onChange={handleNicknameChange}
            maxLength={16}
          />
          <p className="text-end text-body-xsmall-desktop font-[400] text-neutral-30">
            {nickname.length}/16
          </p>
        </label>
        <label className="flex flex-col gap-4">
          아이디
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="아이디를 입력해주세요"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailExist(false);
                setEmailAvailable(false);
              }}
            />
            <Button
              label="인증하기"
              variant={'third'}
              size={'md'}
              type="button"
              onClick={handleEmailVerificationCode}
            />
          </div>
          {emailExist && (
            <p className="text-body-xsmall-desktop text-red-40">
              이미 가입된 이메일이에요
            </p>
          )}
          {emailAvailable && (
            <p className="text-body-xsmall-desktop text-blue-40">
              사용 가능한 이메일이에요
            </p>
          )}
        </label>
        <label className="mb-10 flex flex-col gap-4">
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePasswordFormat(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            required
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              validatePassword(password, e.target.value);
            }}
          />
          {passwordValidationError && (
            <p className="text-body-xsmall-desktop text-red-40">
              {passwordValidationError}
            </p>
          )}
          {passwordError && (
            <p
              className={`text-body-xsmall-desktop ${
                passwordError === '비밀번호가 일치합니다!'
                  ? 'text-blue-40'
                  : 'text-red-40'
              }`}
            >
              {passwordError}
            </p>
          )}
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
