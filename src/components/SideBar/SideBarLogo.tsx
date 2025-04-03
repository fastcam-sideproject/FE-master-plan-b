import { IconArrowBarLeft, IconArrowBarRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

type SideBarLogoType = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

function SideBarLogo({ isCollapsed, toggleSidebar }: SideBarLogoType) {
  return (
    <div
      className={`${isCollapsed ? 'relative p-5' : 'p-7'} flex items-center justify-between`}
    >
      <Link href="/">
        <Image
          width={`${isCollapsed ? '40' : '157'}`}
          height={40}
          src={`${isCollapsed ? '/logos/logo-light.svg' : '/logos/logo-text-light.svg'}`}
          alt="로고"
        />
      </Link>
      <div
        className={`${isCollapsed ? 'absolute -right-4 top-16 h-8 w-8 rounded-full bg-neutral-80 p-2' : ''} hover:cursor-pointer`}
      >
        {isCollapsed ? (
          <IconArrowBarRight
            className="text-neutral-0"
            onClick={toggleSidebar}
          />
        ) : (
          <IconArrowBarLeft
            className="text-neutral-0"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default SideBarLogo;
