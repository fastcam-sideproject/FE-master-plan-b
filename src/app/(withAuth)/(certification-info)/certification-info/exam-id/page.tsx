'use client';

import React from 'react';
import ExamTitle from './examTitle';
import MastersReview from './mastersReview';
import ExamInformation from './examInformation';

// 이동 경로: /api/v1/exam/{exam-id}
// todo: 패러미터 적용을 위한 대괄호 폴더에 넣기.
// todo: 전체 후기에 관한 질문 남기기(특정 과목의 전체 후기인지, 모든 과목의 전체 후기인지)

const examTitleData = {
  title: 'exam1',
  category: 'IT_ICT',
  certificationType: 'NATIONAL_CERTIFIED',
  authority: '테스트',
  difficulty: 3.0,
  participantCount: 100,
};

const examInformationData = {
  preparation: '준비물',
  eligibility: '자격요건',
  examStructure: [
    { label: '답안지 작성 관련 OT', time: 15 },
    { label: '수험자 휴식시간', time: 5 },
    { label: '신분 확인 및 휴대폰 제출', time: 15 },
    { label: '문제지 배부 및 파본 확인', time: 5 },
    { label: '듣기평가(LC)', time: 45 },
    { label: '읽기평가(RC)', time: 75 },
  ],
  passingCriteria: '합격기준',
};

const MastersReviewData = [
  {
    title: '필기시험은 기출문제 무조건 반복하세요',
    labels: ['멜딕기관기능사', '정호안', '2024.12.03'],
    tags: ['하루 1~2시간 학습', '비전공자', '6개월 준비'],
    content:
      '기출문제만 잘 활용해도 필기시험의 반은 준비된 거나 다름없습니다. 저는 최근 5년간의 기출문제를 풀어본 후, 틀린 문제들을 모아 다시 복습하면서 약점을 보완했어요. 필기시험을 대비할 때 가장 중요한 건 기출문제를 정복하는 거예요. 저는 5년 치 기출문제를 풀어본 후, 틀린 문제들을 따로 정리하고 반복해서 공부했더니 효과가 좋았어요.',
    initialLikes: 10,
    writtenDifficulty: '보통',
    practicalDifficulty: '어려움',
    writtenStudy: '인터넷 강의',
    practicalStudy: '인터넷 강의',
  },
  {
    title: '필기시험은 기출문제 무조건 반복하세요',
    labels: ['멜딕기관기능사', '정호안', '2024.12.03'],
    tags: ['하루 1~2시간 학습', '비전공자', '6개월 준비'],
    content:
      '기출문제만 잘 활용해도 필기시험의 반은 준비된 거나 다름없습니다. 저는 최근 5년간의 기출문제를 풀어본 후, 틀린 문제들을 모아 다시 복습하면서 약점을 보완했어요. 필기시험을 대비할 때 가장 중요한 건 기출문제를 정복하는 거예요. 저는 5년 치 기출문제를 풀어본 후, 틀린 문제들을 따로 정리하고 반복해서 공부했더니 효과가 좋았어요.',
    initialLikes: 10,
    writtenDifficulty: '보통',
    practicalDifficulty: '어려움',
    writtenStudy: '인터넷 강의',
    practicalStudy: '인터넷 강의',
  },
  {
    title: '필기시험은 기출문제 무조건 반복하세요',
    labels: ['멜딕기관기능사', '정호안', '2024.12.03'],
    tags: ['하루 1~2시간 학습', '비전공자', '6개월 준비'],
    content:
      '기출문제만 잘 활용해도 필기시험의 반은 준비된 거나 다름없습니다. 저는 최근 5년간의 기출문제를 풀어본 후, 틀린 문제들을 모아 다시 복습하면서 약점을 보완했어요. 필기시험을 대비할 때 가장 중요한 건 기출문제를 정복하는 거예요. 저는 5년 치 기출문제를 풀어본 후, 틀린 문제들을 따로 정리하고 반복해서 공부했더니 효과가 좋았어요.',
    initialLikes: 10,
    writtenDifficulty: '보통',
    practicalDifficulty: '어려움',
    writtenStudy: '인터넷 강의',
    practicalStudy: '인터넷 강의',
  },
];

const CertificationDetailPage = () => {
  return (
    <div className="m-auto flex max-w-[1200px] flex-col gap-16 pb-[120px] pt-10">
      <ExamTitle
        title={examTitleData.title}
        category={examTitleData.category}
        certificationType={examTitleData.certificationType}
        authority={examTitleData.authority}
        difficulty={examTitleData.difficulty}
        participantCount={examTitleData.participantCount}
      />
      <div className="flex justify-between">
        <div>커뮤니티</div>
        <div>시험 일정</div>
      </div>
      <ExamInformation
        preparation={examInformationData.preparation}
        eligibility={examInformationData.eligibility}
        examStructure={examInformationData.examStructure}
        passingCriteria={examInformationData.passingCriteria}
      />
      <MastersReview MastersReviewData={MastersReviewData} />
    </div>
  );
};

export default CertificationDetailPage;
