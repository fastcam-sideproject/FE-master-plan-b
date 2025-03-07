import React from 'react';
import { NumberInput } from '@/components/common/NumberInput';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';
import { Dropdown } from '@/components/Dropdown';
import Textarea from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MyStudyInfoRecord = () => {
  return (
    <div className="flex flex-col gap-7 pl-6">
      <div className="text-title-medium-desktop">학습 기록하기</div>
      <TabHorizonSmall isDark={false} />
      <div className="flex flex-col gap-7 pl-5">
        <div className="flex items-center gap-7">
          <span>과목</span>
          <Dropdown
            title="정보시스템 기반 기술"
            items={['검은색 1', '검은색 2', '검은색 3', '검은색 4', '검은색 5']}
          />
        </div>
        <div className="flex items-center gap-7">
          <span>시간</span>
          <div className="flex items-center">
            <NumberInput min={0} max={23} defaultValue={0} />
            <span className="w-10 text-center">시간</span>
          </div>
          <div className="flex items-center">
            <NumberInput min={0} max={59} defaultValue={0} />
            <span className="w-10 text-center">분</span>
          </div>
        </div>
        <div className="flex gap-7">
          <span className="whitespace-nowrap">내용</span>
          <Textarea
            placeholder="오늘 학습한 내용을 기록해 주세요."
            className="h-[220px] w-[392px]"
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button className="w-[80px]" variant="outline" size="sm">
          취소
        </Button>
        <Button className="w-[80px]" variant="default" size="sm">
          작성 완료
        </Button>
      </div>
    </div>
  );
};

export default MyStudyInfoRecord;
