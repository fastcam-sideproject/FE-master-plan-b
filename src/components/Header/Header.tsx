'use client';

import {
  IconBellFilled,
  IconMenu2,
  IconSearch,
  IconUserFilled,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { USERS_API_PATH } from '@/api/path';

const headerNavLi = [
  {
    id: 1,
    navName: '자격증 정보',
    navPath: '/info',
  },
  {
    id: 2,
    navName: '커뮤니티',
    navPath: '/community',
  },
  {
    id: 3,
    navName: '관심 자격증',
    navPath: '/interested-certifications',
  },
  {
    id: 4,
    navName: '마이페이지',
    navPath: '/mypage',
  },
];

// const isLogin

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      // 백엔드 로그아웃 API 호출
      if (session?.user?.accessToken) {
        await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}${USERS_API_PATH.logout}`,
          {
            method: 'POST',
            headers: {
              Authorization: session.user.accessToken,
            },
          },
        );
      }

      // NextAuth 로그아웃
      await signOut({
        redirect: false,
        callbackUrl: '/',
      });

      router.push('/');
    } catch (error) {
      console.error('로그아웃 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-neutral-85 px-9 py-4">
      <div className="flex items-center gap-[145px]">
        <Image
          width={157}
          height={40}
          src={'/logos/logo-text-light.svg'}
          alt={'헤더 로고'}
          className="hidden hover:cursor-pointer desktop:flex"
          onClick={() => {
            router.push('/');
          }}
        />
        <Image
          width={36}
          height={36}
          src={'/logos/logo-light.svg'}
          alt={'태블릿 모바일 로고'}
          className="flex cursor-pointer desktop:hidden"
          onClick={() => {
            router.push('/');
          }}
        />
        <ul className="flex text-neutral-0 tablet:hidden mobile:hidden">
          {headerNavLi.map((item) => (
            <li
              key={item.id}
              className="rounded-full px-6 py-4 hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50"
            >
              <Link href={item.navPath}>{item.navName}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex gap-4">
          <button
            onClick={handleLogout}
            className="text-body-xsmall-desktop font-[400] text-neutral-0"
          >
            로그아웃(임시)
          </button>
          <li className="hidden h-10 w-10 items-center justify-center rounded-full bg-neutral-80 hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50 desktop:flex">
            <IconBellFilled className="text-neutral-0" />
          </li>
          <li className="hidden h-10 w-10 items-center justify-center rounded-full bg-neutral-80 hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50 desktop:flex">
            <IconUserFilled className="text-neutral-0" />
          </li>
          <li className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-80 hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50 desktop:hidden">
            <IconSearch className="text-neutral-0" />
          </li>
          <li className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-80 hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50 desktop:hidden">
            <IconMenu2 className="text-neutral-0" />
          </li>
        </ul>
      </div>
    </header>
  );
}
