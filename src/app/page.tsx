'use client';

import { useState } from 'react';
import { IconAccessible } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Category from '@/components/Category/Category';

import { CertificateTable } from '@/lib/common/CertificateTable';
import SearchBar from '@/components/SearchBar/SearchBar';
import Chip from '@/components/Chip/Chip';
import StarRating from '@/lib/common/StarRating/StarRating';
import { NumberPagination } from '@/lib/common/Pagination';
import { NumberInput } from '@/lib/common/NumberInput';
import { PageHeader } from '@/lib/common/PageHeader';
import { ContentsHeader } from '@/lib/common/ContentsHeader';
import SideBarMyHome from '@/components/SideBar/SideBarMyHome';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';
import BarGraph from '@/components/DashBoard/BarGraph';
import LearningTimeGraph from '@/components/DashBoard/LearningTimeGraph';
import DonutGraph from '@/components/DashBoard/DonutGraph';

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

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '하위 페이지', href: '#' },
  ];

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">하위 페이지</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="bg-neutral-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Button variant="third" size="md" disabled className="w-6 text-neutral-85">
          비활성화 버튼
        </Button>
        <Button
          variant="third"
          size="md"
          className="text-body-large-desktop font-[400] w-[26px] h-[26px] p-2 text-center border-none overflow-hidden border-neutral-10 bg-neutral-0 text-neutral-85"
        >
          활성화 버튼
        </Button>
      </main>
      <NumberPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
      <CertificateTable />
      <div className="w-px h-6 bg-neutral-30" />
      <Category />
      <SearchBar type="main" />
      <SearchBar type="default" />
      <Chip size="large" keyword="테스트" selected={false} disabled />
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
      <PageHeader title="Page Heading" breadcrumbItems={breadcrumbItems} variant="left-small" />
      <ContentsHeader
        size="large"
        title="Main Title"
        description="Detail Text"
        icon={<IconAccessible />}
      />
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
    </>
  );
}
