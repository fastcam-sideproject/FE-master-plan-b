'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type DropdownProps = {
  items: string[];
  color?: string;
  size?: string;
  title?: string;
};

export function Dropdown({
  items,
  color = 'bg-neutral-0',
  size = 'w-[239px]',
  title,
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title || '선택');

  const handleOpenChange = (open: boolean) => {
    setExpanded(open);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setExpanded(false);
  };

  const textColor = color === 'bg-neutral-90' ? 'text-neutral-0' : 'text-neutral-85';
  const focusColor = color === 'bg-neutral-90' ? 'focus:bg-neutral-70' : 'focus:bg-neutral-5';

  return (
    <div className="flex flex-col gap-2">
      {title && <h3 className="text-body-large-desktop font-medium text-neutral-85"></h3>}
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild className="focus:outline-none">
          <button
            type="button"
            className="flex h-8 w-fit items-center gap-[17px] px-4 py-2 text-neutral-85"
          >
            <span className="min-w-8 text-body-xlarge-desktop font-normal">{selectedItem}</span>
            <div className="h-[28px] w-[28px] rounded-4 border bg-neutral-5 stroke-normal">
              {expanded ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`${size} p-6 ${color} rounded-7 border shadow-1`}>
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className={`p-3 text-body-large-desktop font-normal focus:outline-none ${focusColor} ${textColor}`}
              onSelect={() => handleSelectItem(item)}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
