'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  return (
    <div className="my-40">
      <section className="flex flex-col items-center">
        <h1 className="text-center text-heading-small-desktop mb-5">000님<br /> 환영합니다!</h1>
        <p className="text-center text-neutral-50 mb-16">마스터 플랜비가 OOO님의 <br />
          자격증 정보를 한 곳에서 관리해드릴게요</p>
        <Button type="button" className="w-[360px]" variant={"secondary"} size={"md"} textColor={"gray"} label="온보딩 하러가기" onClick={() => router.push("/onbording")} />
      </section>
    </div>
  );
}