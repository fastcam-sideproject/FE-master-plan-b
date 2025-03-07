'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar } from '../ui/calendar';

// todo: 날짜 선택 기능 어떻게 추가할지 물어보기

const DayInput = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCalendarOpen]);

  const calendarOpen = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDateToString = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
  };

  return (
    <div className="relative" ref={calendarRef}>
      <button
        className="flex h-[50px] w-[245px] items-center rounded-4 border border-neutral-20 bg-neutral-0 px-5 py-4 text-body-medium-desktop font-[400]"
        onClick={calendarOpen}
      >
        <span className="w-full">{format(selectedDate, 'yyyy년 MM월 dd일', { locale: ko })}</span>
        <IconCalendarWeek className="!h-[24px] !w-[24px] text-neutral-20" />
      </button>
      {isCalendarOpen && (
        <div className="absolute top-[54px] z-10 h-fit w-fit rounded-4 bg-neutral-0 p-4 shadow-2">
          <Calendar
            date={[formatDateToString(selectedDate)]}
            size="small"
            bg="light"
            // onSelect={(date: Date | undefined) => {
            //   if (date) {
            //     setSelectedDate(date);
            //     setIsCalendarOpen(false);
            //   }
            // }}
          />
        </div>
      )}
    </div>
  );
};

export default DayInput;
