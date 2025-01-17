import React from 'react';
import HorizontalBar from './HorizontalBar';
import DashboardCardLayout from './DashboardCardLayout';

type BarGraphProps = {
  data: { label: string; value: number }[];
  type: 'difficulty' | 'method';
};
export default function BarGraph({ data, type }: BarGraphProps) {
  const maxValueData = data.reduce((prev, current) =>
    current.value > prev.value ? current : prev,
  );
  const maxValue = maxValueData.value;
  const maxLabel = maxValueData.label;

  // 끝글자 받침이 있는지 확인하는 함수
  const hasFinalConsonant = (word: string) => {
    const lastChar = word[word.length - 1];
    const code = lastChar.charCodeAt(0) - 44032;
    return code % 28 !== 0;
  };

  const templates: Record<'difficulty' | 'method', JSX.Element> = {
    difficulty: (
      <>
        <span className="text-neutral-85">{maxValue}%</span>가{' '}
        <span className="text-neutral-85">
          {{
            쉬워요: '쉽다',
            보통이에요: '보통이다',
            어려워요: '어렵다',
          }[maxLabel] || '알 수 없음'}
        </span>
        고<br /> 느끼고 있어요
      </>
    ),
    method: (
      <>
        <span className="text-neutral-85">{maxLabel}</span>
        {hasFinalConsonant(maxLabel) ? '으로' : '로'} <br />
        가장 많이 준비했어요
      </>
    ),
  };

  return (
    <DashboardCardLayout className="flex-col gap-7">
      <p className="text-title-medium-desktop text-neutral-50">{templates[type]}</p>
      <div className="flex flex-col gap-4">
        {data.map((data, index) => (
          <HorizontalBar key={index} label={data.label} value={data.value} />
        ))}
      </div>
    </DashboardCardLayout>
  );
}
