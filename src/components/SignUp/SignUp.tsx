'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AgreementCheckboxes from "./AgreementCheckboxes";

export default function SignUp() {
  const router = useRouter();
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/welcome");
    console.log("회원가입 버튼 클릭");
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-title-large-desktop">회원가입</h2>
      <form className="w-[360px] flex flex-col gap-6">
        <label className="flex flex-col gap-4 mt-10">
          닉네임
          <Input type="text" placeholder="닉네임을 입력해주세요" required />
        </label>
        <label className="flex flex-col gap-4">
          아이디
          <div className="flex gap-4">
            <Input type="text" placeholder="아이디를 입력해주세요" required />
            <Button label="인증하기" variant={"third"} size={"md"} />
          </div>
        </label>
        <label className="flex flex-col gap-4 mb-10">
          비밀번호
          <Input type="password" placeholder="비밀번호를 입력해주세요" required />
          <Input type="password" placeholder="비밀번호를 다시 한번 입력해주세요" required />
          <p className="text-neutral-30 text-body-xsmall-desktop">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상<br /> 16자 이하로 입력해주세요</p>
        </label>
        <AgreementCheckboxes onChange={setIsAgreementChecked} />
        <Button
          type="submit"
          variant={"secondary"}
          size={"md"}
          textColor={"gray"}
          label="가입하기"
          disabled={!isAgreementChecked}
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
}