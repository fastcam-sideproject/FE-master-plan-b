import React from 'react';

export function KakaoLoginBtn() {
  return (
    <div className="w-40 mobile:w-[335px] h-[180px] mobile:h-[65px] px-6 py-9 mobile:p-4 bg-[#FFE000] rounded-4 flex-col justify-center items-center inline-flex">
      <div className="flex flex-col justify-start items-center gap-6 mobile:flex-row mobile:gap-4">
        <img src="/icons/login/kakao.svg" alt="kakao login icon" className="w-8 h-[28.69px]" />
        <div className="text-neutral-85 text-label-medium-desktop font-normal">
          카카오로 시작하기
        </div>
      </div>
    </div>
  );
}
