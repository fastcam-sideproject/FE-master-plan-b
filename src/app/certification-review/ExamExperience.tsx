import { IconVocabulary } from '@tabler/icons-react';
import React from 'react';

const ExamExperience = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconVocabulary />
        <h2>학습 경험</h2>
      </div>
    </div>
  );
};

export default ExamExperience;
