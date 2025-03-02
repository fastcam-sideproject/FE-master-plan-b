import React from 'react';
import { IconCalendarWeek, IconClock, IconUserFilled } from '@tabler/icons-react';
import { Avatar } from '../common/Avatar';

type MainItemListProps = {
  title: string;
  labels: [string, string];
  tags: string[];
  content: string;
};

const iconMap: { [key: string]: JSX.Element } = {
  '하루 1~2시간 학습': <IconClock />,
  비전공자: <IconUserFilled />,
  '6개월 준비': <IconCalendarWeek />,
};
export function MainItemList({ title, labels, tags, content }: MainItemListProps) {
  const tagsWithIcons = tags.map((tag) => ({
    tag,
    icon: iconMap[tag],
  }));

  return (
    <div className="w-full mobile:w-[335px] px-10 mobile:px-6 py-12 mobile:py-7 bg-neutral-0 rounded-9 mobile:rounded-8 flex-col justify-center items-center inline-flex">
      <div className="w-full flex-col justify-start items-end mobile:gap-4 gap-5 flex">
        <div className="flex-col justify-start items-start mobile:gap-6 gap-7 flex">
          <div className="flex-col justify-start items-start mobile:gap-5 gap-6 flex">
            <div className="justify-start items-start mobile:gap-4 gap-6 inline-flex">
              <div className="w-[60px] mobile:w-10 h-[60px] mobile:h-10 mobile:rounded-5 rounded-6 justify-center items-center flex">
                <Avatar
                  src="/icons/gnb/user-filled.svg"
                  alt="아바타 아이콘"
                  size={{ mobile: 'md', desktop: 'lg' }}
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="mobile:text-body-medium-mobile text-body-medium-desktop font-normal text-neutral-85">
                    {labels[0]}
                  </div>
                  <div className="mobile:text-body-xsmall-mobile text-body-xsmall-desktop font-normal text-neutral-40">
                    {labels[1]}
                  </div>
                </div>
                <div className="mobile:text-body-large-desktop text-title-large-desktop leading-[160%] font-normal">
                  {title}
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center mobile:gap-2 gap-5 inline-flex">
              {tagsWithIcons.map(({ tag, icon }, index) => (
                <div
                  key={index}
                  className="mobile:h-[28px] h-[34px] mobile:px-3 px-5 rounded-10 border border-neutral-10 stroke-normal justify-center items-center gap-2 flex mobile:text-body-xsmall-mobile text-body-small-desktop"
                >
                  <div className="flex justify-center items-center mobile:size-4 size-6 ">
                    {icon}
                  </div>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="mobile:px-2 px-0 text-neutral-50 mobile:text-body-small-mobile text-body-small-desktop font-normal">
            {content}
          </div>
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="mobile:px-4 px-7 mobile:py-2 py-4 bg-neutral-0 rounded-4 border border-neutral-20 justify-center items-center gap-[10px] flex">
            <button
              className="text-neutral-80 mobile:text-label-small-mobile text-label-medium-desktop font-normal"
              type="button"
            >
              비법 전수받기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
