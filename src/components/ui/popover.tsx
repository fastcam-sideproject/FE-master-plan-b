import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const popoverVariants = cva('text-center', {
  variants: {
    variant: { default: '' },
    mode: {
      // 작은 말풍선
      light: 'bg-[rgba(255,255,255,0.7)] relative w-fit px-6 py-5 rounded-4 m-3',
      dark: 'bg-[rgba(28,28,28,0.7)] relative w-fit px-6 py-5 rounded-4 m-3',
      // 큰 말풍선
      big: 'w-[263px] h-[136px] bg-neutral-90 rounded-10 flex !justify-center items-center',
    },
    tipColor: {
      light: 'after:border-t-[rgba(255,255,255,0.7)] after:border-b-[rgba(255,255,255,0.7)]',
      dark: 'after:border-t-[rgba(28,28,28,0.7)] after:border-b-[rgba(28,28,28,0.7)]',
    },
    tipDirection: {
      down: 'after:content-[""] after:absolute after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-t-[6px] after:-bottom-[6px]',
      up: 'after:content-[""] after:absolute after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-b-[6px] after:-top-[6px]',
    },
    tipPosition: {
      start: 'after:left-5',
      center: 'after:left-1/2 after:-translate-x-1/2',
      end: 'after:right-5',
    },
    // 큰 말풍선 화살표표 위치
    bigTipPosition: {
      start: 'after:left-5',
      end: 'after:right-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    mode: 'dark',
    tipDirection: 'down',
    tipColor: 'dark',
    tipPosition: 'start',
    bigTipPosition: 'start',
  },
});

const textVariants = cva('', {
  variants: {
    text: {
      light: 'text-label-small-desktop text-neutral-80 font-bold',
      dark: 'text-label-small-desktop text-neutral-0 font-bold',
      big: 'text-body-small-desktop text-neutral-0 font-medium w-[160px] h-[104px]',
    },
  },
  defaultVariants: {
    text: 'dark',
  },
});

interface PopoverProps
  extends VariantProps<typeof popoverVariants>,
    VariantProps<typeof textVariants> {
  className?: string;
  label: string;
}

const Popover = ({
  className,
  label,
  variant,
  mode,
  text,
  tipDirection,
  tipColor,
  tipPosition,
  bigTipPosition,
  ...props
}: PopoverProps) => {
  // mode가 big이 '아닐 때만' 말풍선 화살표에 tailwind 적용
  const shouldShowTailwindTip = mode !== 'big';

  return (
    <div
      className={cn(
        popoverVariants({
          variant,
          mode,
          ...(shouldShowTailwindTip && {
            tipDirection,
            // 팁의 색상은 mode의 설정을 추종함
            tipColor: mode,
            tipPosition,
          }),
        }),
        className,
      )}
      {...props}
    >
      {/* 글씨 색상은 mode의 설정을 추종함 */}
      <div className={cn(textVariants({ text: mode === 'light' ? 'light' : text }))}>{label}</div>
      {/* mode가 big인 경우에만 다음과 같은 말풍선 화살표가 등장함 */}
      {mode === 'big' && (
        <div className="absolute bottom-0">{/* 여기에 SVG 컴포넌트를 추가하시면 됩니다 */}</div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';

export { Popover };
