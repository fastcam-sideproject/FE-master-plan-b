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
  '하루 1~2시간 학습': <IconClock size={20} />,
  비전공자: <IconUserFilled size={20} />,
  '6개월 준비': <IconCalendarWeek size={20} />,
};

export function MainItemList({ title, labels, tags, content }: MainItemListProps) {
  const tagsWithIcons = tags.map((tag) => ({
    tag,
    icon: iconMap[tag],
  }));

  return (
    <div className="w-[688px] px-10 pt-12 pb-10 bg-neutral-0 rounded-9 flex-col justify-center items-center inline-flex">
      <div className="flex-col justify-start items-end gap-5 flex">
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="flex-col justify-start items-start gap-[20px] flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="w-[60px] h-[60px] rounded-6 justify-center items-center flex">
                <Avatar src="/icons/gnb/user-filled.svg" alt="아바타 아이콘" size="lg" />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-body-medium-desktop font-normal text-neutral-85">
                    {labels[0]}
                  </div>
                  <div className="text-body-xsmall-desktop font-normal text-neutral-40">
                    {labels[1]}
                  </div>
                </div>
                <div className="text-title-large-desktop leading-[120%] font-normal">{title}</div>
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              {tagsWithIcons.map(({ tag, icon }, index) => (
                <div
                  key={index}
                  className="h-[34px] px-5 rounded-10 border border-neutral-10 stroke-normal justify-center items-center gap-2 flex"
                >
                  {icon}
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="text-neutral-50 text-body-small-desktop font-normal">{content}</div>
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="px-7 py-4 bg-neutral-0 rounded-4 border border-neutral-20 justify-center items-center gap-[10px] flex">
            <button className="text-neutral-80 text-label-medium-desktop font-normal" type="button">
              비법 전수받기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
