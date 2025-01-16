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
    </>
  );
}
