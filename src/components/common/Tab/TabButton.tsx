import { useRouter } from 'next/navigation';
import { useState } from 'react';

type TabButtonType = {
  innerText: string;
  link: string;
};

export default function TabButton({ innerText, link }: TabButtonType) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsActive(true);
    router.push(link);
  };

  return (
    <li
      className={`px-7 py-4 rounded-full ${isActive
        ? 'bg-neutral-85 text-neutral-0'
        : 'bg-neutral-0 text-neutral-85 hover:bg-neutral-5'
        }`}
      onClick={handleBtnClick}
    >
      <button type="button">
        {innerText}
      </button>
    </li>
  );
}