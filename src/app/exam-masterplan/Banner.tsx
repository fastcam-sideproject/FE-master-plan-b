'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { PageHeader } from '@/components/common/PageHeader';
import { Dropdown } from '@/components/Dropdown';
import ItemCard from '@/components/ItemCard/ItemCard';

const breadcrumbItems = [
  { label: '홈', href: '/' },
  { label: '웹디자인기능사', href: '/mypage' },
  { label: '마스터플랜', href: '/exam-masterplan' },
];

const dropdownItems = [
  '1개월 이내',
  '1-3개월',
  '3-6개월',
  '6-12개월',
  '12개월 이상',
];

const ItemCardDummyData = [
  {
    examId: '1',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '2',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '3',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '4',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '5',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '6',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
  {
    examId: '7',
    exam: '정보처리기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
];

// todo: 마스터플랜 페이지는 [] 적용으로 패러미터 값을 줘서 각 자격증에 맞는 마스터플랜 페이지에 접속할 수 있게 해야 함.

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-85 pb-[64px] pt-10">
      <div className="flex flex-col items-center gap-7">
        <div>
          <PageHeader
            variant="left-small"
            breadcrumbItems={breadcrumbItems}
            withTitle={false}
          />
          <ul className="flex justify-center gap-3 py-3 text-heading-medium-desktop text-neutral-0">
            <li className="text-primary-40">{'{'}</li>
            <li>웹디자인기능사</li>
            {/* 웹디자인기능사 부분은 패러미터에 따라 다르게 할 것. */}
            <li className="text-primary-40">{' }'}</li>
            <li>마스터플랜</li>
          </ul>
        </div>
        <div className="w-[1200px] text-title-medium-desktop text-neutral-0">
          <Dropdown
            items={dropdownItems}
            title="학습 기간"
            color="bg-neutral-90"
            size="sm"
          />
          <p className="pl-4">응시 가능한 시험 날짜예요</p>
        </div>
        <ItemCard type="date" data={ItemCardDummyData} />
      </div>
    </div>
  );
};

export default Banner;
