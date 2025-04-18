'use client';

import * as React from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
  IconHexagon,
  IconHexagonFilled,
  IconHexagons,
} from '@tabler/icons-react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { HexagonCalendarProps, ClickedDate } from './types';
import { getStyles } from './styles';
import { getHexagonColor } from './utils';
import { Button } from '../ui/button';

function HexagonCalendar({
  date,
  studyInfo,
  bg,
  size,
  className,
  classNames,
  onPrevSlide,
  ...props
}: HexagonCalendarProps & { onPrevSlide?: () => void }) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [clickedDate, setClickedDate] = React.useState<ClickedDate>(null);

  const dateObjects = date.map((date) => {
    const [year, month, day] = date.split('-').map(Number);
    return new Date(year, month - 1, day);
  });

  const handlePreviousMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
    );
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
    );
    setCurrentMonth(newMonth);
  };

  const handleHexagonClick = (day: Date) => {
    const newClickedDate = {
      year: day.getFullYear(),
      month: day.getMonth() + 1,
      day: day.getDate(),
    };

    setClickedDate((prev) =>
      prev?.year === newClickedDate.year &&
      prev?.month === newClickedDate.month &&
      prev?.day === newClickedDate.day
        ? null
        : newClickedDate,
    );
  };

  const isDateClicked = (day: Date) => {
    if (!clickedDate) return false;
    return (
      clickedDate.year === day.getFullYear() &&
      clickedDate.month === day.getMonth() + 1 &&
      clickedDate.day === day.getDate()
    );
  };

  const year = currentMonth.getFullYear();
  const month = String(currentMonth.getMonth() + 1).padStart(2, '0');

  const isDark = bg === 'dark';
  const isLarge = size === 'large';

  const styles = getStyles(isDark, isLarge);

  return (
    <div className="px-7 tablet:p-0 mobile:ml-2 mobile:flex mobile:w-[314px] mobile:flex-col mobile:items-center mobile:p-0">
      <div className="mb-5 hidden w-full items-center justify-between text-[20px] mobile:flex">
        <p>이번 달 학습량</p>
        <Button
          variant={'none'}
          className="hidden size-[45px] items-center justify-center rounded-full shadow-2 mobile:flex"
          onClick={onPrevSlide}
        >
          <IconHexagons className="rotate-180" />
        </Button>
      </div>
      <DayPicker
        month={currentMonth}
        showOutsideDays={true}
        onMonthChange={setCurrentMonth}
        className={cn(
          `size-fit ${isDark ? 'bg-neutral-80' : 'bg-neutral-0'}`,
          className,
        )}
        locale={ko}
        selected={dateObjects}
        formatters={{
          formatDay: (day) => (
            <div className="relative flex flex-col items-center">
              <IconHexagonFilled
                className={`rotate-90 cursor-pointer ${getHexagonColor(day, studyInfo, isDark)}`}
                size={styles.iconSize}
                onClick={() => handleHexagonClick(day)}
              />
              {isDateClicked(day) && (
                <IconHexagon
                  className={`absolute rotate-90 cursor-pointer ${styles.hexagonBorder}`}
                  size={styles.iconSize}
                  onClick={() => handleHexagonClick(day)}
                />
              )}
              <span className={`${styles.baseTextColor} ${styles.dayTextSize}`}>
                {day.getDate()}
              </span>
            </div>
          ),
        }}
        classNames={{
          months: 'flex flex-col',
          month: 'space-y-4 justify-between',
          nav: 'space-x-1 flex items-center',
          head_row: `flex ${styles.headRowGap}`,
          head_cell: `flex justify-center items-center ${styles.headCellSize} ${styles.outsideTextColor} font-medium`,
          row: `flex w-full ${styles.headRowGap} mb-4`,
          cell: `flex justify-center items-center text-center ${styles.cellSize} ${styles.cellHeight} font-medium w-full h-fit`,
          day: `flex justify-center items-center ${isDark ? 'text-neutral-0' : 'text-neutral-85'}`,
          day_selected: '!text-primary-40',
          day_today: `${isDark ? '!text-neutral-0' : '!text-primary-50'}`,
          day_outside: `day-outside ${styles.outsideTextColor}`,
          ...classNames,
        }}
        components={{
          Caption: () => (
            <div className="mb-8 flex items-center justify-between mobile:mb-7">
              <div className="flex items-center gap-5">
                <div
                  className={`${styles.captionTextSize} ${styles.baseYearMonthColor} font-[800]`}
                >{`${year}. ${month}`}</div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert('그래서 언제로 이동하지?')}
                  label="시험일로 이동하기"
                  className="mobile:h-[35px] mobile:text-label-small-mobile"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePreviousMonth}
                  className={`size-7 ${styles.baseYearMonthColor}`}
                >
                  <IconChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className={`size-7 ${styles.baseYearMonthColor}`}
                >
                  <IconChevronRight />
                </button>
              </div>
            </div>
          ),
        }}
        {...props}
      />
    </div>
  );
}

HexagonCalendar.displayName = 'HexagonCalendar';

export { HexagonCalendar };
