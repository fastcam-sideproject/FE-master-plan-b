import { IconPencil } from '@tabler/icons-react';
import React from 'react';

const WrittenTest = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconPencil />
        <h2>필기</h2>
      </div>
    </div>
  );
};

export default WrittenTest;
