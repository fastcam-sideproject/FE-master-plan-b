'use client';

import React from 'react';
import { IconHexagons, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const certificationList = [
  {
    name: '자격증명 1',
    organization: '기관명 1',
    date: '취득일 1',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 2',
    organization: '기관명 2',
    date: '취득일 2',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 3',
    organization: '기관명 3',
    date: '취득일 3',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 4',
    organization: '기관명 4',
    date: '취득일 4',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 5',
    organization: '기관명 5',
    date: '취득일 5',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 6',
    organization: '기관명 6',
    date: '취득일 6',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: '자격증명 7',
    organization: '기관명 7',
    date: '취득일 7',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
];

const handleCertificationRegistration = () => {
  confirm('테스트');
};
const handleCertificationReview = (name: string) => {
  confirm(`${name} 후기 입력하기?`);
};
const handleCertificationEdit = (name: string) => {
  confirm(`${name} 수정?`);
};
const handleCertificationDelete = (name: string) => {
  confirm(`${name} 삭제제?`);
};

const MyCertificationList = () => {
  return (
    <div className="flex justify-center py-[64px]">
      <div className="flex w-[1121px] flex-col gap-6">
        <div className="flex w-full items-center justify-between">
          <ul className="flex">
            <IconHexagons className="rotate-180" />
            <li className="text-title-medium-desktop">내 자격증</li>
          </ul>
          <ul
            className="flex cursor-pointer items-center gap-2"
            onClick={handleCertificationRegistration}
          >
            <li className="p-3 text-label-small-desktop text-blue-40">자격증 등록하기</li>
            <IconPlus className="h-[20px] w-[20px] text-blue-40" />
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <ul className="flex text-body-medium-desktop text-neutral-30">
            <li className="w-[220px] p-4">자격증명</li>
            <li className="w-[160px] p-4">기관명</li>
            <li className="w-[130px] p-4">취득일</li>
            <li className="w-[130px] p-4">만료일</li>
            <li className="w-[80px] p-4">점수</li>
            <li className="w-[160px] p-4">자격증 번호</li>
            <li className="w-[145px] p-4"></li>
            <li className="w-[96px] p-4"></li>
          </ul>
          {certificationList.map((item, index) => (
            <ul className="flex items-center" key={index}>
              <li className="w-[220px] p-4 text-body-medium-desktop">{item.name}</li>
              <li className="w-[160px] p-4 text-body-medium-desktop">{item.organization}</li>
              <li className="w-[130px] p-4 text-label-medium-desktop">{item.date}</li>
              <li className="w-[130px] p-4 text-label-medium-desktop">{item.expire}</li>
              <li className="w-[80px] py-4 pl-0 pr-4 text-label-medium-desktop">
                <p className="flex h-[30px] w-[55px] items-center justify-center rounded-4 bg-neutral-10">
                  {item.score}
                </p>
              </li>
              <li className="w-[160px] p-4 text-label-medium-desktop">
                {item.certificationNumber}
              </li>
              <li className="w-[145px] p-4">
                <Button
                  className="h-[38px] w-[121px] rounded-4 bg-neutral-70 text-label-small-desktop text-neutral-0"
                  onClick={() => handleCertificationReview(item.name)}
                >
                  후기 입력하기
                </Button>
              </li>
              <li className="flex w-[96px] gap-4 p-4">
                <div className="border border-r border-neutral-10"></div>
                <IconPencil
                  className="cursor-pointer text-neutral-20"
                  onClick={() => handleCertificationEdit(item.name)}
                />
                <IconTrash
                  className="cursor-pointer text-neutral-20"
                  onClick={() => handleCertificationDelete(item.name)}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCertificationList;
