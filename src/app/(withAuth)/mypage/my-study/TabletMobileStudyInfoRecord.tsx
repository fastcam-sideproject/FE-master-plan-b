'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { HexagonCalendar } from '@/components/HexagonCalendar/HexagonCalendar';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MyStudyInfoRecord from './MyStudyInfoRecord';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RecordedStudy {
  dates: string[];
  studyInfo: {
    [key: string]: {
      time: number;
      minute: number;
      memo: string;
    };
  };
}

const TabletMobileStudyInfoRecord = ({
  recordedStudy,
}: {
  recordedStudy: RecordedStudy;
}) => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');

  const swiperRef = useRef<SwiperType | null>(null);

  // 슬라이드 이동 핸들러
  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  if (!recordedStudy || !recordedStudy.dates) {
    return null;
  }

  return (
    <div className="flex overflow-hidden tablet:w-[435px] mobile:w-[375px] mobile:px-7">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: function (index, className) {
            return `<span class="${className} !bg-neutral-50"></span>`;
          },
        }}
        // 스와이퍼의 크기, 스와이퍼 불릿의 스타일
        // 날짜 셀의 개수에 따라 높이를 조절하는 기능이 있나?
        className="h-[640px] mobile:h-[558px] [&_.swiper-pagination-bullet-active]:!bg-neutral-85 mobile:[&_.swiper-pagination-bullet]:hidden"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <MyStudyInfoRecord
            recordedStudy={recordedStudy}
            onNextSlide={handleSlideNext}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HexagonCalendar
            date={recordedStudy.dates}
            studyInfo={recordedStudy.studyInfo}
            bg="light"
            size={isMobile ? 'small' : 'large'}
            onPrevSlide={handleSlidePrev}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TabletMobileStudyInfoRecord;
