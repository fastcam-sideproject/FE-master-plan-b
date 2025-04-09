'use client';

import { useRouter } from 'next/navigation';
import { IconVocabulary } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import TabHorizonMedium from '@/components/common/Tab/TabHorizonMedium';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';
import StudyCardList from '@/components/StudyCard/StudyCardList';
import ExamDate from './ExamDate';
import ExamDateMobile from './ExamDateMobile';

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
  const router = useRouter();

  const handleMoveExamRegit = () => {
    alert('여기에 링크 또는 라우터 넣기');
    router.push('/');
  };

  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  const handleRouteStudyLog = () => {
    router.push('/mypage/my-study');
  };

  return (
    <div className="flex w-[1280px] flex-col justify-start gap-9 px-9 py-[120px] tablet:w-[696px] tablet:py-[80px] mobile:w-[375px] mobile:px-6 mobile:py-9">
      <div className="flex flex-col gap-9 mobile:gap-6">
        <h1 className="text-heading-small-desktop text-neutral-80">
          나의 시험
        </h1>
        <div className="flex items-center justify-between">
          {isMobile ? (
            <TabHorizonSmall isDark={true} />
          ) : (
            <TabHorizonMedium isDark={true} />
          )}
          <Button
            variant="secondary"
            size={isMobile ? 'md' : 'lg'}
            withIcon
            icon={<IconVocabulary />}
            className={`${isTablet || isMobile ? 'h-[46px] w-[153px]' : 'hidden'}`}
            label="시험 등록하기"
            onClick={handleMoveExamRegit}
          />
        </div>
        <div className="flex items-center gap-10">
          <StudyCardList
            studyData={dummyStudyData}
            onClickRecord={handleRouteStudyLog}
          />
          <Button
            variant="secondary"
            size={'lg'}
            className={`${isTablet || isMobile ? 'hidden' : ''} h-[141px] w-[154px] rounded-6`}
            label="시험 등록하기"
            onClick={handleMoveExamRegit}
          />
        </div>
      </div>
      {isMobile ? (
        <ExamDateMobile
          selectedDatesAndExams={selectedDatesAndExams}
          selectedDates={selectedDates}
        />
      ) : (
        <ExamDate
          selectedDatesAndExams={selectedDatesAndExams}
          selectedDates={selectedDates}
        />
      )}
    </div>
  );
}
