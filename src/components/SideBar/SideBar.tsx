'use client';
import Image from "next/image";
import SideBarLi from "./SideBarLi";
import { useState } from "react";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`transition-all duration-300 ${isCollapsed ? "w-[72px]" : "w-[280px]"
      } h-[100vh] bg-neutral-85 pb-6`}>
      <nav className="h-full flex flex-col justify-between">
        <div>
          <div className={`${isCollapsed ? "relative p-5" : " p-7"} flex justify-between items-center`}>
            <Image width={`${isCollapsed ? "40" : "157"}`} height={40} src={`${isCollapsed ? "/logos/logo-light.svg" : "/logos/logo-text-light.svg"}`} alt="로고" />
            <div className={`${isCollapsed ? "w-8 h-8 p-2 absolute top-16 -right-4 bg-neutral-80 rounded-full" : ""} hover:cursor-pointer`}>
              <Image width={24} height={24} src={`${isCollapsed ? "/icons/direction/bar-right.svg" : "/icons/direction/bar-left.svg"}`} alt="화살표" className="filter invert" onClick={toggleSidebar} />
            </div>
          </div>
          <ul className="flex flex-col justify-center items-center text-neutral-0">
            <SideBarLi iconUrl={"/icons/state/message-circle.svg"} iconName={"커뮤니티"} liName={"커뮤니티"} isCollapsed={isCollapsed} />
            <SideBarLi iconUrl={"/icons/active/graph.svg"} iconName={"내활동"} liName={"내활동"} isCollapsed={isCollapsed} />
            <SideBarLi iconUrl={"/icons/react/bookmark-line.svg"} iconName={"저장됨"} liName={"저장됨"} isCollapsed={isCollapsed} />
          </ul>

        </div>

        <ul className="flex flex-col justify-center items-center text-neutral-0">
          <SideBarLi iconUrl={"/icons/active/settings.svg"} iconName={"설정"} liName={"설정"} isCollapsed={isCollapsed} />
        </ul>

      </nav>
    </aside>
  );
};