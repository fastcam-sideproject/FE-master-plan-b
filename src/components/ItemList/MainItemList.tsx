import React from 'react';
import { IconCalendarWeek, IconClock, IconUserFilled } from '@tabler/icons-react';
import { Avatar } from '../common/Avatar';

type MainItemListProps = {
  title: string;
  labels: string[];
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
    <div className="w-[335px] md:w-[688px] px-6 md:px-10 py-7 md:py-12 bg-neutral-0 rounded-8 md:rounded-9 flex-col justify-center items-center inline-flex">
      <div className="w-full flex-col justify-start items-end gap-4 md:gap-5 flex">
        <div className="flex-col justify-start items-start gap-6 md:gap-7 flex">
          <div className="flex-col justify-start items-start gap-5 md:gap-[20px] flex">
            <div className="justify-start items-start gap-4 md:gap-6 inline-flex">
              <div className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-5 md:rounded-6 justify-center items-center flex">
                <Avatar
                  src="/icons/gnb/user-filled.svg"
                  alt="아바타 아이콘"
                  size={window.innerWidth < 768 ? 'md' : 'lg'}
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-body-medium-mobile md:text-body-medium-desktop font-normal text-neutral-85">
                    {labels[0]}
                  </div>
                  <div className="text-body-xsmall-mobile md:text-body-xsmall-desktop font-normal text-neutral-40">
                    {labels[1]}
                  </div>
                </div>
                <div className="text-body-large-desktop md:text-title-large-desktop leading-[160%] font-normal">
                  {title}
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-2 md:gap-5 inline-flex">
              {tagsWithIcons.map(({ tag, icon }, index) => (
                <div
                  key={index}
                  className="h-[28px] md:h-[34px] px-3 md:px-5 rounded-10 border border-neutral-10 stroke-normal justify-center items-center gap-2 flex text-body-xsmall-mobile md:text-body-small-desktop"
                >
                  <div className="flex justify-center items-center size-4 md:size-6 ">{icon}</div>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="px-2 md:px-0 text-neutral-50 text-body-small-mobile md:text-body-small-desktop font-normal">
            {content}
          </div>
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="px-4 md:px-7 py-2 md:py-4 bg-neutral-0 rounded-4 border border-neutral-20 justify-center items-center gap-[10px] flex">
            <button
              className="text-neutral-80 text-label-small-mobile md:text-label-medium-desktop font-normal"
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
