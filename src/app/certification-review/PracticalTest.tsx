import { IconWand } from '@tabler/icons-react';
import React from 'react';

const PracticalTest = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconWand />
        <h2>실기</h2>
      </div>
    </div>
  );
};

export default PracticalTest;
