'use client';

import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const searchBarVariants = cva(
  'w-[560px] mobile:w-[335px] h-[79px] mobile:h-[58px] flex items-center justify-between pl-9 py-4 pr-4 rounded-10 border-2 focus-within:border-neutral-70 text-body-xlarge-desktop',
  {
    variants: {
      variant: { default: '', secondary: 'w-[1080px]' },
      type: {
        default: 'bg-neutral-0  border-neutral-30  focus:border-neutral-90',
        main: 'bg-neutral-80 border-transparent',
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
    },
  },
);
const buttonVariants = cva(
  'size-[55px] mobile:size-[44px] grow-0 p-4 rounded-10 flex items-center justify-center',
  {
    variants: {
      variant: { default: '', secondary: '' },
      type: {
        default: 'bg-neutral-90',
        main: 'bg-neutral-0',
      },
    },
  },
);

interface SearchBarProps {
  variant?: 'default' | 'secondary';
  type: 'main' | 'default';
  onSearch?: (value: string) => void;
}

export default function SearchBar({ variant, type, onSearch }: SearchBarProps) {
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
    <div className={cn(searchBarVariants({ variant, type }))}>
      <input
        className={cn(inputVariants({ variant, type }))}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="원하는 자격증을 검색해보세요"
      />
      <button className={cn(buttonVariants({ variant, type }))}>
        <IconSearch
          className={`size-[28px] mobile:size-[20px] ${type === 'main' ? '' : 'text-neutral-0'}`}
        />
      </button>
    </div>
  );
}
