'use client';
import { IconVocabulary } from '@tabler/icons-react';
import React, { useState } from 'react';

const experienceSurvey = [
  { question: '학습 레벨을 알려주세요', answer: ['전공자', '비전공자'] },
  {
    question: '학습 기간을 알려주세요',
    answer: ['1개월 이내', '1~3개월', '3~6개월', '6~12개월', '12개월 이상'],
  },
  {
    question: '하루 학습량을 알려주세요',
    answer: ['1시간 이내', '1~2시간', '3~4시간', '5시간 이상'],
  },
];

const ExamExperience = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconVocabulary />
        <h2>학습 경험</h2>
      </div>
      <div className="flex flex-col gap-10">
        {experienceSurvey.map((item, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <div className="text-body-xlarge-desktop">{item.question}</div>
            <div className="flex gap-4">
              {item.answer.map((answerItem, answerIndex) => (
                <button
                  key={answerIndex}
                  className={`w-[130px] rounded-10 border border-neutral-20 px-7 py-4 tracking-tighter ${
                    selectedAnswers[index] === answerIndex
                      ? 'bg-neutral-70 text-neutral-0'
                      : ''
                  }`}
                  onClick={() => handleAnswerSelect(index, answerIndex)}
                >
                  {answerItem}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamExperience;
