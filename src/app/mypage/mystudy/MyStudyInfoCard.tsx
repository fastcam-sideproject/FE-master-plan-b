import { IconCalendarWeek, IconChevronLeft } from '@tabler/icons-react';
import React from 'react';
import { Button } from '@/components/ui/button';

const MyStudyInfoCard = () => {
  return (
    <div className="flex rounded-6 bg-neutral-85 p-7">
      <IconChevronLeft className="mt-8 h-8 w-8 text-neutral-30" />
      <div className="flex w-full flex-col gap-9">
        <div>
          <div className="text-body-small-desktop text-neutral-0">국가기술자격</div>
          <ul className="flex items-center gap-6">
            <li className="text-[32px] font-[900] text-neutral-0">TOEIC</li>
            <li className="text-[20px] font-[900] text-red-40">D-24</li>
          </ul>
          <ul className="flex gap-5">
            <li className="text-body-large-desktop font-[900] text-neutral-50">시험일</li>
            <li className="text-body-large-desktop text-neutral-0">2025년 1월 10일 (월)</li>
            <IconCalendarWeek className="text-neutral-0" />
          </ul>
        </div>
        <div className="flex gap-4">
          <Button>학습 로드맵</Button>
          <Button>자격증 정보</Button>
          <Button>시험 주관 사이트 바로가기</Button>
        </div>
      </div>
    </div>
  );
};

export default MyStudyInfoCard;
