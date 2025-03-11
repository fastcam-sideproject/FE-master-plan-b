import React from 'react';
import { IconBook2 } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';

const SweetyTips = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex h-[49px] items-center gap-3 border-b border-neutral-20 text-title-medium-desktop">
        <IconBook2 />
        <h2>나만의 꿀팁을 알려주세요</h2>
      </div>
      <div className="flex flex-col gap-6">
        <Input placeholder="제목을 입력해 주세요." />
        <Textarea placeholder="내용을 입력해 주세요." className="h-[320px]" />
      </div>
    </div>
  );
};

export default SweetyTips;
