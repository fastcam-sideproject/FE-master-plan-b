'use client';

import React from 'react';
import { IconSearch } from '@tabler/icons-react';

interface SearchBarProps {
  type: 'main' | 'default';
}
export default function SearchBar({ type }: SearchBarProps) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //search api 추가 해야됨.
  const handleSearch = () => {
    if (inputValue.trim()) {
      console.log('검색:', inputValue);
    } else {
      console.log('공백');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return type === 'main' ? (
    <div className="flex items-center justify-between pl-9 py-4 pr-4 rounded-10 bg-neutral-80 border-2 border-transparent focus-within:border-neutral-70">
      <input
        className="size-full p-4 grow-1 text-body-xlarge-desktop text-neutral-10 bg-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:text-neutral-0"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="원하는 자격증을 검색해보세요"
      />
      <button className="size-[55px] grow-0 p-4 rounded-10 bg-neutral-0">
        <IconSearch className="size-full" />
      </button>
    </div>
  ) : (
    <div className="flex items-center justify-between pl-9 py-4 pr-4 rounded-10 bg-neutral-0 border-2 border-neutral-30 focus-within:border-neutral-70 focus:border-neutral-90">
      <input
        className="size-full p-4 grow-1 text-body-xlarge-desktop text-neutral-40 bg-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:text-neutral-70"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="원하는 자격증을 검색해보세요"
      />
      <button className="size-[55px] grow-0 p-4 rounded-10 bg-neutral-90">
        <IconSearch className="size-full text-neutral-0" />
      </button>
    </div>
  );
}
