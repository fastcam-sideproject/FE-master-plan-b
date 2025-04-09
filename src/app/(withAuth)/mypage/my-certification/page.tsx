'use client';

import React from 'react';
// import { mySpecsApi } from '@/api/mypage/mySpecs/mySpecs';
// import { CertificateTable } from '@/components/CertificateTable';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ItemCardForCertificationListsMobile from '@/components/ItemCard/ItemCardForCertificationListsMobile';
import ActivityBadge from './ActivityBadge';
import MyCertificationList from './MyCertificationList';

// todo: 배지 api 가져오기
// todo: 내 자격증 api 가져오기

const certificationList = [
  {
    name: 'TOEIC',
    organization: '기관명 1',
    date: '취득일 1',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 2',
    organization: '기관명 2',
    date: '취득일 2',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 3',
    organization: '기관명 3',
    date: '취득일 3',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 4',
    organization: '기관명 4',
    date: '취득일 4',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 5',
    organization: '기관명 5',
    date: '취득일 5',
    expire: '만료일',
    score: '500',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 6',
    organization: '기관명 6',
    date: '취득일 6',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
  {
    name: 'TOEIC 7',
    organization: '기관명 7',
    date: '취득일 7',
    expire: '만료일',
    score: '-',
    certificationNumber: '2025113255654',
  },
];

const MyCertificationPage = () => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');

  return (
    <div className="w-full">
      <ActivityBadge />
      {isMobile ? (
        <ItemCardForCertificationListsMobile data={certificationList} />
      ) : (
        <MyCertificationList data={certificationList} />
      )}
    </div>
  );
};

export default MyCertificationPage;
