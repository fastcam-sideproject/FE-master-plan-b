'use client';

import React, { useState } from 'react';
import { IconHexagons, IconPencil } from '@tabler/icons-react';
import { NumberInput } from '@/components/common/NumberInput';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';
import { Dropdown } from '@/components/Dropdown';
import Textarea from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface RecordedStudy {
  dates: string[];
  studyInfo: {
    [key: string]: {
      time: number;
      minute: number;
      memo: string;
    };
  };
}

interface MyStudyInfoRecordProps {
  recordedStudy: RecordedStudy;
  onNextSlide?: () => void;
}

const MyStudyInfoRecord = ({
  recordedStudy,
  onNextSlide,
}: MyStudyInfoRecordProps) => {
  const [isRecord, setIsRecord] = useState(false);

  const handleMobileSwiperPagination = () => {
    if (onNextSlide) {
      onNextSlide();
    }
  };

  const smallTitleStyle =
    'text-body-medium-desktop text-neutral-30 font-[400] whitespace-nowrap';
  const constentFlexes = 'flex items-center gap-7 mobile:gap-4';

  return (
    <div className="tablet:flex tablet:w-full tablet:justify-center">
      <div className="flex flex-col gap-7 pl-6 tablet:w-[429px] tablet:p-0 mobile:gap-4 mobile:p-0">
        <div className="flex items-center justify-between text-title-medium-desktop mobile:text-[20px]">
          <p>학습 기록하기</p>
          <Button
            variant={'none'}
            className="hidden size-[45px] items-center justify-center rounded-full shadow-2 mobile:flex"
            onClick={handleMobileSwiperPagination}
          >
            <IconPencil />
          </Button>
        </div>
        <TabHorizonSmall isDark={false} />
        {/* horizon 버튼 사이즈 추가하거나 수정하거나 */}
        <div className="flex flex-col gap-7 pl-5 mobile:p-0">
          <div className={`${constentFlexes}`}>
            <span className={`${smallTitleStyle}`}>과목</span>
            <Dropdown
              title="정보시스템 기반 기술"
              items={[
                '검은색 1',
                '검은색 2',
                '검은색 3',
                '검은색 4',
                '검은색 5',
              ]}
            />
          </div>
          <div className={`${constentFlexes}`}>
            <span className={`${smallTitleStyle}`}>시간</span>
            <div className="flex items-center gap-3">
              <NumberInput min={0} max={23} defaultValue={0} />
              <span className="text-center">시간</span>
            </div>
            <div className="flex items-center gap-3">
              <NumberInput min={0} max={59} defaultValue={0} />
              <span className="text-center">분</span>
            </div>
          </div>
          <div className="flex gap-7 mobile:gap-4">
            <span className={`${smallTitleStyle}`}>내용</span>
            <Textarea
              placeholder="오늘 학습한 내용을 기록해 주세요."
              className="h-[220px] w-[392px] tablet:w-[361px]"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mobile:mt-3">
          <Button className="h-[46px] w-[100px]" variant="outline" size="sm">
            취소
          </Button>
          <Button className="h-[46px] w-[100px]" variant="default" size="sm">
            작성 완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyStudyInfoRecord;
