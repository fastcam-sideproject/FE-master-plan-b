import React from 'react';
import { IconPencil, IconWand } from '@tabler/icons-react';
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

const boxHorizonGap = 'flex gap-6 mobile:flex-col';
const boxVerticalGap = 'flex flex-col gap-6';
const smallTitleGap =
  'flex gap-3 text-title-medium-desktop items-center mobile:gap-2 mobile:text-title-small-desktop';
const iconSize = 'size-[24px] mobile:size-[20px]';

const ExamMasterPlanPage = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col items-center gap-[64px] pb-[120px] pt-[64px] mobile:gap-9 mobile:px-6 mobile:py-9">
        <div className="flex flex-col gap-[64px] mobile:gap-9">
          <ul className="text-title-large-desktop text-neutral-50 tablet:text-title-medium-desktop mobile:text-title-medium-desktop">
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
            <IconPencil className={iconSize} />
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
            <IconWand className={iconSize} />
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
