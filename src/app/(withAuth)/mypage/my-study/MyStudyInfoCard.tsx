import {
  IconCalendarWeek,
  IconChevronLeft,
  IconDots,
  IconHome,
} from '@tabler/icons-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Quotes from './Quotes';

const MyStudyInfoCard = () => {
  return (
    <div className="relative flex h-[276px] bg-neutral-85 px-7 py-9 desktop:rounded-6 tablet:rounded-6 mobile:h-[190px] mobile:flex-col mobile:gap-6 mobile:px-6 mobile:pb-8 mobile:pt-5">
      <div className="mobile:flex">
        <IconChevronLeft className="mt-8 size-8 text-neutral-30 mobile:m-0 mobile:size-7" />
        <IconHome className="hidden size-8 text-neutral-30 mobile:flex mobile:size-7" />
      </div>
      <div className="flex w-full flex-col gap-9 mobile:px-3">
        <div>
          <div className="text-body-medium-desktop font-[400] text-neutral-0">
            국가기술자격
          </div>
          <div className="flex mobile:items-center mobile:justify-between">
            <ul className="flex items-center gap-6 mobile:gap-4">
              <li className="text-[32px] font-[900] text-neutral-0 mobile:text-[28px]">
                TOEIC
              </li>
              <li className="text-[20px] font-[900] text-red-40 mobile:text-[18px]">
                D-24
              </li>
            </ul>
            <IconDots
              className="hidden cursor-pointer text-neutral-0 mobile:flex"
              onClick={() =>
                alert(
                  'IconDots을 누르면 학습 로드맵, 자격증 정보, 시험 주관 사이트 바로가기 기능 나옴.',
                )
              }
            />
          </div>
          <ul className="flex items-center gap-5 mobile:gap-4">
            <ul className="flex gap-5 text-body-large-desktop mobile:text-body-medium-desktop">
              <li className="font-[900] text-neutral-50">시험일</li>
              <li className="font-[400] text-neutral-0">
                2025년 1월 10일 (월)
              </li>
            </ul>
            <IconCalendarWeek className="text-neutral-0 mobile:size-6" />
          </ul>
        </div>
        <div className="flex gap-4 mobile:hidden">
          <Button variant="default" size="md" label="학습 로드맵" />
          <Button
            className="bg-neutral-70"
            variant="secondary"
            size="md"
            label="자격증 정보"
          />
          <Button
            className="bg-neutral-70"
            variant="secondary"
            size="md"
            label="시험 주관 사이트 바로가기"
          />
        </div>
      </div>
      <Quotes />
    </div>
  );
};

export default MyStudyInfoCard;
