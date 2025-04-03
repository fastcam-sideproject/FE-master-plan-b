'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function WelcomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nickname =
    searchParams.get('nickname') || '이 페이지에 어떻게 들어왔어?';

  return (
    <div className="my-40">
      <section className="flex flex-col items-center">
        <h1 className="mb-5 text-center text-heading-small-desktop">
          {nickname}님<br /> 환영합니다!
        </h1>
        <p className="mb-16 text-center text-neutral-50">
          마스터 플랜비가 {nickname}님의 <br />
          자격증 정보를 한 곳에서 관리해드릴게요
        </p>
        <Button
          type="button"
          className="w-[360px]"
          variant={'secondary'}
          size={'md'}
          textColor={'gray'}
          label="온보딩 하러가기"
          onClick={() => router.push('/onboarding')}
        />
      </section>
    </div>
  );
}
