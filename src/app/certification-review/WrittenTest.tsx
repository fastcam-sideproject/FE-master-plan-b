'use client';

import React, { useState } from 'react';
import { IconPencil } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';

const writtenTestSurvey = [
  { question: '필기 시험의 난이도는 어때요?', answer: ['쉬워요', '보통이에요', '어려워요'] },
  {
    question: '기출 내용은 어느 정도 반영되었나요?',
    answer: ['미반영', '일부 반영', '적극 반영'],
  },
  {
    question: '주어진 시간은 충분했나요?',
    answer: ['부족했어요', '적절했어요', '여유로웠어요'],
  },
  {
    question: '필기시험은 어떤 방법으로 준비하셨나요?',
    answer: ['책', '인터넷 강의', '유튜브', '학원', '어플리케이션', '기타'],
    placeholder: '자세한 정보를 입력해주세요.',
  },
];

const WrittenTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconPencil />
        <h2>필기</h2>
      </div>
      <div className="flex flex-col gap-10">
        {writtenTestSurvey.map((item, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <div className="text-body-xlarge-desktop">{item.question}</div>
            <div className="flex gap-4">
              {item.answer.map((answerItem, answerIndex) => (
                <button
                  key={answerIndex}
                  className={`w-[130px] rounded-10 border border-neutral-20 px-7 py-4 tracking-tighter ${
                    selectedAnswers[index] === answerIndex ? 'bg-neutral-70 text-neutral-0' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index, answerIndex)}
                >
                  {answerItem}
                </button>
              ))}
            </div>
            {item.placeholder && <Input placeholder={item.placeholder} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrittenTest;
