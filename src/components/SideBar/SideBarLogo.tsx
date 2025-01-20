import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";
import Image from "next/image";

type SideBarLogoType = {
  isCollapsed: boolean,
  toggleSidebar: () => void
}

function SideBarLogo({ isCollapsed, toggleSidebar }: SideBarLogoType) {
  return (
    <div className={`${isCollapsed ? "relative p-5" : " p-7"} flex justify-between items-center`}>
      <Image width={`${isCollapsed ? "40" : "157"}`} height={40} src={`${isCollapsed ? "/logos/logo-light.svg" : "/logos/logo-text-light.svg"}`} alt="로고" />
      <div className={`${isCollapsed ? "w-8 h-8 p-2 absolute top-16 -right-4 bg-neutral-80 rounded-full" : ""} hover:cursor-pointer`}>
        {isCollapsed ? (
          <IconArrowBarRight className="text-neutral-0" onClick={toggleSidebar} />
        ) : (
          <IconArrowBarLeft className="text-neutral-0" onClick={toggleSidebar} />
        )}
      </div>
    </div>
  );
}

export default SideBarLogo;