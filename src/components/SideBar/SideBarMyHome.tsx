'use client';
import { useState } from 'react';
import {
  IconBookmark,
  IconGraph,
  IconHome,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';
import SideBarLi from './SideBarLi';
import SideBarLogo from './SideBarLogo';

export default function SideBarMyHome() {
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
            <SideBarLi
              Href="/"
              liName={'커뮤니티'}
              isCollapsed={isCollapsed}
              Icon={IconMessageCircle}
            />
            <SideBarLi Href="/" liName={'내활동'} isCollapsed={isCollapsed} Icon={IconGraph} />
            <SideBarLi Href="/" liName={'저장됨'} isCollapsed={isCollapsed} Icon={IconBookmark} />
          </ul>
        </div>

        <ul className="flex flex-col items-center justify-center text-neutral-0">
          <SideBarLi Href="/" liName={'설정'} isCollapsed={isCollapsed} Icon={IconSettings} />
        </ul>
      </nav>
    </aside>
  );
}
