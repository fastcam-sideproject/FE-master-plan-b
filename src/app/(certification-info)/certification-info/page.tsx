'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import search from '@/api/search/search';
import Category from '@/components/Category/Category';
import { Dropdown } from '@/components/Dropdown';
import ItemCard from '@/components/ItemCard/ItemCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import { NumberPagination } from '@/components/common/Pagination';

// todo: 검색 api: /api/v1/exam?page={page}&size={size}&sort={sort}
// todo: 이동 경로: /api/v1/exam/{exam-id}
// todo: 검색 결과 및 순서 분류를 다른 컴포넌트로 제작할지 고민 예정
// todo: dropdown 옵션 확인하고 고칠 수 있다면 고칠 것.

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
    exam: '뭐시기뭐시기 기사',
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
    exam: '뭐시기뭐시기 기사',
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
    exam: '뭐시기뭐시기 기사',
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
    exam: '뭐시기뭐시기 기사',
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
    exam: '뭐시기뭐시기 기사',
    host: '국가기술자격',
    bookmark: false,
    starRating: 4,
    category: '정보통신',
    regStartDate: '2025-01-22',
    regEndDate: '2025-02-28',
    examStartDate: '2025-02-28',
  },
];

const certificationTypes = [
  '정보처리기사',
  '정보보안기사',
  '빅데이터분석기사',
  '컴퓨터활용능력',
  'SQLD',
  'AWS',
  'AZURE',
];

const CertificationInfoPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const [sortSelect, setSortSelect] = useState('전체');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortSelect = (value: string) => {
    setSortSelect(value);
    alert(value);
  };

  return (
    <div className="desktop:w-[1200px] desktop:pt-[80px] desktop:pb-[120px] m-auto flex flex-col gap-[80px] relative">
      <div className="flex flex-col gap-10 items-center">
        <div className="text-heading-small-desktop">자격증 정보 검색</div>
        <SearchBar type="default" variant="secondary" />
        <hr className="border border-neutral-30" />
        <Category />
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex">
          <Dropdown items={certificationTypes} title="자격증 종류" />
          <Dropdown items={certificationTypes} title="일정 상태" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-body-xsmall-desktop text-neutral-50 flex items-center justify-between">
            <ul className="flex gap-2">
              <li>검색 결과</li>
              <li>n건</li>
            </ul>
            <ul className="flex items-center">
              <li className="p-3 cursor-pointer" onClick={() => handleSortSelect('전체')}>
                전체
              </li>
              <li className="border-spacing-0 border-l border-neutral-20 h-[20px]"></li>
              <li className="p-3 cursor-pointer" onClick={() => handleSortSelect('조회순')}>
                조회순
              </li>
              <li className="border-spacing-0 border-l border-neutral-20 h-[20px]"></li>
              <li className="p-3 cursor-pointer" onClick={() => handleSortSelect('시험일정순')}>
                시험일정순
              </li>
              <li className="border-spacing-0 border-l border-neutral-20 h-[20px]"></li>
              <li className="p-3 cursor-pointer" onClick={() => handleSortSelect('난이도순')}>
                난이도순
              </li>
            </ul>
          </div>
          <div className="grid desktop:grid-cols-4 gap-6">
            {ItemCardDummyData.map((item, index) => (
              // <Link href={`/certification-detail/${examId}`}>
              <ItemCard key={index} type={'info'} data={item} />
              // </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <NumberPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="custom-class"
        />
      </div>
      <Image
        src="/images/character/web/CertificationInfoBackground.png"
        alt="자격증 정보 배경 이미지"
        width={1200}
        height={0}
        className="absolute bottom-0 right-0 -z-10 w-full h-auto"
      />
    </div>
  );
};

export default CertificationInfoPage;
