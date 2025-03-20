import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TabButtonType } from './types';

export default function TabButton({
  innerText,
  link,
  fontSize,
}: TabButtonType) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsActive(true);
    router.push(link);
  };

  return (
    <li
      className={`rounded-full px-7 py-4 hover:cursor-pointer ${
        isActive
          ? 'bg-neutral-85 text-neutral-0'
          : 'bg-neutral-0 text-neutral-85 hover:bg-neutral-5'
      }`}
      onClick={handleBtnClick}
    >
      <button type="button" className={fontSize}>
        {innerText}
      </button>
    </li>
  );
}
