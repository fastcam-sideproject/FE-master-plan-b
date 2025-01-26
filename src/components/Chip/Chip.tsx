import React from 'react';
import { IconX } from '@tabler/icons-react';
import clsx from 'clsx';

type ChipProps = {
  size: 'large' | 'small' | 'xsmall';
  keyword: string;
  onClick?: () => void;
  onClose?: () => void;
  selected?: boolean;
  disabled?: boolean;
};

const sizeClasses = {
  large: 'px-7 py-4 gap-3 text-label-large-desktop',
  small: 'px-6 py-3 gap-2 text-label-medium-desktop',
  xsmall: 'px-4 py-3 gap-2 text-label-small-desktop',
};

export default function Chip({ size, keyword, onClick, onClose, selected, disabled }: ChipProps) {
  return (
    <button
      className={clsx(
        'group flex items-center  rounded-10 border border-neutral-20 transition duration-300',
        sizeClasses[size],
        selected ? 'bg-neutral-85' : 'bg-neutral-0 hover:bg-neutral-5',
        disabled && 'cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={clsx(
          'text-center',
          selected ? 'text-neutral-0' : 'text-neutral-85',
          disabled && 'text-neutral-20',
        )}
      >
        {keyword}
      </span>

      <span
        className={clsx(
          'text-neutral-50 group-disabled:text-neutral-20',
          disabled && 'pointer-events-none',
        )}
        onClick={onClose}
      >
        <IconX size={`${size === 'large' ? '20' : '16'}`} stroke={2} />
      </span>
    </button>
  );
}

//TODO: 폰트 변경 후 정렬 재확인, 키워드 저장위치 결정
