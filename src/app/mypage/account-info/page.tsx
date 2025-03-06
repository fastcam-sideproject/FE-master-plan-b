import React from 'react';
import Profile from './Profile';
import MyInfo from './MyInfo';

// todo: <Profile />은 간격이 어떻게 되는지 물어보기
const AccountInfoPage = () => {
  return (
    <div className="flex items-start p-[120px]">
      <Profile />
      <MyInfo />
    </div>
  );
};

export default AccountInfoPage;
