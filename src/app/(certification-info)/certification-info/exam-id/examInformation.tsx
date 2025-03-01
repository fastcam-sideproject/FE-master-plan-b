import React from 'react';
import {
  IconBook,
  IconBookmark,
  IconCreditCard,
  IconPencil,
  IconPoint,
  IconPointFilled,
} from '@tabler/icons-react';
import Stepper, { StepperProps } from '@/components/Stepper/Stepper';

interface ExamInformationProps {
  preparation: string;
  eligibility: string;
  examStructure: { label: string; time: number }[];
  passingCriteria: string;
}

const ExamInformation = (data: ExamInformationProps) => {
  return (
    <div className="flex flex-col gap-7 text-body-medium-desktop">
      <h2 className="text-title-medium-desktop">시험 정보</h2>
      <div className="flex flex-col gap-16 rounded-7 bg-neutral-0 px-9 py-10">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <IconBook className="h-[28px] w-[28px] text-primary-50" />
            <h3 className="text-title-medium-desktop text-neutral-80">시험 구성</h3>
          </div>
          <div className="flex justify-center">
            <div className="w-[1000px] tablet:w-[608px] mobile:w-[303px]">
              <Stepper data={data.examStructure} />
            </div>
          </div>
          <div>시험 구성 표</div>
        </div>
        {/* 준비물 영역 */}
        {/* <div>{data.preparation}</div> */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <IconPencil className="h-[28px] w-[28px] text-primary-50" />
            <h3 className="text-title-medium-desktop text-neutral-80">준비물</h3>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center">
              <IconPointFilled className="m-2 h-5 w-5" />
              <span>규정 신분증</span>
            </li>
            <li className="flex items-center">
              <IconPointFilled className="m-2 h-5 w-5" />
              <span>연필(볼펜 및 사인펜은 사용 불가)</span>
            </li>
            <li className="flex items-center">
              <IconPointFilled className="m-2 h-5 w-5" />
              <span>지우개</span>
            </li>
            <li className="flex items-center">
              <IconPointFilled className="m-2 h-5 w-5" />
              <span>아날로그 손목시계(전자식 시계 불가)</span>
            </li>
            <li className="text-red-40">
              <span>※고사장 내 시계 준비 여부는 학교 사정에 따라 달라질 수 있습니다.</span>
            </li>
          </ul>
        </div>
        {/* 준비물 영역 끝 */}
        {/* 합격 기준 영역 */}
        {/* <div>{data.passingCriteria}</div> */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <IconBook className="h-[28px] w-[28px] text-primary-50" />
            <h3 className="text-title-medium-desktop text-neutral-80">합격 기준</h3>
          </div>
          <div>합격 기준 내용</div>
        </div>
        {/* 합격 기준 영역 끝 */}
        {/* 응시 자격 */}
        {/* <div>{data.eligibility}</div> */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <IconBookmark className="h-[28px] w-[28px] text-primary-50" />
            <h3 className="text-title-medium-desktop text-neutral-80">응시 자격</h3>
          </div>
          <div>
            <ul>
              <li>TOEIC에 별도의 응시자격 제한은 없다</li>
            </ul>
            <ul>
              <li>
                (단, 부정행위 및 규정 위반으로 적발된 응시자는 부정행위자 처리 규정 제5조 및 일반
                시험 관리 규정 제14조에 따라 일정기간 동안 응시자격이 제한된다.)
              </li>
            </ul>
          </div>
        </div>
        {/* 응시 자격 끝 */}
        {/* 응시료 및 할인 */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <IconCreditCard className="h-[28px] w-[28px] text-primary-50" />
            <h3 className="text-title-medium-desktop text-neutral-80">응시료 및 할인</h3>
          </div>
          <div>표 영역</div>
        </div>
        {/* 응시료 및 할인 끝 */}
      </div>
    </div>
  );
};

export default ExamInformation;
