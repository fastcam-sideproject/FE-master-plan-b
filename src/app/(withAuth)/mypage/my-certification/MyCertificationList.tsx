'use client';

import React, { useState } from 'react';
import {
  IconDots,
  IconHexagons,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Modal from '@/components/common/Modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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

const MyCertificationList = ({ data }: MyCertificationListProps) => {
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

  const nameWidth = 'w-[220px] p-4 tablet:w-[130px] font-[400]';
  const organizationWidth = 'w-[160px] p-4 hidden desktop:flex font-[400]';
  const dateWidth = 'w-[130px] p-4 font-[400]';
  const expireWidth = 'w-[130px] p-4 font-[400]';
  const buttonWidth = 'w-[145px] p-4 tablet:w-[130px] tablet:p-3';

  const iconPencilDotsStyle =
    'cursor-pointer text-neutral-20 hover:text-neutral-85';

  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  return (
    <div className="flex justify-center py-[64px]">
      <div className="flex w-[1121px] flex-col gap-6 tablet:w-[616px]">
        <div className="flex w-full items-center justify-between">
          <ul className="flex">
            <IconHexagons className="rotate-180" />
            <li className="text-title-medium-desktop">내 자격증</li>
          </ul>
          <ul
            className="flex cursor-pointer items-center gap-2"
            onClick={handleModalOpen}
          >
            <li className="p-3 text-label-small-desktop text-blue-40">
              자격증 등록하기
            </li>
            <IconPlus className="h-[20px] w-[20px] text-blue-40" />
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <ul className="flex text-body-medium-desktop text-neutral-30">
            <li className={`${nameWidth}`}>자격증명</li>
            <li className={`${organizationWidth}`}>기관명</li>
            <li className={`${dateWidth}`}>취득일</li>
            <li className={`${expireWidth}`}>만료일</li>
            <li className="hidden w-[80px] p-4 desktop:flex">점수</li>
            <li className="hidden w-[160px] p-4 desktop:flex">자격증 번호</li>
            <li className="w-[145px] p-4"></li>
            <li className="w-[96px] p-4"></li>
          </ul>
          <div className="flex flex-col gap-6 tablet:gap-3">
            {data.map((item, index) => (
              <ul className="flex items-center" key={index}>
                <li className={`${nameWidth} text-body-medium-desktop`}>
                  {item.name}
                </li>
                <li className={`${organizationWidth} text-body-medium-desktop`}>
                  {item.organization}
                </li>
                <li className={`${dateWidth} text-label-medium-desktop`}>
                  {item.date}
                </li>
                <li className={`${expireWidth} text-label-medium-desktop`}>
                  {item.expire}
                </li>
                <li className="hidden w-[80px] py-4 pl-0 pr-4 text-label-medium-desktop desktop:flex">
                  <p className="flex h-[30px] w-[55px] items-center justify-center rounded-4 bg-neutral-10 font-[400]">
                    {item.score}
                  </p>
                </li>
                <li className="hidden w-[160px] p-4 text-label-medium-desktop font-[400] desktop:flex">
                  {item.certificationNumber}
                </li>
                <li className={`${buttonWidth}`}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-[121px] rounded-4 bg-neutral-70 tablet:w-[114px]"
                    onClick={() => handleCertificationReview(item.name)}
                  >
                    후기 입력하기
                  </Button>
                </li>
                <li className="flex w-[96px] gap-4 p-4">
                  <div className="border border-r border-neutral-10"></div>
                  {isTablet || isMobile ? (
                    <IconDots
                      className={`${iconPencilDotsStyle}`}
                      onClick={handleModalOpen}
                    />
                  ) : (
                    <IconPencil
                      className={`${iconPencilDotsStyle}`}
                      onClick={handleModalOpen}
                    />
                  )}
                  <IconTrash
                    className="cursor-pointer text-neutral-20 hover:text-red-40"
                    onClick={() => handleCertificationDelete(item.name)}
                  />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {activeModal && (
        <Modal
          type="input"
          onConfirm={() => alert('서버에 집어넣을 데이터 관련 함수 작성하쇼')}
          onCancel={handleModalClose}
          closeOnOutsideClick={true}
        />
      )}
    </div>
  );
};

export default MyCertificationList;
