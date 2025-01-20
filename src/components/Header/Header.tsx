import { IconBellFilled, IconSearch, IconUserFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 flex justify-between items-center bg-neutral-85 px-9 py-5">
      <div className="flex items-center gap-[145px]">
        <Image width={157} height={40} src={"/logos/logo-text-light.svg"} alt={"헤더로고"} />
        <ul className="flex text-neutral-0">
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">자격증 정보</li>
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">커뮤니티</li>
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">마이페이지</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconSearch className="text-neutral-0" />
          </li>
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconBellFilled className="text-neutral-0" />
          </li>
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <IconUserFilled className="text-neutral-0" />
          </li>
        </ul>
      </div>
    </header>
  );
}
