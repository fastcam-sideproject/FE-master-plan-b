import React from 'react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="flex h-[252px] flex-col justify-between p-6">
      <div className="h-[100px] w-[100px] rounded-10 bg-red-10"></div>
      <div className="flex flex-col gap-4">
        <Button>프로필 변경</Button>
        <Button>로그아웃</Button>
      </div>
    </div>
  );
};

export default Profile;
