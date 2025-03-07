import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/common/PageHeader';

const breadcrumbItems = [
  { label: '홈', href: '/' },
  { label: '마이페이지', href: '/mypage' },
];

const CertificationReviewPage = () => {
  return (
    <div>
      <div>
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center">
          <Image
            src="/background/certification-review.png"
            alt="자격증 시험 후기 배너 이미지"
            fill
            className="absolute -z-10 object-cover"
          />
          <div className="bg-red-10">
            <PageHeader variant="left-small" breadcrumbItems={breadcrumbItems} withTitle={false} />
          </div>
          <ul className="flex gap-3 text-heading-medium-desktop text-neutral-0">
            <li className="text-primary-40">{'{'}</li>
            <li>후기 작성하기</li>
            <li className="text-primary-40">{' }'}</li>
          </ul>
          <ul className="flex flex-col items-center justify-center text-body-large-desktop text-neutral-30">
            <li>다른 응시생에게 시험 후기를 들려주세요!</li>
            <li>후기 작성 시 해당 자격증 합격자 커뮤니티에 참여할 수 있어요</li>
          </ul>
        </div>
      </div>
      <div>
        <div>시험 정보 영역</div>
        <div>학습 경험</div>
        <div>필기</div>
        <div>실기</div>
        <div>나만의 꿀팁을 알려주세요.</div>
      </div>
      <Button label="돌아가기" size="lg" variant="third" className="w-[180px]" />
      <Button label="등록하기" size="lg" className="w-[180px]" />
      <div className="flex bg-red-10"></div>
    </div>
  );
};

export default CertificationReviewPage;
