'use client';

import * as React from 'react';
import { IconChevronLeft, IconChevronRight, IconHexagonFilled } from '@tabler/icons-react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export type HexagonCalendarProps = {
  date: string[];
  bg: 'light' | 'dark';
  size: 'large' | 'small';
  className?: string;
  classNames?: Partial<Record<string, string>>;
};

function HexagonCalendar({
  date,
  bg,
  size,
  className,
  classNames,
  ...props
}: HexagonCalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const dateObjects = date.map((date) => {
    const [year, month, day] = date.split('-').map(Number);
    return new Date(year, month - 1, day);
  });

  const handlePreviousMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const year = currentMonth.getFullYear();
  const month = String(currentMonth.getMonth() + 1).padStart(2, '0');

  const isDark = bg === 'dark';

  const isLarge = size === 'large';

  const baseTextColor = isDark ? 'text-neutral-0' : 'text-neutral-30';
  const baseYearMonthColor = isDark ? 'text-neutral-0' : 'text-neutral-85';
  const outsideTextColor = isDark ? '!text-neutral-60' : '!text-neutral-20';
  const cellSize = isLarge
    ? 'size-9 text-body-medium-desktop'
    : 'size-[30px] text-body-xsmall-desktop';
  const headCellSize = isLarge
    ? 'size-9 text-body-medium-desktop mb-4'
    : 'size-[30px] text-body-xsmall-desktop';
  const cellHeight = isLarge ? 'h-[69px]' : 'h-[56px]';
  const captionTextSize = isLarge ? 'text-title-medium-desktop' : 'text-body-large-desktop';
  const rowGap = isLarge ? 'gap-6' : 'gap-3';
  const iconSize = isLarge ? 45 : 30;
  const dayTextSize = isLarge
    ? 'text-body-medium-desktop text-neutral-30'
    : 'text-body-medium-desktop';

  return (
    <DayPicker
      month={currentMonth}
      showOutsideDays={true}
      onMonthChange={setCurrentMonth}
      className={cn(`size-fit ${isDark ? 'bg-neutral-80' : 'bg-neutral-0'}`, className)}
      locale={ko}
      selected={dateObjects}
      formatters={{
        formatDay: (day) => (
          <div className="flex flex-col items-center">
            <IconHexagonFilled
              className={`rotate-90 cursor-pointer ${isDark ? 'text-neutral-60' : 'text-neutral-5'}`}
              size={iconSize}
              onClick={() => alert(`여기에 ${day.getDate()} 모달창 출력`)}
            />
            <span className={`${baseTextColor} ${dayTextSize}`}>{day.getDate()}</span>
          </div>
        ),
      }}
      classNames={{
        months: 'flex flex-col',
        month: 'space-y-4',
        nav: 'space-x-1 flex items-center',
        head_row: `flex w-full ${rowGap}`,
        head_cell: `flex justify-center items-center ${headCellSize} ${outsideTextColor} font-medium`,
        row: `flex w-full ${rowGap} mb-4`,
        cell: `p-0 flex justify-center items-center text-center ${cellSize} ${cellHeight} font-medium`,
        day: `size-full flex justify-center items-center ${isDark ? 'text-neutral-0' : 'text-neutral-85'}`,
        day_selected: '!text-primary-40',
        day_today: `${isDark ? '!text-neutral-0' : '!text-primary-50'}`,
        day_outside: `day-outside ${outsideTextColor}`,
        ...classNames,
      }}
      components={{
        Caption: () => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div
                className={`${captionTextSize} ${baseYearMonthColor}`}
              >{`${year}. ${month}`}</div>
              <button
                className="box-border rounded-4 border border-neutral-20 px-5 py-3 text-label-small-desktop"
                onClick={() => alert('그래서 언제로 이동하지?')}
              >
                시험일로 이동하기
              </button>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePreviousMonth}
                className={`size-7 ${baseYearMonthColor}`}
              >
                <IconChevronLeft />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className={`size-7 ${baseYearMonthColor}`}
              >
                <IconChevronRight />
              </button>
            </div>
          </div>
        ),
      }}
      {...props}
    />
  );
}
HexagonCalendar.displayName = 'HexagonCalendar';

export { HexagonCalendar };
