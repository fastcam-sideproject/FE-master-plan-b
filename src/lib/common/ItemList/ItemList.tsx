import React, { useState } from 'react';
import {
  IconCalendarWeek,
  IconChevronDown,
  IconChevronUp,
  IconClock,
  IconThumbUp,
  IconUserFilled,
} from '@tabler/icons-react';
import { Avatar } from '../Avatar';

type ItemListProps = {
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
  '하루 1~2시간 학습': <IconClock size={20} />,
  비전공자: <IconUserFilled size={20} />,
  '6개월 준비': <IconCalendarWeek size={20} />,
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
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const handleLike = () => setLikes((prev) => prev + 1);

  const tagsWithIcons = tags.map((tag) => ({
    tag,
    icon: iconMap[tag],
  }));

  return (
    <div className="w-[1080px] px-9 py-8 bg-white border border-neutral-10 rounded-lg shadow-sm">
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <Avatar src="/icons/gnb/user-filled.svg" alt="아바타 아이콘" size="lg" />
            <div>
              <h3 className="text-neutral-85 font-medium text-lg">{title}</h3>
              <div className="flex items-center gap-3 mt-2">
                {labels.map((label, index) => (
                  <React.Fragment key={index}>
                    <span className="text-neutral-50 text-sm">{label}</span>
                    {index < labels.length - 1 && <span className="w-[1px] h-4 bg-neutral-10" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-50">{likes}</span>
            <button type="button" onClick={handleLike}>
              <IconThumbUp className="text-neutral-40" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pl-[66px]">
          <div className="flex gap-5 flex-wrap">
            {tagsWithIcons.map(({ tag, icon }, index) => (
              <div
                key={index}
                className="px-4 h-[34px] flex items-center justify-center gap-2 border rounded-10 border-blue-5 text-body-small-desktop font-medium text-blue-30"
              >
                {icon}
                {tag}
              </div>
            ))}
          </div>
          <button
            onClick={toggleExpanded}
            type="button"
            className="w-[28px] h-[28px] rounded-4 border bg-neutral-5 flex items-center justify-center"
          >
            {expanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-8 border-t border-neutral-10 pt-7 flex flex-col gap-9">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center">
                <span className="text-neutral-30 text-body-xsmall-desktop font-medium">
                  필기 난이도
                </span>
                <span className="text-neutral-85 text-body-xsmall-desktop font-medium">
                  {writtenDifficulty}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <span className="text-neutral-30 text-body-xsmall-desktop font-medium">
                  필기 공부
                </span>
                <span className="text-neutral-85 text-body-xsmall-desktop font-medium">
                  {writtenStudy}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center">
                <span className="text-neutral-30 text-body-xsmall-desktop font-medium">
                  실기 난이도
                </span>
                <span className="text-neutral-85 text-body-xsmall-desktop font-medium">
                  {practicalDifficulty}
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <span className="text-neutral-30 text-body-xsmall-desktop font-medium">
                  실기 공부
                </span>
                <span className="text-neutral-85 text-body-xsmall-desktop font-medium">
                  {practicalStudy}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <span className="w-16 text-body-xsmall-desktop font-medium text-neutral-30">
              후기 및 팁
            </span>
            <p className="text-neutral-100 leading-relaxed">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
