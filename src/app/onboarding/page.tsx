'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 py-10">
      <h1 className="text-2xl font-semibold mb-4">온보딩에 오신 걸 환영해요!</h1>
      <p className="text-neutral-60 text-base text-center">
        마스터플랜비의 맞춤 서비스를 시작하려면<br />
        몇 가지 정보를 입력해주세요.
      </p>
      <Button
        type="button"
        className="w-[360px]"
        variant={'default'}
        size={'md'}
        label="온보딩 시작하기"
        onClick={() => { router.push("/onboarding/step1"); }}
      />
    </div>
  );
}

export default Page;