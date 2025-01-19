import Image from "next/image";

type SideBarIcon = {
  iconUrl: string,
  iconName: string,
  liName: string,
  isCollapsed: boolean
}

export default function SideBarLi({ iconUrl, iconName, liName, isCollapsed }: SideBarIcon) {
  return (
    <li className={`flex items-center ${isCollapsed ? "justify-center px-4 py-4" : "w-[90%] px-5 py-4 gap-4 "} hover:cursor-pointer hover:bg-neutral-70 hover:rounded-full active:bg-neutral-0 active:text-neutral-85`}>
      <Image width={24} height={24} src={iconUrl} alt={iconName} className="filter invert " />
      <span className={isCollapsed ? "hidden" : ""}>{liName}</span>
    </li>
  );
}