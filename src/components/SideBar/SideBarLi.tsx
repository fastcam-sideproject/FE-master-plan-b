import { IconAbc } from "@tabler/icons-react";

type SideBarIcon = {
  liName: string,
  isCollapsed: boolean
  Icon: React.ElementType
}

export default function SideBarLi({ liName, isCollapsed, Icon }: SideBarIcon) {
  return (
    <li className={`flex items-center ${isCollapsed ? "justify-center px-4 py-4" : "w-[90%] px-5 py-4 gap-4 "} hover:cursor-pointer hover:bg-neutral-70 hover:rounded-full active:bg-neutral-0 active:text-neutral-85`}>
      <Icon className="text-neutral-0" />
      <span className={isCollapsed ? "hidden" : ""}>{liName}</span>
    </li>
  );
}