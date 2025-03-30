import React from 'react';
import { IconPencil, IconWand } from '@tabler/icons-react';
import { PageHeader } from '@/components/common/PageHeader';
import LearningTimeGraph from '@/components/DashBoard/LearningTimeGraph';
import BarGraph from '@/components/DashBoard/BarGraph';
import DonutGraph from '@/components/DashBoard/DonutGraph';
import TimeComparisonGraph from '@/components/DashBoard/TimeComparisonGraph';
import Banner from './Banner';

const difBarGraphData = [
  { label: '쉬워요', value: 30 },
  { label: '보통이에요', value: 95 },
  { label: '어려워요', value: 90 },
];
const methodBarGraphData = [
  { label: '책', value: 30 },
  { label: '인터넷강의', value: 10 },
  { label: '유튜브', value: 90 },
];
const learningTimeGraphData = [
  { label: '과목1', value: 20 },
  { label: '과목2', value: 10 },
  { label: '과목3', value: 25 },
  { label: '과목4', value: 15 },
  { label: '과목5', value: 40 },
];
const reflectionData = [
  { label: '미반영', value: 70 },
  { label: '일부 반영', value: 10 },
  { label: '적극 반영', value: 20 },
];
const timeData = [
  { label: '부족했어요', value: 30 },
  { label: '적절했어요', value: 40 },
  { label: '여유로웠어요', value: 30 },
];
const timeComparison = { written: 60, practical: 40, total: 100 };

const boxHorizonGap = 'flex gap-6';
const boxVerticalGap = 'flex flex-col gap-6';
const smallTitleGap = 'flex gap-3 text-title-medium-desktop items-center';

const ExamMasterPlanPage = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col items-center gap-[64px] pb-[120px] pt-[64px]">
        <div className="flex flex-col gap-[64px]">
          <ul className="text-title-large-desktop text-neutral-50">
            <li>이 자격증을 취득한 마스터님들은</li>
            <li>
              <span className="text-neutral-85">평균 N개월</span> 정도
              준비했어요
            </li>
          </ul>
          <div className={boxHorizonGap}>
            <LearningTimeGraph data={learningTimeGraphData} />
            <TimeComparisonGraph data={timeComparison} />
          </div>
        </div>
        <div className={boxVerticalGap}>
          <ul className={smallTitleGap}>
            <IconPencil />
            <li>필기</li>
          </ul>
          <div className={boxHorizonGap}>
            <BarGraph type={'difficulty'} data={difBarGraphData} />
            <BarGraph type={'method'} data={methodBarGraphData} />
          </div>
          <div className={boxHorizonGap}>
            <DonutGraph type={'reflection'} data={reflectionData} />
            <DonutGraph type={'time'} data={timeData} />
          </div>
        </div>
        <div className={boxVerticalGap}>
          <ul className={smallTitleGap}>
            <IconWand />
            <li>실기</li>
          </ul>
          <div className={boxHorizonGap}>
            <BarGraph type={'difficulty'} data={difBarGraphData} />
            <BarGraph type={'method'} data={methodBarGraphData} />
          </div>
          <div className={boxHorizonGap}>
            <DonutGraph type={'reflection'} data={reflectionData} />
            <DonutGraph type={'time'} data={timeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMasterPlanPage;
