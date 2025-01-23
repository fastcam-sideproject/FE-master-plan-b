import React from 'react';
import Link from 'next/link';

type BtnOnboardingProps = {
  type: 'general' | 'specific';
  size: 'large' | 'medium';
};

export default function BtnOnboarding({ type, size }: BtnOnboardingProps) {
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
  const isLarge = size === 'large';
  return (
    <Link href={link}>
      <button
        className={`group ${isLarge ? 'w-[400px] h-[490px]' : 'w-[330px] h-[404px]'} bg-neutral-0 shadow-2 rounded-9 pb-7 border-2 border-transparent transition duration-300 hover:border-neutral-20 active:bg-neutral-85`}
      >
        <div className="flex flex-col items-center">
          <img
            src={imageSrc}
            alt={altText}
            className={`${isLarge ? 'size-[263px]' : 'size-[200px]'}`}
          />
          <div className="flex flex-col items-center gap-5">
            <p
              className={`${isLarge ? 'text-body-medium-desktop' : 'text-body-xsmall-desktop'} text-neutral-50 transition duration-300 group-active:text-neutral-10`}
            >
              {description}
            </p>
            <p
              className={`${isLarge ? 'text-title-large-desktop' : 'text-title-medium-desktop'}  text-neutral-90 transition duration-300 group-active:text-neutral-0`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
      </button>
    </Link>
  );
}
