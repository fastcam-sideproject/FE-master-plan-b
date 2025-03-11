import React from 'react';
import { CertificateTable } from '@/components/CertificateTable';
import ActivityBadge from './ActivityBadge';
import MyCertificationList from './MyCertificationList';

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

const MyCertificationPage = () => {
  return (
    <div className="w-full">
      <ActivityBadge />
      <MyCertificationList data={certificationList} />
    </div>
  );
};

export default MyCertificationPage;
