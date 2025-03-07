import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="absolute left-[-148px] flex h-[252px] flex-col items-center justify-between p-6">
      <div className="h-[100px] w-[100px] overflow-hidden rounded-10 bg-red-10">
        <Image src="/images/checker.png" alt="선택한 이미지 없음" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="secondary" size="sm" label="프로필 변경" />
        <Button variant="secondary" size="sm" label="로그아웃" />
      </div>
    </div>
  );
};

export default Profile;
