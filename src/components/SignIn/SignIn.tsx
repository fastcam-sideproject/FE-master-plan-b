import Image from "next/image";
import { AppleLoginBtn, GoogleLoginBtn, KakaoLoginBtn } from "../LoginButton";

function SignIn() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-5 items-center">
        <Image width={40} height={40} src={"/logos/logo-dark.svg"} alt={"헤더 로고"} className="hidden lg:flex" />
        <h1 className="text-heading-small-desktop text-center">확실한 합격전략,<br />마스터플랜비</h1>
        <p className="text-neutral-50 text-body-small-desktop">간편 로그인으로 더 빠르고 쉽게 시작해요!</p>
      </section>

      <section className="flex flex-col items-center gap-5">
        <KakaoLoginBtn />
        <AppleLoginBtn />
        <GoogleLoginBtn />
      </section>
    </div>
  );
}

export default SignIn;