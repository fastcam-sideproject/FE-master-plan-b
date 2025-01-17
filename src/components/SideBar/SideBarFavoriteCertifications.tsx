'use client';
import { useState } from "react";
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
            <SideBarLi iconUrl={"/icons/study/home.svg"} iconName={"My Home"} liName={"My 홈"} isCollapsed={isCollapsed} />
            <SideBarLi iconUrl={"/icons/study/vocabulary.svg"} iconName={"관심자격증"} liName={"관심자격증"} isCollapsed={isCollapsed} />
            <SideBarLi iconUrl={"/icons/study/calendar-month.svg"} iconName={"자격증모아보기"} liName={"자격증모아보기"} isCollapsed={isCollapsed} />
          </ul>

        </div>

        <ul className="flex flex-col justify-center items-center text-neutral-0">
          <SideBarLi iconUrl={"/icons/gnb/bell-filled.svg"} iconName={"알림설정"} liName={"알림설정"} isCollapsed={isCollapsed} />
          <SideBarLi iconUrl={"/icons/active/settings.svg"} iconName={"설정"} liName={"설정"} isCollapsed={isCollapsed} />
        </ul>

      </nav>
    </aside>
  );
};