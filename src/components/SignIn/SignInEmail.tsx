'use client';


import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SignInEmail() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-title-large-desktop">이메일로 로그인</h2>
      <form className="w-[360px] flex flex-col gap-6">
        <label className="flex flex-col gap-4 mt-10">
          이메일
          <Input type="text" placeholder="아이디(이메일을) 입력해주세요" />
        </label>
        <label className="flex flex-col gap-4 mb-10">
          비밀번호
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </label>
        <Button type="submit" variant={"secondary"} size={"md"} textColor={"gray"} label="로그인" />
      </form>
      <div className="my-8">또는</div>
      <Button type="button" className="w-[360px]" variant={"outline"} size={"md"} textColor={"gray"} label="이메일로 회원가입" onClick={() => router.push("/signup")} />
    </section>
  );
}