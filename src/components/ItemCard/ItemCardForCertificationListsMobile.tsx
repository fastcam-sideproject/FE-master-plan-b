'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IconDots, IconHexagons, IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MyCertificationListProps {
  data: {
    name: string;
    organization: string;
    date: string;
    expire: string;
    score: string;
    certificationNumber: string;
  }[];
}

const ItemCardForCertificationListsMobile = ({
  data,
}: MyCertificationListProps) => {
  const router = useRouter();

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleModalOpen = () => {
    setActiveModal('certification-registration');
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const handleCertificationRegistration = () => {
    confirm('테스트');
  };
  const handleCertificationReview = (name: string) => {
    confirm(`${name} 후기 입력하기?`);
    router.push('/certification-review');
  };
  const handleCertificationEdit = (name: string) => {
    confirm(`${name} 수정?`);
  };
  const handleCertificationDelete = (name: string) => {
    confirm(`${name} 삭제?`);
  };

  return (
    <div className="flex justify-center bg-red-10 px-6 py-9">
      <div className="flex w-[335px] flex-col gap-6">
        <div className="flex w-full items-center justify-between">
          <ul className="flex">
            <IconHexagons className="size-6 rotate-180" />
            <li className="text-title-small-desktop">내 자격증</li>
          </ul>
          <ul
            className="flex cursor-pointer items-center gap-0"
            onClick={handleModalOpen}
          >
            <li className="p-3 text-label-small-desktop text-blue-40">
              자격증 등록하기
            </li>
            <IconPlus className="size-5 text-blue-40" />
          </ul>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
        >
          {Array.from({ length: Math.ceil(data.length / 6) }).map(
            (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid w-[335px] grid-cols-2 grid-rows-3 gap-3">
                  {data
                    .slice(slideIndex * 6, (slideIndex + 1) * 6)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex h-[179px] w-[163px] flex-col gap-3 rounded-6 bg-neutral-0 p-5 shadow-3"
                      >
                        <ul className="flex justify-between">
                          <li className="flex h-[20px] items-center justify-center rounded-4 bg-neutral-85 px-3 text-label-xsmall-desktop text-primary-40">
                            {item.score}
                          </li>
                          <IconDots size={20} className="text-neutral-20" />
                        </ul>
                        <div className="flex h-full flex-col justify-between text-body-xsmall-desktop font-[400]">
                          <ul>
                            <li className="text-body-large-desktop">
                              {item.name}
                            </li>
                            <li className="text-neutral-30">
                              {item.organization}
                            </li>
                          </ul>
                          <div>
                            <ul className="flex gap-3">
                              <li className="text-neutral-30">취득일</li>
                              <li>{item.date}</li>
                            </ul>
                            <ul className="flex gap-3">
                              <li className="text-neutral-30">만료일</li>
                              <li>{item.expire}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ItemCardForCertificationListsMobile;
