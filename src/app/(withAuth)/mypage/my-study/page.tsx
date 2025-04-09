'use client';

import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { HexagonCalendar } from '@/components/HexagonCalendar/HexagonCalendar';
import MyStudyInfoCard from './MyStudyInfoCard';
import MyStudyInfoRecord from './MyStudyInfoRecord';
import TabletMobileStudyInfoRecord from './TabletMobileStudyInfoRecord';

const recordedStudy = {
  dates: ['2025-03-03'],
  studyInfo: {
    '2025-03-03': { time: 5, minute: 50, memo: '존나 어렵다' },
  },
};

const MyStudyPage = () => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  return (
    <div className="py-[120px] mobile:w-[375px] mobile:p-0">
      <div className="w-[1208px] bg-neutral-0 p-7 shadow-2 desktop:rounded-[30px] tablet:w-[616px] tablet:rounded-[30px] mobile:w-[375px] mobile:p-0">
        <MyStudyInfoCard />
        <div className="flex justify-center gap-6 pb-9 pt-[64px] mobile:pb-9 mobile:pt-7">
          {isTablet || isMobile ? (
            <TabletMobileStudyInfoRecord recordedStudy={recordedStudy} />
          ) : (
            <>
              <HexagonCalendar
                date={recordedStudy.dates}
                studyInfo={recordedStudy.studyInfo}
                bg="light"
                size="large"
              />
              <div className="border-r border-dashed"></div>
              <MyStudyInfoRecord recordedStudy={recordedStudy} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyStudyPage;
