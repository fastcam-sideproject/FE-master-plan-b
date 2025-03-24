'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IconMail } from "@tabler/icons-react";


interface LoginBtnProps {
  loginType: "google" | "naver" | "kakao" | "email";
}

export function LoginBtn({ loginType }: LoginBtnProps) {
  const router = useRouter();
  const loginOptions: Record<
    LoginBtnProps["loginType"],
    { icon: JSX.Element; text: string; bgColor: string; onClick: () => void }
  > = {
    google: {
      icon: <Image width={25} height={25} src="/icons/login/google.svg" alt="google icon" />,
      text: "구글로 시작하기",
      bgColor: "bg-white border border-gray-300",
      onClick: () => window.location.href = "https://masterplanb.site/oauth2/authorization/google",
    },
    naver: {
      icon: <Image width={25} height={25} src="/icons/login/naver.svg" alt="naver icon" />,
      text: "네이버로 시작하기",
      bgColor: "bg-[#03CF5D] text-white",
      onClick: () => window.location.href = "https://masterplanb.site/oauth2/authorization/naver",
    },
    kakao: {
      icon: <Image width={25} height={25} src="/icons/login/kakao.svg" alt="kakao icon" />,
      text: "카카오로 시작하기",
      bgColor: "bg-yellow-400 text-black",
      onClick: () => window.location.href = "https://masterplanb.site/oauth2/authorization/kakao",
    },
    email: {
      icon: <IconMail className="w-6 h-6" />,
      text: "이메일로 시작하기",
      bgColor: "bg-white border border-gray-300",
      onClick: () => router.push("/signin/email"),
    },
  };

  return (
    <button
      type="button"
      className={`w-[360px] flex justify-center items-center gap-3 h-12 py-3 rounded-4 ${loginOptions[loginType].bgColor}`}
      onClick={loginOptions[loginType].onClick}
    >
      {loginOptions[loginType].icon}
      <div className="text-label-small-desktop">{loginOptions[loginType].text}</div>
    </button>
  );
}