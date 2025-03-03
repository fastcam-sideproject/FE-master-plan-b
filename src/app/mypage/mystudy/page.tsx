'use client';

import React from 'react';
import { HexagonCalendar } from '@/components/HexagonCalendar/HexagonCalendar';
import MyStudyInfoCard from './MyStudyInfoCard';
import MyStudyInfoRecord from './MyStudyInfoRecord';

const selectedDates = ['2024-03-24', '2024-03-28', '2024-04-03'];

const MyStudyPage = () => {
  return (
    <div className="w-[1208px] rounded-[30px] bg-neutral-0 p-7 shadow-2">
      <MyStudyInfoCard />
      <div className="flex justify-center gap-6 pb-9 pt-[64px]">
        <HexagonCalendar date={selectedDates} bg="light" size="large" />
        <div className="border-r border-dashed"></div>
        <MyStudyInfoRecord />
      </div>
    </div>
  );
};

export default MyStudyPage;
