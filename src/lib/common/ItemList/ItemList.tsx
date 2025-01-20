import { IconChevronDown, IconThumbUp, IconUserFilled, IconChevronUp } from '@tabler/icons-react';
import React from 'react';
import { Button } from '@/components/ui/button';

type ItemListProps = {
  title: string;
  labels: string[];
  content: string;
  expanded: boolean;
  onToggle: () => void;
};

export function ItemList({ title, labels, content, expanded, onToggle }: ItemListProps) {
  return (
    <div className="w-[1080px] px-9 py-8 bg-white border border-neutral-10 rounded-7 bg-neutral-0">
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] p-[18.75px] border rounded-6 bg-neutral-5 flex items-center justify-center">
              <IconUserFilled size={36} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-neutral-85 text-body-xlarge-desktop font-medium ">{title}</h3>
              <div className="flex items-center gap-3">
                {labels.map((label, index) => (
                  <React.Fragment key={index}>
                    <span className="text-neutral-50 text-body-xsmall-desktop font-medium">
                      {label}
                    </span>
                    {index < labels.length - 1 && (
                      <div className="w-[1px] h-[14px] border border-neutral-10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-body-xsmall-desktop font-medium leading-[150%] text-neutral-50">
              00
            </span>
            <button type="button">
              <IconThumbUp className="size-7 text-neutral-40" />
            </button>
          </div>
        </div>
        <div className="pl-[66px] flex justify-between items-center">
          <div className="flex gap-4">
            {labels.map((label, index) => (
              <div
                key={index}
                className="px-4 py-1 rounded-full border border-primary-10 flex items-center gap-1"
              >
                <div className="w-5 h-5 bg-primary-40" />
                <span className="text-primary-40 text-[15px]">{label}</span>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={onToggle}
            className="w-[28px] h-[28px] rounded-4 border border-neutral-20 bg-neutral-5"
          >
            {expanded ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
          </Button>
        </div>
      </div>
      {expanded && (
        <div className="mt-8">
          <div className="pt-6 border-t border-neutral-20">
            <div className="flex gap-6">
              <div className="flex gap-4">
                <div className="w-16 flex flex-col gap-2">
                  <span className="text-neutral-40 text-sm">필기 난이도</span>
                  <span className="text-neutral-40 text-sm">필기 공부</span>
                </div>
                <div className="w-16 flex flex-col gap-2">
                  <span className="text-neutral-100 text-sm">{labels[0]}</span>
                  <span className="text-neutral-100 text-sm">{labels[1]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <span className="w-16 text-neutral-40 text-sm">후기 및 팁</span>
            <p className="flex-1 text-neutral-100 text-base font-['AppleSDGothicNeoR00'] leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
