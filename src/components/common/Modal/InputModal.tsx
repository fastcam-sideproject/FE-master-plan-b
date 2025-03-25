import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import DayInput from '@/components/DayInput/DayInput';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Input } from '@/components/ui/input';

const InputModalVariants = cva(
  'flex w-fit flex-col items-center justify-center gap-8 rounded-9 bg-neutral-0 p-10 shadow-2',
);

interface InputModalProps {
  children: ReactNode;
  onConfirm: () => void;
}

const InputModal = ({ onConfirm }: InputModalProps) => {
  return (
    <div className={cn(InputModalVariants())}>
      <h2 className="w-full text-start text-title-large-desktop">
        자격증 등록하기
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center">
          <span className="w-[120px]">자격증명</span>
          <SearchBar type="default" />
        </li>
        <li className="flex items-center">
          <span className="w-[120px]">취득일</span>
          <DayInput />
        </li>
        <li className="flex items-center">
          <span className="w-[120px]">만료일</span>
          <DayInput />
        </li>
        <li className="flex items-center">
          <span className="w-[120px]">자격증 번호</span>
          <Input placeholder="자격증 번호를 입력하세요" className="w-[245px]" />
        </li>
      </ul>
      <div className="flex gap-5">
        <Button
          label="확인"
          size={'lg'}
          className="w-[178px]"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
};

export default InputModal;
