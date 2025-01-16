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
        <Image width={24} height={24} src={`${isCollapsed ? "/icons/direction/bar-right.svg" : "/icons/direction/bar-left.svg"}`} alt="화살표" className="filter invert" onClick={toggleSidebar} />
      </div>
    </div>
  );
}

export default SideBarLogo;