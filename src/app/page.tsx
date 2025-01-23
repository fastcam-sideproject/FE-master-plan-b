'use client';

import { IconAccessible } from '@tabler/icons-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Category from '@/components/Category/Category';
import { CertificateTable } from '@/components/CertificateTable';
import SearchBar from '@/components/SearchBar/SearchBar';
import Chip from '@/components/Chip/Chip';
import StarRating from '@/components/common/StarRating/StarRating';
import { NumberInput } from '@/components/common/NumberInput';
import { ContentsHeader } from '@/components/common/ContentsHeader';
import SideBarMyHome from '@/components/SideBar/SideBarMyHome';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';
import BarGraph from '@/components/DashBoard/BarGraph';
import LearningTimeGraph from '@/components/DashBoard/LearningTimeGraph';
import DonutGraph from '@/components/DashBoard/DonutGraph';
import BtnOnboarding from '@/components/Onboarding/BtnOnboarding';
import { Avatar } from '@/components/common/Avatar';
import StudyCard from '@/components/StudyCard/StudyCard';
import { ItemList } from '@/components/ItemList';
import { Dropdown } from '@/components/Dropdown';
import { Calendar } from '@/components/ui/calendar';

const difBarGraphData = [
  { label: '쉬워요', value: 30 },
  { label: '보통이에요', value: 95 },
  { label: '어려워요', value: 90 },
];
const methodBarGraphData = [
  { label: '책', value: 30 },
  { label: '인터넷강의', value: 10 },
  { label: '유튜브', value: 90 },
];
const learningTimeGraphData = [
  { label: '과목1', value: 20 },
  { label: '과목2', value: 10 },
  { label: '과목3', value: 25 },
  { label: '과목4', value: 15 },
  { label: '과목5', value: 40 },
];
const reflectionData = [
  { label: '미반영', value: 70 },
  { label: '일부 반영', value: 10 },
  { label: '적극 반영', value: 20 },
];
const timeData = [
  { label: '부족했어요', value: 30 },
  { label: '적절했어요', value: 40 },
  { label: '여유로웠어요', value: 30 },
];
const selectedDates = ['2025-01-24', '2025-01-28', '2025-02-03'];
export default function Home() {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '하위 페이지', href: '#' },
  ];
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <main className="bg-neutral-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Category />
      </main>
      <CertificateTable />
      <Dropdown
        items={['검은색 1', '검은색 2', '검은색 3', '검은색 4', '검은색 5']}
        size="w-[165px]"
        color="bg-neutral-90"
      />
      <Dropdown items={['흰색 1', '흰색 2', '흰색 3', '흰색 4', '흰색 5']} />
      <div className="w-px h-6 bg-neutral-30" />
      <Avatar size="xl" src="/icons/gnb/user-filled.svg" alt="asdsa" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="lg" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="md" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="sm" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="" size="xs" />
      <ItemList
        title="필기시험은 기출문제 무조건 반복하세요"
        labels={['멜딕기관기능사', '정호안', '2024.12.03']}
        tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
        content="기출문제만 잘 활용해도 필기시험의 반은 준비된 거나 다름없습니다. 저는 최근 5년간의 기출문제를 풀어본 후, 틀린 문제들을 모아 다시 복습하면서 약점을 보완했어요. 필기시험을 대비할 때 가장 중요한 건 기출문제를 정복하는 거예요. 저는 5년 치 기출문제를 풀어본 후, 틀린 문제들을 따로 정리하고 반복해서 공부했더니 효과가 좋았어요."
        initialLikes={10}
        writtenDifficulty="보통"
        practicalDifficulty="어려움"
        writtenStudy="인터넷 강의"
        practicalStudy="인터넷 강의"
      />
      <div className="w-px h-6 bg-neutral-30 " />
      <Category />
      <SearchBar type="main" />
      <SearchBar type="default" />
      <Chip size="large" keyword="테스트" selected={false} disabled />
      <Chip size="small" keyword="테스트" selected={false} disabled />
      <Chip size="xsmall" keyword="테스트" selected={false} disabled />
      <StarRating size="large" rating={1} />
      <StarRating size="large" rating={2} />
      <StarRating size="large" rating={3} />
      <StarRating size="large" rating={4} />
      <StarRating size="large" rating={5} />
      <StarRating size="small" rating={1} />
      <StarRating size="small" rating={2} />
      <StarRating size="small" rating={3} />
      <StarRating size="small" rating={4} />
      <StarRating size="small" rating={5} />
      <NumberInput min={0} max={100} defaultValue={0} />
      <ContentsHeader
        size="large"
        title="Main Title"
        description="Detail Text"
        icon={<IconAccessible />}
      />
      <Button variant="secondary" size="lg" className="font-medium">
        라지 박스
      </Button>
      <Button variant="secondary" size="md" className="text-neutral-80 ga">
        미디움 박스
      </Button>
      <Button variant="secondary" size="sm" className="text-neutral-80">
        스몰 박스
      </Button>
      <Button variant="default" size="sm">
        Default Box
      </Button>
      <SideBarMyHome />
      <SideBarFavoriteCertifications />
      <LearningTimeGraph data={learningTimeGraphData} />
      <div className="flex flex-col gap-6 ">
        <div className="flex gap-6">
          <BarGraph type={'difficulty'} data={difBarGraphData} />
          <BarGraph type={'method'} data={methodBarGraphData} />
        </div>
        <div className="flex gap-6">
          <DonutGraph type={'reflection'} data={reflectionData} />
          <DonutGraph type={'time'} data={timeData} />
        </div>
      </div>
      <div className="flex gap-9">
        <BtnOnboarding type={'general'} size={'large'} />
        <BtnOnboarding type={'general'} size={'medium'} />
        <BtnOnboarding type={'specific'} size={'large'} />
        <BtnOnboarding type={'specific'} size={'medium'} />
      </div>
      <StudyCard />
      <div className="flex gap-3">
        <Calendar date={selectedDates} bg={'light'} size={'large'} />
        <Calendar date={selectedDates} bg={'dark'} size={'large'} />
      </div>
      <div className="flex gap-3">
        <Calendar date={selectedDates} bg={'light'} size={'small'} />
        <Calendar date={selectedDates} bg={'dark'} size={'small'} />
      </div>
    </>
  );
}
