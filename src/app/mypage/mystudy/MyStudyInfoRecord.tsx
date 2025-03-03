import React from 'react';
import { NumberInput } from '@/components/common/NumberInput';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';
import { Dropdown } from '@/components/Dropdown';
import Textarea from '@/components/ui/textarea';

const MyStudyInfoRecord = () => {
  return (
    <div className="flex flex-col gap-7 pl-6">
      <div className="text-title-medium-desktop">학습 기록하기</div>
      <TabHorizonSmall isDark={false} />
      <div className="flex">
        <span>과목</span>
        <Dropdown
          title="정보시스템 기반 기술"
          items={['검은색 1', '검은색 2', '검은색 3', '검은색 4', '검은색 5']}
        />
      </div>
      <div className="flex">
        <span>시간</span>
        <div className="flex">
          <NumberInput min={0} max={23} defaultValue={0} />
          <span>시간</span>
        </div>
        <div className="flex">
          <NumberInput min={0} max={59} defaultValue={0} />
          <span>분</span>
        </div>
      </div>
      <div className="flex">
        <span>내용</span>
        <Textarea />
      </div>
    </div>
  );
};

export default MyStudyInfoRecord;
