import React from 'react';
import {
  IconBook2,
  IconBookmark,
  IconChevronLeft,
  IconEye,
  IconFile,
  IconHome,
  IconSearch,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import StarRating from '@/components/common/StarRating/StarRating';

// hidden으로 기본적으로 아이콘들을 숨기고
// mobile:flex로 모바일 크기(767.9px 이하)에서만 아이콘들이 보이도록 설정했습니다.
// 이렇게 하면 모바일 화면에서만 아이콘들이 표시되고, 태블릿과 데스크톱 화면에서는 숨겨집니다.
// todo: api 연결 시 텍스트 교체할 것.
// todo: mobile일 때 자격증 제목 글씨 크기 등 세부 요소 uxui 팀에 물어볼 것. 현재 피그마의 기록과 글씨 크기가 맞지 않음.

interface examTitleProps {
  title: string;
  category: string;
  certificationType: string;
  authority: string;
  difficulty: number;
  participantCount: number;
}

const ExamTitle = (data: examTitleProps) => {
  const router = useRouter();

  return (
    <div className="mobile-pb-8 flex flex-col gap-9 rounded-7 bg-neutral-85 p-10 tablet:rounded-none mobile:gap-4 mobile:rounded-none mobile:px-6 mobile:pt-5">
      <div className="hidden gap-3 text-[24px] text-neutral-30 mobile:flex">
        <button onClick={() => router.back()} className="cursor-pointer">
          <IconChevronLeft />
        </button>
        <Link href="/">
          <IconHome />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-2">
          <li className="text-body-medium-desktop text-neutral-30">
            {data.certificationType} / (주관사)
          </li>
          <li className="flex items-end gap-4">
            <h1 className="text-heading-small-desktop text-neutral-0">{data.title}</h1>
            <p className="h-fit rounded-10 bg-primary-80 px-5 py-3 text-primary-40 mobile:px-4 mobile:py-2 mobile:text-label-small-desktop">
              평균 n개월 학습
            </p>
          </li>
        </ul>
        <div className="flex justify-between">
          <ul>
            <p className="flex items-center gap-3">
              <span className="text-body-small-desktop text-neutral-0">난이도</span>
              <span className="hidden desktop:flex tablet:flex">
                <StarRating size="large" rating={data.difficulty} />
              </span>
              <span className="hidden mobile:flex">
                <StarRating size="small" rating={data.difficulty} />
              </span>
            </p>
          </ul>
          <ul className="flex gap-6 text-body-xsmall-desktop text-neutral-30">
            <li className="flex items-center gap-2">
              <IconEye className="mobile:h-5 mobile:w-5" />
              <p>{data.participantCount}</p>
            </li>
            <li className="flex items-center gap-2">
              <IconBookmark className="mobile:h-5 mobile:w-5" />
              <p>12,345</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-6">
        <Link href="/">
          <button className="flex h-[98px] w-[111px] flex-col items-center justify-center gap-2 rounded-5 bg-primary-40 text-label-small-desktop text-neutral-85 mobile:h-[90px]">
            <IconBook2 className="h-8 w-8" />
            <span>마스터플랜</span>
          </button>
        </Link>
        <div
          className="box-border flex h-[98px] w-[210px] items-center rounded-5 border border-neutral-30 text-label-small-desktop text-neutral-0 mobile:h-[90px]"
          style={{
            background:
              'radial-gradient(59.53% 59.53% at 12.86% 22.03%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(66, 66, 66, 0.8)',
          }}
        >
          <Link href="/" className="h-full w-full">
            <button className="flex h-full w-full flex-col items-center justify-center gap-2">
              <IconFile className="h-8 w-8" />
              <span>접수하기</span>
            </button>
          </Link>
          <div className="h-[42.21px] border border-r border-neutral-60"></div>
          <Link href="/" className="h-full w-full">
            <button className="flex h-full w-full flex-col items-center justify-center gap-2">
              <IconSearch className="h-8 w-8" />
              <span>합격자 조회</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamTitle;
