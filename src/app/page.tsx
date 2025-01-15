'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
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

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h1 className="text-display-desktop md:text-display-mobile font-extrabold">제목</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">홈</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/components">하위 페이지</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="bg-neutral-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Button variant="third" size="md" disabled>
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
    </>
  );
}
