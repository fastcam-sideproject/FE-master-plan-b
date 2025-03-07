import React from 'react';
import Profile from './Profile';
import MyInfo from './MyInfo';

// todo: <Profile />은 간격이 어떻게 되는지 물어보기
const AccountInfoPage = () => {
  return (
    <div className="flex w-full justify-center bg-neutral-0">
      <div className="relative p-[120px]">
        <Profile />
        <MyInfo />
      </div>
    </div>
  );
};

export default AccountInfoPage;
