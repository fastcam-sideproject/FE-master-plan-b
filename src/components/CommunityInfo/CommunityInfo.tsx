import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CommunityInfoData = [
  {
    title: '공동 학습과 협력 기회',
    content: `합격 이후 실무에서 활용 가능한 스킬이나\n관련 자료도 함께 공유할 수 있어요`,
    contentSmall: `합격 이후 실무에서\n활용 가능한 스킬이나 관련 자료도\n함께 공유할 수 있어요`,
    iamge: 'wallet-iso-clay.png',
  },
  {
    title: '취업 및 진로 고민 해결',
    content: `합격자들과 네트워킹을 통해\n진로와 취업 고민을 나눌 수 있어요`,
    contentSmall: `합격자들과 네트워킹을 통해\n진로와 취업 고민을\n나눌 수 있어요`,
    iamge: 'folder-iso-clay.png',
  },
  {
    title: '동기 부여 및 심리적 지원',
    content: `비슷한 상황에 있는 사람들과 교류하며\n동기 부여를 얻을 수 있어요`,
    contentSmall: `비슷한 상황에 있는\n사람들과 교류하며\n동기 부여를 얻을 수 있어요`,
    iamge: 'chart-iso-clay.png',
  },
];

const CommunityInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767.9);
      // console.log('잘 된다?');
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {CommunityInfoData.map((item, index) => (
        <div
          key={index}
          className="p-7 mobile:p-3 w-[278px] mobile:w-[230px] flex flex-col gap-5 items-center border border-[#5C5C5C] box-border rounded-7 bg-[#424242] bg-glass-gradient-dark "
          style={{
            background:
              'radial-gradient(59.53% 59.53% at 12.86% 22.03%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), rgba(66, 66, 66, 0.8)',
          }}
        >
          <Image
            src={`/images/CommunityInfo/${item.iamge}`}
            alt={item.iamge}
            width={90}
            height={90}
            className="mobile:w-[70px] mobile:h-[70px]"
          />
          <ul className="flex flex-col gap-3">
            <li className="text-title-small-desktop mobile:text-body-medium-desktop font-bold text-center text-neutral-0 ">
              {item.title}
            </li>
            <li className="text-body-xsmall-desktop text-center text-neutral-30 whitespace-pre-line">
              {isMobile ? item.contentSmall : item.content}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CommunityInfo;
