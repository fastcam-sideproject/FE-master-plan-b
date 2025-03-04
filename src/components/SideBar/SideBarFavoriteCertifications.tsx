'use client';

import { useState } from 'react';
import { IconBell, IconCalendarWeek, IconGraph, IconHome, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import SideBarLi from './SideBarLi';
import SideBarLogo from './SideBarLogo';

export default function SideBarFavoriteCertifications() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`transition-all duration-300 ${
        isCollapsed ? 'w-[72px]' : 'w-[280px]'
      } h-[100vh] bg-neutral-85 pb-6`}
    >
      <nav className="flex h-full flex-col justify-between">
        <div>
          <SideBarLogo isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <ul className="flex flex-col items-center justify-center text-neutral-0">
            <SideBarLi Href="/mypage" liName={'My 홈'} isCollapsed={isCollapsed} Icon={IconHome} />
            <SideBarLi
              Href="/mypage/my-certification"
              liName={'자격증 모아보기'}
              isCollapsed={isCollapsed}
              Icon={IconCalendarWeek}
            />
            <SideBarLi
              Href="/mypage/history"
              liName={'내 활동'}
              isCollapsed={isCollapsed}
              Icon={IconGraph}
            />
          </ul>
        </div>
        <ul className="flex flex-col items-center justify-center text-neutral-0">
          <SideBarLi
            Href="/mypage/alarm"
            liName={'알림설정'}
            isCollapsed={isCollapsed}
            Icon={IconBell}
          />
          <SideBarLi Href="/" liName={'설정'} isCollapsed={isCollapsed} Icon={IconSettings} />
        </ul>
      </nav>
    </aside>
  );
}
