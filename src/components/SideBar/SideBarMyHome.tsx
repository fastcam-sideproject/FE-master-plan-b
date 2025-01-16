'use client';
import { useState } from "react";
import SideBarLi from "./SideBarLi";
import SideBarLogo from "./SideBarLogo";


export default function SideBarMyHome() {
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