'use client';

import React from 'react';
import Link from 'next/link';
import search from '@/api/search/search';
import { Pagination } from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';
import Category from '@/components/Category/Category';
import { Dropdown } from '@/components/Dropdown';
import ItemCard from '@/components/ItemCard/ItemCard';

// 검색 api: /api/v1/exam?page={page}&size={size}&sort={sort}
// 이동 경로: /api/v1/exam/{exam-id}

const ItemCardDummyData = {
  examId: '1',
  exam: '정보처리기사',
  host: '국가기술자격',
  bookmark: false,
  starRating: 4,
  category: '정보통신',
  regStartDate: '2025-01-22',
  regEndDate: '2025-02-28',
  examStartDate: '2025-02-28',
};

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
  return (
    <div>
      <div>자격증 정보 검색</div>
      {/* <Link href={`/certification-detail/${examId}`}>상세 페이지</Link> */}
      <Pagination />
      <Input placeholder="원하는 자격증을 검색해 보세요" />
      <hr />
      <Category />
      <ItemCard type={'info'} data={ItemCardDummyData} />
      <Dropdown items={certificationTypes} title="자격증 종류" />
    </div>
  );
};

export default CertificationInfoPage;
