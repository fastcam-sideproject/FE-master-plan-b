'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/common/PageHeader';
import { Dropdown } from '@/components/Dropdown';
import ItemCard from '@/components/ItemCard/ItemCard';
import Modal from '@/components/common/Modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767.9px)');

  const handleAddSchedule = () => {
    setIsModalOpen(true);
  };

  const router = useRouter();

  return (
    <div className="flex items-center justify-center bg-neutral-85 pb-[64px] pt-10">
      <div className="flex flex-col items-center gap-7">
        <div>
          <PageHeader
            variant="left-small"
            breadcrumbItems={breadcrumbItems}
            withTitle={false}
          />
          <ul className="flex justify-center gap-3 py-3 text-heading-medium-desktop text-neutral-0 mobile:gap-2 mobile:text-[24px]">
            <li className="text-primary-40">{'{'}</li>
            <li>웹디자인기능사</li>
            {/* 웹디자인기능사 부분은 패러미터에 따라 다르게 할 것. */}
            <li className="text-primary-40">{' }'}</li>
            <li>마스터플랜</li>
          </ul>
        </div>
        <div className="w-[1200px] text-title-medium-desktop text-neutral-0 tablet:w-[688px] mobile:w-[335px] mobile:text-body-medium-desktop">
          <Dropdown items={dropdownItems} title="학습 기간" size="sm" />
          <p className="pl-4">응시 가능한 시험 날짜예요</p>
        </div>
        <ItemCard
          type="date"
          data={ItemCardDummyData}
          onAddSchedule={handleAddSchedule}
        />
      </div>
      {isModalOpen && (
        <Modal
          type="confirm"
          variant={isMobile ? 'default' : 'secondary'}
          subtitle="웹디자인기능사"
          title1="0000. 00. 00 (월)"
          title2="시험을 일정에 추가했어요"
          message1="마이페이지 > MY 홈 > 나의 시험에서 확인할 수 있어요"
          cancelButtonLabel="돌아가기"
          confirmButtonLabel="보러가기"
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => {
            // TODO: 일정 추가 로직 구현
            // TODO: 로그인이 안 되어 있을 경우 로그인 페이지로 먼저 이동하게 할 것.
            setIsModalOpen(false);
            router.push('/mypage');
          }}
        />
      )}
    </div>
  );
};

export default Banner;
