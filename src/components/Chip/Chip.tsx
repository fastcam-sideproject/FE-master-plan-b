import React from 'react';
import { IconX } from '@tabler/icons-react';

interface ChipProps {
  size: 'large' | 'small';
  keyword: string;
  onClick?: () => void;
  onClose?: () => void;
  selected?: boolean;
  disabled?: boolean;
}
export default function Chip({ size, keyword, onClick, onClose, selected }: ChipProps) {
  return (
    <button
      className={`group flex items-center gap-3 rounded-10 px-7 py-4 border border-neutral-20 text-label-large-desktop transition duration-300  ${selected ? 'bg-neutral-85' : 'bg-neutral-0 hover:bg-neutral-5'} disabled:cursor-not-allowed`}
      disabled
    >
      <span
        className={`text-center ${selected ? 'text-neutral-0' : 'text-neutral-85'} group-disabled:text-neutral-20`}
      >
        {keyword}
      </span>
      <span className="text-neutral-50 group-disabled:text-neutral-20" onClick={onClose}>
        <IconX />
      </span>
    </button>
  );
}

//TODO: 폰트 변경 후 정렬 재확인, 키워드 저장위치 결정
