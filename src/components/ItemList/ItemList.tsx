import React, { useState } from 'react';
import {
  IconCalendarWeek,
  IconChevronDown,
  IconChevronUp,
  IconClock,
  IconThumbUp,
  IconThumbUpFilled,
  IconUserFilled,
} from '@tabler/icons-react';
import { Avatar } from '../common/Avatar';

export type ItemListProps = {
  title: string;
  labels: string[];
  tags: string[];
  content: string;
  initialLikes: number;
  writtenDifficulty: string;
  practicalDifficulty: string;
  writtenStudy: string;
  practicalStudy: string;
};

const iconMap: { [key: string]: JSX.Element } = {
  '하루 1~2시간 학습': <IconClock className="size-6" />,
  비전공자: <IconUserFilled className="size-6" />,
  '6개월 준비': <IconCalendarWeek className="size-6" />,
};

export function ItemList({
  title,
  labels,
  tags,
  content,
  initialLikes,
  writtenDifficulty,
  practicalDifficulty,
  writtenStudy,
  practicalStudy,
}: ItemListProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const handleLike = () => {
    if (isActive) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsActive((prev) => !prev);
  };

  const tagsWithIcons = tags.map((tag) => ({
    tag,
    icon: iconMap[tag],
  }));

  return (
    <div className="rounded-lg border border-neutral-10 bg-white px-9 py-8 shadow-sm">
      <div className="flex flex-col gap-7">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <Avatar src="/icons/gnb/user-filled.svg" alt="아바타 아이콘" size="lg" />
            <div>
              <h3 className="text-lg font-medium text-neutral-85">{title}</h3>
              <div className="mt-2 flex items-center gap-3">
                {labels.map((label, index) => (
                  <React.Fragment key={index}>
                    <span className="text-sm text-neutral-50">{label}</span>
                    {index < labels.length - 1 && <span className="h-4 w-[1px] bg-neutral-10" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-50">{likes}</span>
            <button type="button" onClick={handleLike}>
              {isActive ? (
                <IconThumbUpFilled />
              ) : (
                <IconThumbUp className="text-neutral-40 hover:text-neutral-85" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pl-[66px]">
          <div className="flex flex-wrap gap-5">
            {tagsWithIcons.map(({ tag, icon }, index) => (
              <div
                key={index}
                className="flex h-[34px] items-center justify-center gap-2 rounded-10 border border-blue-5 px-4 text-body-small-desktop font-medium text-blue-30"
              >
                {icon}
                {tag}
              </div>
            ))}
          </div>
          <button
            onClick={toggleExpanded}
            type="button"
            className="flex h-[28px] w-[28px] items-center justify-center rounded-4 border active:bg-neutral-5"
          >
            {expanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-8 flex flex-col gap-9 border-t border-neutral-10 pt-7">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <span className="text-body-xsmall-desktop font-medium text-neutral-30">
                  필기 난이도
                </span>
                <span className="text-body-xsmall-desktop font-medium text-neutral-85">
                  {writtenDifficulty}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-body-xsmall-desktop font-medium text-neutral-30">
                  필기 공부
                </span>
                <span className="text-body-xsmall-desktop font-medium text-neutral-85">
                  {writtenStudy}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <span className="text-body-xsmall-desktop font-medium text-neutral-30">
                  실기 난이도
                </span>
                <span className="text-body-xsmall-desktop font-medium text-neutral-85">
                  {practicalDifficulty}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-body-xsmall-desktop font-medium text-neutral-30">
                  실기 공부
                </span>
                <span className="text-body-xsmall-desktop font-medium text-neutral-85">
                  {practicalStudy}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <span className="w-16 text-body-xsmall-desktop font-medium text-neutral-30">
              후기 및 팁
            </span>
            <p className="leading-relaxed text-neutral-100">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
