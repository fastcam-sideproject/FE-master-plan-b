'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/*
**dropdown 사용**
- size의 기본값은 'lg'입니다. 알맞은 항목을 선택해 주세요.
- variant의 기본값은 'default'입니다. 알맞은 항목을 선택해 주세요.
- size -> width: 사이즈 옵션 적용에 따라 기존의 (너비 적용을 위한) size를 width로 고쳤습니다. 기본값은 w-[200px].
- 컴포넌트 사용 시 사용하려는 곳에서 알맞은 너비를 적용해 주세요.
- title 항목이 없으면 타이틀 자리에 자동으로 '[ 선택 ]' 텍스트가 출력됩니다.
- items={['텍스트1', '텍스트2', '텍스트3']}와 같이 콘텐츠가 들어갈 자리에 배열데이터로 string을 입력해 주세요.
*/

const dropdownBoxVariants = cva('flex flex-col gap-2 w-fit h-fit', {
  variants: {
    variant: {
      default: 'bg-neutral-0',
      dark: 'bg-neutral-85',
    },
    size: {
      default: '',
      lg: 'text-body-large-desktop',
      sm: 'text-body-medium-desktop',
      lgOutline:
        'text-body-large-desktop border border-neutral-10 rounded-4 px-7 py-5',
      smOutline:
        'text-body-medium-desktop border border-neutral-85 border border-neutral-10 rounded-4 px-6 py-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
});

const dropdownMenuItemVariants = cva('', {
  variants: {
    variant: {
      default:
        'focus:bg-neutral-70 py-3 text-body-large-desktop font-normal focus:outline-none text-neutral-0 px-8',
    },
    size: {
      default: '',
      lg: 'px-8', // 중복 코드라 의미는 없으나 가독성을 위해 추가함
      sm: 'px-7',
      lgOutline: 'focus:bg-neutral-5 text-neutral-85',
      smOutline: 'focus:bg-neutral-5 text-neutral-85',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
  },
});

type DropdownProps = {
  items: string[];
  size?: 'default' | 'lg' | 'sm' | 'lgOutline' | 'smOutline';
  title?: string;
  width?: string;
  variant?: 'default' | 'dark';
};

export function Dropdown({
  items,
  size = 'lg',
  title,
  width = 'w-[200px]',
  variant = 'default',
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title || '[ 선택 ]');

  const handleOpenChange = (open: boolean) => {
    setExpanded(open);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setExpanded(false);
  };

  return (
    <div className={cn(dropdownBoxVariants({ variant, size }), width)}>
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild className="focus:outline-none">
          <button
            type="button"
            className={cn(`flex w-full items-center justify-between`)}
          >
            <span
              className={cn(
                'min-w-8 font-normal',
                variant === 'dark' ? 'text-neutral-0' : 'text-neutral-85',
              )}
            >
              {selectedItem}
            </span>
            <div
              className={cn(
                'box-border flex items-center justify-center rounded-4',
                variant === 'dark'
                  ? 'border border-neutral-70 bg-transparent'
                  : 'border bg-neutral-5 stroke-normal',
                size === 'lg' ? 'size-[28px]' : 'size-7',
                size === 'lg' && variant === 'dark' ? 'size-8' : 'size-7',
                (size === 'lgOutline' || size === 'smOutline') &&
                  'h-fit w-fit border-none bg-transparent',
              )}
            >
              {variant === 'dark' ? (
                expanded ? (
                  <IconCaretUpFilled
                    className="text-neutral-0"
                    size={size === 'lg' ? 28 : 20}
                  />
                ) : (
                  <IconCaretDownFilled
                    className="text-neutral-0"
                    size={size === 'lg' ? 28 : 20}
                  />
                )
              ) : expanded ? (
                <IconChevronUp size={size === 'lg' ? 24 : 20} />
              ) : (
                <IconChevronDown size={size === 'lg' ? 24 : 20} />
              )}
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(
            width,
            'rounded-6 bg-neutral-90 py-6',
            size === 'lg' && 'mt-5 shadow-1',
            size === 'sm' && 'mt-5 shadow-1',
            size === 'lgOutline' && 'mt-7 rounded-4 bg-neutral-0',
            size === 'smOutline' && 'mt-6 rounded-4 bg-neutral-0',
          )}
        >
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className={cn(
                dropdownMenuItemVariants({ variant: 'default', size }),
              )}
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
