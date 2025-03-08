'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarForDayInput } from './CalendarForDayInput';

// todo: 날짜 선택 기능 어떻게 추가할지 물어보기

type DayInputProps = {
  minDate?: Date; // 최소 날짜 추가
  maxDate?: Date; // 최대 날짜 추가
  onSelect?: (date: Date | undefined) => void; // onSelect prop 추가
};

const DayInput = ({ minDate, maxDate, onSelect }: DayInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
          <CalendarForDayInput
            date={selectedDate}
            size="small"
            bg="light"
            minDate={minDate}
            maxDate={maxDate}
            onSelect={(date) => {
              if (date) {
                setSelectedDate(date);
                setIsCalendarOpen(false);
                onSelect?.(date); // 부모 컴포넌트의 onSelect 호출
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DayInput;
