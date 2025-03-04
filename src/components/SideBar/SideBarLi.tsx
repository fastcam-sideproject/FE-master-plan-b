import Link from 'next/link';

type SideBarIcon = {
  liName: string;
  isCollapsed: boolean;
  Icon: React.ElementType;
  Href: string;
};

export default function SideBarLi({ liName, isCollapsed, Icon, Href }: SideBarIcon) {
  return (
    <Link
      href={Href}
      className={`flex items-center ${isCollapsed ? 'justify-center px-4 py-4' : 'w-[90%] gap-4 px-5 py-4'} hover:cursor-pointer hover:rounded-full hover:bg-neutral-70 active:bg-neutral-0 active:text-neutral-85`}
    >
      <Icon className="text-neutral-0" />
      <span className={isCollapsed ? 'hidden' : ''}>{liName}</span>
    </Link>
  );
}
