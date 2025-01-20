'use client';

import { useState } from "react";
import { IconBell, IconCalendar, IconHome, IconSettings, IconVocabulary } from "@tabler/icons-react";
import SideBarLi from "./SideBarLi";
import SideBarLogo from "./SideBarLogo";


export default function SideBarFavoriteCertifications() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`transition-all duration-300 ${isCollapsed ? "w-[72px]" : "w-[280px]"
      } h-[100vh] bg-neutral-85 pb-6`}>
      <nav className="h-full flex flex-col justify-between">
        <div>
          <SideBarLogo isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <ul className="flex flex-col justify-center items-center text-neutral-0">
            <SideBarLi liName={"My 홈"} isCollapsed={isCollapsed} Icon={IconHome} />
            <SideBarLi liName={"관심자격증"} isCollapsed={isCollapsed} Icon={IconVocabulary} />
            <SideBarLi liName={"자격증모아보기"} isCollapsed={isCollapsed} Icon={IconCalendar} />
          </ul>

        </div>

        <ul className="flex flex-col justify-center items-center text-neutral-0">
          <SideBarLi liName={"알림설정"} isCollapsed={isCollapsed} Icon={IconBell} />
          <SideBarLi liName={"설정"} isCollapsed={isCollapsed} Icon={IconSettings} />
        </ul>

      </nav>
    </aside>
  );
};