import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import DayInput from '@/components/DayInput/DayInput';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Input } from '@/components/ui/input';

const InputModalVariants = cva(
  ' rounded-9 bg-neutral-0 py-[80px] shadow-2 w-[662px] flex justify-center',
);

interface InputModalProps {
  onConfirm: () => void;
}
// todo: 검색 전에는 searchBar만 나오게 할 것.
// todo: 토익처럼 점수 입력만 해도 되는 경우 각 항목을 시험일, 만료일, 점수 / 등급으로 대체할 것.

const InputModal = ({ onConfirm }: InputModalProps) => {
  return (
    <div className={cn(InputModalVariants())}>
      <div className="flex w-[534px] flex-col justify-center gap-10">
        <h2 className="w-full text-start text-title-large-desktop">
          자격증 등록하기
        </h2>
        <ul className="flex flex-col gap-7 pl-3">
          <li className="flex items-center">
            <span className="w-[120px]">자격증명</span>
            <SearchBar type="default" size="sm" />
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
            <Input
              placeholder="자격증 번호를 입력하세요"
              className="w-[245px]"
            />
          </li>
        </ul>
        <div className="flex justify-center">
          <Button
            label="등록하기"
            size={'lg'}
            className="w-[200px]"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default InputModal;
