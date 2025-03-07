import React from 'react';
import { Button } from '@/components/ui/button';
import Banner from './Banner';
import ExamInfo from './ExamInfo';
import ExamExperience from './ExamExperience';
import WrittenTest from './WrittenTest';
import PracticalTest from './PracticalTest';
import SweetyTips from './SweetyTips';

const CertificationReviewPage = () => {
  return (
    <div>
      <Banner />
      <div className="flex justify-center bg-neutral-0 pb-[120px] pt-[64px]">
        <div className="flex w-[1080px] flex-col gap-[80px]">
          <div className="flex flex-col gap-[64px]">
            <ExamInfo />
            <ExamExperience />
            <WrittenTest />
            <PracticalTest />
            <SweetyTips />
          </div>
          <div className="flex justify-center gap-4">
            <Button label="돌아가기" size="lg" variant="third" className="w-[180px]" />
            <Button label="등록하기" size="lg" className="w-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationReviewPage;
