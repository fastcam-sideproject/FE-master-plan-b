import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TabHorizonButtonType } from './types';

export default function TabHorizonButton({
  innerText,
  link,
  isDark,
  size = 'normal',
  fontSize,
}: TabHorizonButtonType) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsActive(true);
    router.push(link);
  };

  const sizeClass = {
    normal: 'px-7 py-4',
    medium: 'px-6 py-3',
    small: 'px-5 py-3',
  };

  return (
    <li
      className={`${sizeClass[size]} rounded-full hover:cursor-pointer ${
        isActive
          ? isDark
            ? 'bg-neutral-85 text-neutral-0'
            : 'bg-neutral-0 text-neutral-85'
          : isDark
            ? 'text-neutral-85 hover:bg-neutral-5'
            : 'text-neutral-85 hover:bg-neutral-0'
      }`}
      onClick={handleBtnClick}
    >
      <button type="button" className={fontSize}>
        {innerText}
      </button>
    </li>
  );
}
