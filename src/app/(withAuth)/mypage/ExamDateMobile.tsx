import React from 'react';
import { Calendar } from '@/components/ui/calendar';

interface ExamDateMobileProps {
  selectedDatesAndExams: Array<{
    date: string;
    title: string;
  }>;
  selectedDates?: string[];
}

const ExamDateMobile = ({
  selectedDatesAndExams = [],
  selectedDates = [],
}: ExamDateMobileProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 rounded-6 bg-neutral-0 px-7 py-6">
        <ul className="text-body-medium-desktop font-[400] text-neutral-40">
          일정
        </ul>
        <div className="flex flex-col gap-3">
          {selectedDatesAndExams.map((item, index) => (
            <ul
              key={index}
              className="text-body-medium-desktop text-neutral-85"
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
      <div className="flex items-center justify-center rounded-6 bg-neutral-0 px-8 pb-8 pt-9">
        <Calendar date={selectedDates} bg={'light'} size={'small'} />
      </div>
    </div>
  );
};

export default ExamDateMobile;
