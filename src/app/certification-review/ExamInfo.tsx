import React from 'react';
import { IconHexagons } from '@tabler/icons-react';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Input } from '@/components/ui/input';
import { Dropdown } from '@/components/Dropdown';
import DayInput from '@/components/DayInput/DayInput';

// todo: searchBar 옵션 추가

const ExamInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconHexagons className="rotate-180" />
        <h2>시험 정보</h2>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex items-center">
          <p className="w-[110px] text-body-xlarge-desktop">자격증명</p>
          <SearchBar type="main" />
        </div>
        <div className="flex items-center">
          <p className="w-[110px] text-body-xlarge-desktop">취득상태</p>
          <Dropdown items={['취득', '미취득']} title="상태를 선택해 주세요" />
        </div>
        <div className="flex items-center">
          <p className="w-[110px] text-body-xlarge-desktop">취득일</p>
          <DayInput />
        </div>
        <div className="flex items-center">
          <p className="w-[110px] text-body-xlarge-desktop">만료일</p>
          <DayInput />
        </div>
        <div className="flex items-center">
          <p className="w-[110px] text-body-xlarge-desktop">자격증 번호</p>
          <Input placeholder="자격증 번호 입력" className="w-[245px]" />
        </div>
      </div>
    </div>
  );
};

export default ExamInfo;
