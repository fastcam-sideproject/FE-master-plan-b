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
};

export function Dropdown({ items, color = 'bg-neutral-0', size = 'w-[239px]' }: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Label');

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
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <button
          type="button"
          className="w-[165px] h-8 flex items-center gap-[17px] px-4 py-2 text-neutral-85"
        >
          <span className="min-w-8 text-body-xlarge-desktop font-normal">{selectedItem}</span>
          <div className="w-[28px] h-[28px] border rounded-4 bg-neutral-5 stroke-normal">
            {expanded ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${size} p-6 ${color} border rounded-7 shadow-1`}>
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
  );
}
