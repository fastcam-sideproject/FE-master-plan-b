import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import BookmarkButton from './BookmarkButton';
import StarRating from '../common/StarRating/StarRating';
import RegDateBadge from './RegDateBadge';
import CardContentInfo from './CardContentInfo';
import CardContentCommunity from './CardContentCommunity';
import CardContentDate from './CardContentDate';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ItemCardProps = {
  type: 'info' | 'community' | 'date';
  data: {
    examId: string;
    exam: string;
    host: string;
    bookmark: boolean;
    starRating: number;
    category?: string;
    regStartDate?: string;
    regEndDate?: string;
    examStartDate?: string;
    community?: number;
  }[];
  onAddSchedule?: () => void;
};
// todo: 태블릿, 모바일용 카드 사이즈 수정 필요
const getCardStyles = () => {
  return {
    card:
      'desktop:w-[285px] desktop:pt-[24px] desktop:p-7 ' +
      'tablet:w-[218px] tablet:pt-[21px] tablet:pr-[12px] tablet:pb-[21px] tablet:pl-[16px] ' +
      'mobile:w-[163px] mobile:pt-[19px] mobile:pr-[17px] mobile:pb-[13px] mobile:pl-[16px]',
    gap: 'desktop:gap-5 tablet:gap-3 mobile:gap-3',
    textSize:
      'desktop:text-body-xxlarge-desktop tablet:text-body-xlarge-desktop mobile:text-body-xlarge-mobile',
    hostTextSize:
      'desktop:text-body-small-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile',
  };
};

export default function ItemCard({ type, data, onAddSchedule }: ItemCardProps) {
  const { card, gap, textSize, hostTextSize } = getCardStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  if (!data || !Array.isArray(data)) {
    return null;
  }

  const getPaginationCount = () => {
    const totalSlides = data.length;
    return Math.max(1, totalSlides - slidesPerView + 1);
  };

  const renderCard = (item: ItemCardProps['data'][0]) => (
    <div
      key={item.examId}
      className={`${card} ${gap} flex cursor-pointer flex-col justify-between rounded-6 border-2 border-transparent bg-neutral-0 shadow-2 transition duration-300 hover:border-neutral-70`}
    >
      <div className="flex justify-between tablet:text-label-xsmall-desktop mobile:text-label-xsmall-desktop">
        <RegDateBadge
          start={item.regStartDate}
          end={item.regEndDate}
          type={type}
          category={item.category}
        />
        <BookmarkButton examId={item.examId} initialBookmark={item.bookmark} />
      </div>

      <div
        className={`flex h-full flex-col ${(type === 'community' || 'info') && 'justify-between'} ${type === 'date' && 'gap-4'}`}
      >
        <div className="flex flex-col">
          <StarRating size={'small'} rating={item.starRating} />
          <p className={`${textSize} text-neutral-100`}>{item.exam}</p>
          <p className={`${hostTextSize} font-[400] text-neutral-40`}>
            {item.host}
          </p>
        </div>
        {type === 'info' && (
          <div className="mb-[10px]">
            <CardContentInfo
              regStartDate={item.regStartDate || 'Default'}
              examStartDate={item.examStartDate || 'Default'}
            />
          </div>
        )}
        {type === 'community' && (
          <div className="w-full border-b border-neutral-10"></div>
        )}
        {type === 'community' && (
          <div className="mb-[10px]">
            <CardContentCommunity
              examId={item.examId}
              community={item.community || 0}
            />
          </div>
        )}
        {type === 'date' && (
          <CardContentDate
            examId={item.examId}
            regStartDate={item.regStartDate || 'Default'}
            examStartDate={item.examStartDate || 'Default'}
            onAddSchedule={onAddSchedule}
          />
        )}
      </div>
    </div>
  );

  if (type === 'date') {
    return (
      <div className="relative desktop:w-[1376px]">
        <div className="mx-auto overflow-hidden desktop:w-[1200px] tablet:w-[688px] mobile:w-[335px]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={24}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
              disabledClass: 'swiper-button-disabled',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
                navigation: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.examId}>{renderCard(item)}</SwiperSlide>
            ))}
          </Swiper>
          <div className="!swiper-pagination mt-6 flex justify-center gap-2 desktop:hidden tablet:flex mobile:flex">
            {Array.from({ length: getPaginationCount() }).map((_, index) => (
              <div
                key={index}
                className={`swiper-pagination-bullet !h-2 !w-6 !rounded-full !bg-neutral-10 ${
                  index === activeIndex ? '!opacity-100' : '!opacity-16'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="swiper-button-prev absolute -left-[40px] top-1/2 !hidden -translate-y-1/2 !text-neutral-0 desktop:!block tablet:!hidden mobile:!hidden">
          <IconChevronLeft size={48} />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 !hidden -translate-y-1/2 !text-neutral-0 desktop:!block tablet:!hidden mobile:!hidden">
          <IconChevronRight size={48} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6">
      {data.map((item) => renderCard(item))}
    </div>
  );
}
