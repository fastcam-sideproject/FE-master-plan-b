'use client';

import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const searchBarVariants = cva(
  'flex items-center justify-between rounded-10 border',
  {
    variants: {
      variant: { default: '', secondary: 'w-[1080px]' },
      type: {
        default:
          'bg-neutral-0 border-2 border-neutral-30 focus-within:border-neutral-90',
        main: 'bg-neutral-80 border-2 border-neutral-80 focus-within:border-neutral-0',
      },
      size: {
        default:
          'w-[560px] mobile:w-[335px] h-[79px] mobile:h-[58px] pl-9 pr-4 py-4 text-body-xlarge-desktop border-2',
        sm: 'w-[335px] h-[58px] pr-3 pl-8 border',
      },
    },
  },
);
const inputVariants = cva(
  'size-full grow-1 mobile:text-body-medium-desktop bg-transparent focus:outline-none focus:ring-0 focus:border-transparent',
  {
    variants: {
      variant: { default: '', secondary: '' },
      type: {
        default: 'text-neutral-40 focus:text-neutral-70',
        main: 'text-neutral-10 focus:text-neutral-0',
      },
      size: {
        default: '',
        sm: '',
      },
    },
  },
);
const buttonVariants = cva(
  'grow-0 rounded-10 flex items-center justify-center',
  {
    variants: {
      variant: { default: '', secondary: '' },
      type: {
        default: 'bg-neutral-90',
        main: 'bg-neutral-0',
      },
      size: {
        default: 'size-[55px] mobile:size-[44px] p-4',
        sm: 'size-[40px] min-w-[40px] flex-shrink-0',
      },
    },
  },
);

interface SearchBarProps {
  variant?: 'default' | 'secondary';
  type: 'main' | 'default';
  size?: 'default' | 'sm';
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  variant,
  type,
  size = 'default',
  onSearch,
}: SearchBarProps) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //search api 추가 해야됨.
  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch?.(inputValue.trim()); // 부모로 전달
      setInputValue(''); // 입력창 비우기
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={cn(searchBarVariants({ variant, type, size }))}>
      <input
        className={cn(inputVariants({ variant, type, size }))}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="원하는 자격증을 검색해보세요"
      />
      <button className={cn(buttonVariants({ variant, type, size }))}>
        <IconSearch
          className={`size-[28px] mobile:size-[20px] ${type === 'main' ? '' : 'text-neutral-0'} ${size === 'sm' && 'h-[20px] w-[20px]'}`}
        />
      </button>
    </div>
  );
}
