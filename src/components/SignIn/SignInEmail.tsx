'use client';

import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';
import { FormProvider, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface LoginForm {
  email: string;
  password: string;
}

export default function SignInEmail() {
  const router = useRouter();
  const methods = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log('결과물', result);
      if (result?.ok) {
        // todo: 로그인에 성공하면 원래 진입하려 했던 페이지로 이동

        router.push('/mypage');
      } else {
        console.error('로그인 실패:', result?.error);
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-title-large-desktop">이메일로 로그인</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-[360px] flex-col gap-6"
        >
          <label className="mt-10 flex flex-col gap-4">
            이메일
            <Input
              type="email"
              placeholder="아이디(이메일을) 입력해주세요"
              {...methods.register('email')}
            />
          </label>
          <label className="mb-10 flex flex-col gap-4">
            비밀번호
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...methods.register('password')}
            />
          </label>
          <Button
            type="submit"
            variant={'secondary'}
            size={'md'}
            textColor={'gray'}
            label="로그인"
          />
          {/* // todo: 개발자 로그인은 배포 시 제거할 것 */}
          {process.env.NODE_ENV === 'development' && (
            <Button
              type="button"
              variant={'secondary'}
              size={'md'}
              textColor={'gray'}
              label="개발자 로그인"
              onClick={() => {
                methods.setValue('email', 'dev@example.com');
                methods.setValue('password', 'dev1234');
                methods.handleSubmit(onSubmit)();
              }}
            />
          )}
        </form>
      </FormProvider>
      <div className="my-8">또는</div>
      <Link href="/signup">
        <Button
          type="button"
          className="w-[360px]"
          variant={'outline'}
          size={'md'}
          textColor={'gray'}
          label="이메일로 회원가입"
        />
      </Link>
    </section>
  );
}
