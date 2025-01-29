import React from 'react';
import Link from 'next/link';

type BtnOnboardingProps = {
  type: 'general' | 'specific';
};

export default function BtnOnboarding({ type }: BtnOnboardingProps) {
  const templates = {
    general: {
      imageSrc: '/images/general.png',
      altText: 'generalImg',
      description: '토익, 오픽, 컴퓨터활용능력시험 등',
      title: '직무에 상관없이 <br /> 도움되는 자격증',
      link: '/',
    },
    specific: {
      imageSrc: '/images/specific.png',
      altText: 'specificImg',
      description: '정보처리기사, GTQ, 공인중개사, 회계사 등',
      title: '관심있는 직무의 <br /> 전문적인 자격증',
      link: '/',
    },
  };

  const { imageSrc, altText, description, title, link } = templates[type];
  const btnStyle =
    'w-[400px] h-[490px] pb-7 tablet:w-[330px] tablet:h-[404px] mobile:w-[330px] mobile:h-[270px]  mobile:pb-5';
  const imgStyle = 'size-[263px] tablet:size-[200px] mobile:size-[140px] ';
  const descriptionStyle =
    'text-body-medium-desktop tablet:text-body-xsmall-desktop mobile:text-body-xsmall-mobile';
  const titleStyle =
    'text-title-large-desktop tablet:text-title-medium-desktop mobile:text-title-medium-mobile';
  return (
    <Link href={link}>
      <button
        className={`group ${btnStyle} bg-neutral-0 shadow-2 rounded-9  border-2 border-transparent transition duration-300 hover:border-neutral-20 active:bg-neutral-85`}
      >
        <div className="flex flex-col items-center">
          <img src={imageSrc} alt={altText} className={`${imgStyle}`} />
          <div className="flex flex-col items-center gap-5">
            <p
              className={`${descriptionStyle} text-neutral-50 transition duration-300 group-active:text-neutral-10`}
            >
              {description}
            </p>
            <p
              className={`${titleStyle}  text-neutral-90 transition duration-300 group-active:text-neutral-0`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
      </button>
    </Link>
  );
}
