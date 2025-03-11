import React from 'react';
import Image from 'next/image';
import { IconPlus } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Chip from '@/components/Chip/Chip';

const AccountLogoImages = {
  // 컬러(연동됨)
  NaverOn: '/images/logoForLoginAccount/NaverIcon_on.png',
  KakaoOn: '/images/logoForLoginAccount/KakaoIcon_on.png',
  GoogleOn: '/images/logoForLoginAccount/GoogleIcon_on.png',
  // 흑백(아직 연동 안 됨)
  NaverOff: '/images/logoForLoginAccount/NaverIcon_off.png',
  KakaoOff: '/images/logoForLoginAccount/KakaoIcon_off.png',
  GoogleOff: '/images/logoForLoginAccount/GoogleIcon_off.png',
};

// 임시로 연동 상태를 관리하는 타입과 데이터
type AccountStatus = {
  naver: boolean;
  kakao: boolean;
  google: boolean;
};

const accountStatus: AccountStatus = {
  naver: true, // 실제로는 API나 상태 관리 도구에서 가져와야 합니다
  kakao: false,
  google: true,
};

const MyInfo = () => {
  return (
    <div className="flex w-[600px] flex-col gap-[64px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-title-large-desktop">회원정보 수정</h1>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <ul className="flex justify-between">
              <li>닉네임</li>
              <Button label="수정하기" variant="text" />
            </ul>
            <Input placeholder="정윤아" />
          </div>
          <div className="flex flex-col gap-4">
            <p>아이디(이메일)</p>
            <Input placeholder="cometrainworks@gmail.com" />
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>연동된 계정</li>
              <li className="flex gap-4">
                <Image
                  src={accountStatus.naver ? AccountLogoImages.NaverOn : AccountLogoImages.NaverOff}
                  alt="네이버 계정"
                  width={50}
                  height={50}
                />
                <Image
                  src={accountStatus.kakao ? AccountLogoImages.KakaoOn : AccountLogoImages.KakaoOff}
                  alt="카카오 계정"
                  width={50}
                  height={50}
                />
                <Image
                  src={
                    accountStatus.google ? AccountLogoImages.GoogleOn : AccountLogoImages.GoogleOff
                  }
                  alt="구글 계정"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p>비밀번호</p>
            <Input placeholder="기존 비밀번호를 입력해주세요" />
            <Input placeholder="새로운 비밀번호를 입력해주세요" />
            <p>
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로
              입력해주세요
            </p>
          </div>
        </div>
      </div>
      <div className="border-0 border-b border-neutral-10"></div>
      <div className="flex flex-col gap-10">
        <h1 className="text-title-large-desktop">관심 자격증 수정</h1>
        <div className="flex flex-col gap-4">
          <p>관심 자격증</p>
          <ul className="flex">
            <li>직무에 상관없이 도움되는 자격증</li>
            <li>관심있는 직무의 전문적인 자격증</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex items-center justify-between">
            <li>관심 직무 · 직군</li>
            <Button
              variant="none"
              className="flex gap-2 text-body-small-desktop font-[700] text-blue-40"
            >
              <IconPlus size={20} className="!h-[20px] !w-[20px] text-blue-40" />
              <p>추가하기</p>
            </Button>
          </ul>
          <div className="flex flex-col gap-8">
            <div className="h-[342px] w-[600px] bg-red-10">
              여기는 관심 직무 및 직군 선택 영역임둥
            </div>
            <div>
              <Chip size="large" keyword="테스트" selected={false} disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="flex justify-end text-red-40">계정 삭제하기</p>
        <div className="flex gap-5">
          <Button className="w-full" variant="third" size="lg" label="돌아가기" />
          <Button className="w-full" variant="secondary" size="lg" label="저장하기" />
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
