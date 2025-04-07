import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import DayInput from '@/components/DayInput/DayInput';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Input } from '@/components/ui/input';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const InputModalVariants = cva(
  'py-[80px] w-[662px] flex flex-col justify-center items-center rounded-9 bg-neutral-0 shadow-2 tablet:w-[389px] mobile:w-[323px] tablet:pt-6 tablet:pb-9 mobile:pt-6 mobile:pb-9 tablet:px-9 mobile:px-4',
);

interface InputModalProps {
  onConfirm: () => void;
  onCancel?: () => void;
}
// todo: 검색 전에는 searchBar만 나오게 할 것.
// todo: 토익(examId=토익)처럼 점수 입력만 해도 되는 경우 각 항목을 시험일, 만료일, 점수 / 등급으로 대체할 것.
// todo: 수정 모달 만들 것.

const InputModal = ({ onConfirm, onCancel }: InputModalProps) => {
  const smallTitleStyle =
    'w-[120px] text-neutral-30 tablet:w-[69px] mobile:w-[69px] tablet:text-body-small-desktop mobile:text-body-xsmall-desktop font-[400] tracking-[-1px]';

  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  return (
    <div className={cn(InputModalVariants())}>
      {(isTablet || isMobile) && (
        <button className="flex w-full justify-end">
          <IconX onClick={onCancel} />
        </button>
      )}
      <div className="flex w-[534px] flex-col items-center justify-center gap-10 tablet:gap-9 mobile:w-full mobile:gap-6">
        <div className="flex w-fit flex-col gap-10 tablet:gap-6 mobile:gap-5">
          <h2 className="w-full text-start text-title-large-desktop mobile:text-title-medium-desktop">
            {'{'}자격증 등록하기{'}'}
          </h2>
          <ul className="flex flex-col gap-7 pl-3 tablet:gap-6 mobile:gap-3">
            <li className="flex items-center">
              <span className={smallTitleStyle}>자격증명</span>
              <SearchBar type="default" size="sm" />
            </li>
            <li className="flex items-center">
              <span className={smallTitleStyle}>취득일</span>
              <DayInput />
            </li>
            <li className="flex items-center">
              <span className={smallTitleStyle}>만료일</span>
              <DayInput />
            </li>
            <li className="flex items-center">
              <span className={smallTitleStyle}>자격증 번호</span>
              <Input
                placeholder="자격증 번호를 입력하세요"
                className="w-[245px] tablet:w-[220px] mobile:w-[220px]"
              />
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            label="등록하기"
            size={`${isMobile ? 'sm' : 'lg'}`}
            className="w-[200px] mobile:h-[46px]"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default InputModal;
