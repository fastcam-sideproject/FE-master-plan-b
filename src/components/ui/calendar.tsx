'use client';

import * as React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export type CalendarProps = {
  date: string[];
  bg: 'light' | 'dark';
  size: 'large' | 'small';
  className?: string;
  classNames?: Partial<Record<string, string>>;
};

function Calendar({ date, bg, size, className, classNames, ...props }: CalendarProps) {
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
  const baseTextColor = isDark ? 'text-neutral-0' : 'text-neutral-85';
  const outsideTextColor = isDark ? '!text-neutral-60' : '!text-neutral-20';
  const cellSize = isLarge
    ? 'size-9 text-body-large-desktop'
    : 'size-[30px] text-body-xsmall-desktop';
  const captionTextSize = isLarge ? 'text-body-xlarge-desktop' : 'text-body-large-desktop';
  const rowGap = isLarge ? 'gap-2' : 'gap-3';

  return (
    <DayPicker
      month={currentMonth}
      showOutsideDays={true}
      onMonthChange={setCurrentMonth}
      className={cn(`size-fit ${isDark ? 'bg-neutral-80' : 'bg-neutral-0'}`, className)}
      locale={ko}
      selected={dateObjects}
      classNames={{
        months: 'flex flex-col',
        month: 'space-y-4',
        nav: 'space-x-1 flex items-center',
        head_row: `flex w-full ${rowGap}`,
        head_cell: `size-9 flex justify-center items-center ${cellSize} ${outsideTextColor} font-medium`,
        row: `flex w-full ${rowGap}`,
        cell: `p-0 flex justify-center items-center text-center ${cellSize} font-medium`,
        day: `size-full flex justify-center items-center ${isDark ? 'text-neutral-0' : 'text-neutral-85'}`,
        day_selected: 'bg-primary-30 rounded-full !text-primary-90 font-extrabold',
        day_today: `${isDark ? 'bg-neutral-0 !text-neutral-100' : 'bg-primary-5 !text-primary-50'} rounded-full font-extrabold`,
        day_outside: `day-outside ${outsideTextColor}`,
        ...classNames,
      }}
      components={{
        Caption: () => (
          <div className="flex items-center justify-between">
            <div className={`${captionTextSize} ${baseTextColor}`}>{`${year}. ${month}`}</div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePreviousMonth}
                className={`size-7 ${baseTextColor}`}
              >
                <IconChevronLeft />
              </button>
              <button type="button" onClick={handleNextMonth} className={`size-7 ${baseTextColor}`}>
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
Calendar.displayName = 'Calendar';

export { Calendar };
