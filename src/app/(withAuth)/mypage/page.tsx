'use client';

import TabHorizonMedium from '@/components/common/Tab/TabHorizonMedium';
import StudyCard from '@/components/StudyCard/StudyCard';
import StudyCardList from '@/components/StudyCard/StudyCardList';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

const selectedDatesAndExams = [
  { title: 'TOEIC 시험', date: '2025년 12월 24일' },
  { title: '정보처리산업기사 시험', date: '2025년 01월 28일' },
  { title: '정보처리산업기사 시험', date: '2025년 02월 03일' },
];
const selectedDates = ['2025-01-24', '2025-01-28', '2025-02-03'];

const tabButtonProps = [
  {
    innerText: '안녕하세요',
    buttonLink: '/',
  },
  {
    innerText: '안녕',
    buttonLink: '/',
  },
];

const dummyStudyData = [
  {
    id: 1,
    title: 'TOEIC',
    daysRemaining: 10,
    progress: 5,
  },
  {
    id: 2,
    title: 'JLPT N2',
    daysRemaining: 20,
    progress: 3,
  },
  {
    id: 3,
    title: '정보처리기사',
    daysRemaining: 15,
    progress: 6,
  },
  {
    id: 4,
    title: '정보처리기사',
    daysRemaining: 15,
    progress: 6,
  },
  {
    id: 5,
    title: '정보처리기사',
    daysRemaining: 15,
    progress: 6,
  },
];

export default function MypagePage() {
  return (
    <div className="flex w-[1280px] flex-col justify-start gap-9 px-9 py-[120px]">
      <h1 className="text-heading-small-desktop text-neutral-80">나의 시험</h1>
      <TabHorizonMedium isDark={false} />
      <div className="flex items-center gap-10">
        <StudyCardList studyData={dummyStudyData} />
        <div>
          <Button
            variant="secondary"
            className="h-[141px] w-[154px] rounded-6"
            label="시험 등록하기"
          />
        </div>
      </div>
      <div className="flex w-full gap-9 rounded-6 bg-neutral-0 p-10">
        <Calendar date={selectedDates} bg={'light'} size={'small'} />
        <div className="border border-r-0 border-neutral-10"></div>
        <div className="flex flex-col gap-6 pt-4">
          <ul className="text-body-large-desktop text-neutral-40">일정</ul>
          {selectedDatesAndExams.map((item, index) => (
            <ul
              key={index}
              className="flex items-center gap-7 text-body-medium-desktop text-neutral-85"
            >
              <li className="flex w-[160px] items-center gap-3 font-[700]">
                <p className="h-6 w-6 rounded-[5px] bg-primary-40"></p>
                {item.date}
              </li>
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
