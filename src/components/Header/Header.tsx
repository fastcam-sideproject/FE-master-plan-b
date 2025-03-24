"use client";

import { IconBellFilled, IconSearch, IconUser, IconUserFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const headerNavLi = [
  {
    id: 1,
    navName: "자격증 정보",
    navPath: "/info",
  },
  {
    id: 2,
    navName: "커뮤니티",
    navPath: "/community",
  },
  {
    id: 3,
    navName: "관심 자격증",
    navPath: "/interested-certifications",
  },
  {
    id: 4,
    navName: "마이페이지",
    navPath: "/mypage",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-neutral-85 px-9 py-4">

      <div className="flex items-center gap-[145px]">
        <Image width={157} height={40} src={"/logos/logo-text-light.svg"} alt={"헤더 로고"} className="hidden lg:flex hover:cursor-pointer" onClick={() => { router.push("/") }} />
        <Image width={36} height={36} src={"/logos/logo-light.svg"} alt={"태블릿 모바일 로고"} className="flex lg:hidden" />
        <ul className="hidden lg:flex text-neutral-0">
          {headerNavLi.map((item) => (
            <li
              key={item.id}
              className="px-6 py-4 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50"
            >
              <Link href={item.navPath}>{item.navName}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex gap-4">
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

    </header >
  );
}
