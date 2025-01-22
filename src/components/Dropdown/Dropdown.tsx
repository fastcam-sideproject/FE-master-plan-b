import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export function Dropdown() {
  const [expanded, setExpanded] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setExpanded(open);
  };
  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <button type="button" className="w-[165px] h-8 flex  items-center gap-[17px] px-4 py-2">
          <span className="min-w-8 text-body-xlarge-desktop font-normal">Label</span>
          <div className="w-[28px] h-[28px] border rounded-4 bg-neutral-5 stroke-normal">
            {expanded ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[239px] p-6 bg-neutral-0 border rounded-7 shadow-1"
        sideOffset={5}
      >
        <DropdownMenuItem className="text-neutral-85 p-3 text-body-large-desktop font-normal bg-neutral-0">
          Label 1
        </DropdownMenuItem>
        <DropdownMenuItem className="text-neutral-85 p-3 text-body-large-desktop font-normal bg-neutral-0">
          Label 2
        </DropdownMenuItem>
        <DropdownMenuItem className="text-neutral-85 p-3 text-body-large-desktop font-normal bg-neutral-0">
          Label 3
        </DropdownMenuItem>
        <DropdownMenuItem className="text-neutral-85 p-3 text-body-large-desktop font-normal bg-neutral-0">
          Label 4
        </DropdownMenuItem>
        <DropdownMenuItem className="text-neutral-85 p-3 text-body-large-desktop font-normal bg-neutral-0">
          Label 5
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
