import { IconBellFilled, IconHelmet, IconSearch, IconUser, IconUserFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-neutral-85 px-9 py-4">

      <div className="flex items-center gap-[145px]">
        <Image width={157} height={40} src={"/logos/logo-text-light.svg"} alt={"헤더 로고"} className="hidden lg:flex" />
        <Image width={36} height={36} src={"/logos/logo-light.svg"} alt={"태블릿 모바일 로고"} className="flex lg:hidden" />
        <ul className="hidden lg:flex text-neutral-0">
          <li className="px-6 py-4 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">자격증 정보</li>
          <li className="px-6 py-4 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">커뮤니티</li>
          <li className="px-6 py-4 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">관심 자격증</li>
          <li className="px-6 py-4 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">마이페이지</li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4">
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconSearch className="text-neutral-0" />
          </li>
          <li className="hidden lg:flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconBellFilled className="text-neutral-0" />
          </li>
          <li className="hidden lg:flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconUserFilled className="text-neutral-0" />
          </li>
          <li className="lg:hidden flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconUser className="text-neutral-0" />
          </li>
        </ul>
      </div>

    </header>
  );
}
