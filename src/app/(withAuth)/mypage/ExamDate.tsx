import React from 'react';
import { Calendar } from '@/components/ui/calendar';

interface ExamDateProps {
  selectedDatesAndExams: Array<{
    date: string;
    title: string;
  }>;
  selectedDates?: string[];
}

const ExamDate = ({
  selectedDatesAndExams = [],
  selectedDates = [],
}: ExamDateProps) => {
  return (
    <div className="flex w-full gap-9 rounded-6 bg-neutral-0 p-10 tablet:gap-7 tablet:px-8">
      <Calendar date={selectedDates} bg={'light'} size={'small'} />
      <div className="border border-r-0 border-neutral-10"></div>
      <div className="flex flex-col gap-6">
        <ul className="text-body-large-desktop text-neutral-40">일정</ul>
        <div className="flex flex-col gap-3">
          {selectedDatesAndExams.map((item, index) => (
            <ul
              key={index}
              className="flex items-center gap-7 text-body-medium-desktop text-neutral-85 tablet:flex-col tablet:items-start tablet:gap-0"
            >
              <li className="flex w-[160px] items-center gap-3 font-[700]">
                <p className="h-6 w-6 rounded-[5px] bg-primary-40"></p>
                {item.date}
              </li>
              <li className="font-[400]">{item.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamDate;
