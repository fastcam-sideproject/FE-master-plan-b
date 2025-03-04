'use client';

import React from 'react';
import { HexagonCalendar } from '@/components/HexagonCalendar/HexagonCalendar';
import MyStudyInfoCard from './MyStudyInfoCard';
import MyStudyInfoRecord from './MyStudyInfoRecord';

const recordedStudy = {
  dates: ['2025-03-03'],
  studyInfo: {
    '2025-03-03': { time: 5, minute: 50, memo: '존나 어렵다' },
  },
};

const MyStudyPage = () => {
  return (
    <div className="w-[1208px] rounded-[30px] bg-neutral-0 p-7 shadow-2">
      <MyStudyInfoCard />
      <div className="flex justify-center gap-6 pb-9 pt-[64px]">
        <HexagonCalendar
          date={recordedStudy.dates}
          studyInfo={recordedStudy.studyInfo}
          bg="light"
          size="large"
        />
        <div className="border-r border-dashed"></div>
        <MyStudyInfoRecord />
      </div>
    </div>
  );
};

export default MyStudyPage;
