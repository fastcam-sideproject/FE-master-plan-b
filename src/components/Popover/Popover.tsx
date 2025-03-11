import React from 'react';
import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 코드 설명
// mode: 말풍선의 밝기, 크기를 나타냅니다. 밝은 말풍선을 light, 어두운 말풍선은 dark, 큰 말풍선은 big을 써 주세요.
// mode를 선택하면 tipColor는 자동으로 반영됩니다.
// tipDirection: 말풍선 꼭지를 위에 둘지 아래에 둘지 선택합니다. down은 상자 아래, up은 상자 위에 꼭지가 있습니다.
// tipPosition: 말풍선 꼭지를 왼쪽/가운데/오른쪽 셋 중 어디에 둘지 선택합니다. start는 왼쪽, center는 가운데, end는 오른쪽입니다.
// textVariants는 light, dark, big 모드를 추종해 자동으로 반영됩니다.

// 사용법(가운데에 팁이 있는 말풍선 활용하기)
// const [isPopoverVisible1, setIsPopoverVisible1] = useState(false);
{
  /* <li className="relative w-fit">
  <IconHelp
    onMouseEnter={() => setIsPopoverVisible1(true)}
    onMouseLeave={() => setIsPopoverVisible1(false)}
  />
  {isPopoverVisible1 && (
    <Popover
      label="대표 배지를 설정하고 프로필에 등록해 봐요"
      mode="light"
      tipDirection="up"
      tipPosition="center"
    />
  )}
</li>; */
}

const popoverTipPath = '/images/popoverTip.svg';

const popoverVariants = cva('text-center', {
  variants: {
    variant: { default: '' },
    mode: {
      // 작은 말풍선
      light:
        'bg-[rgba(255,255,255,0.7)] absolute w-fit min-w-[200px] whitespace-nowrap px-6 py-5 rounded-4 box-border',
      dark: 'bg-[rgba(28,28,28,0.7)] absolute w-fit min-w-[200px] whitespace-nowrap px-6 py-5 rounded-4 box-border',
      // 큰 말풍선
      big: 'w-[263px] h-[136px] bg-neutral-80 rounded-10 flex !justify-center items-center absolute z-0',
    },
    tipColor: {
      light: 'after:border-t-[rgba(255,255,255,0.7)] after:border-b-[rgba(255,255,255,0.7)]',
      dark: 'after:border-t-[rgba(28,28,28,0.7)] after:border-b-[rgba(28,28,28,0.7)]',
    },
    tipDirection: {
      up: 'top-full mt-[6px] after:content-[""] after:absolute after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-b-[6px] after:-top-[6px] z-50',
      down: 'bottom-full mb-[6px] after:content-[""] after:absolute after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-t-[6px] after:-bottom-[6px] z-50',
    },
    tipPosition: {
      start: '[&:after]:!left-5 [&:after]:!right-auto left-[-10px]',
      center:
        '[&:after]:!left-1/2 [&:after]:!-translate-x-1/2 [&:after]:!right-auto left-1/2 -translate-x-1/2',
      end: '[&:after]:!right-5 [&:after]:!left-auto right-[-10px]',
    },
    // 큰 말풍선 화살표 위치
    bigTipPosition: {
      start: 'after:left-4',
      end: 'after:right-4',
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
      big: 'text-body-small-desktop text-neutral-0 font-medium w-[160px] h-[104px] font-regular',
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
        // big 모드일 때는 추가 스타일 제거
        mode === 'big' ? 'mb-[20px] after:border-none' : '',
        className,
      )}
      {...props}
    >
      {/* 글씨 색상은 mode의 설정을 추종함 */}
      <div
        className={cn(
          textVariants({ text: mode }),
          // big 모드일 때 z-index 추가
          mode === 'big' ? 'relative z-10 h-fit' : '',
        )}
      >
        {label}
      </div>
      {/* mode가 big인 경우에만 다음과 같은 말풍선 화살표가 등장함 */}
      {mode === 'big' && (
        <div
          className={cn(
            "absolute bottom-[-20px] z-0 before:content-['']",
            // bigTipPosition에 따라 위치와 좌우반전 적용
            bigTipPosition === 'start' ? 'left-4 [&>img]:scale-x-[-1]' : 'right-4',
          )}
        >
          <Image src={popoverTipPath} alt="popover tip" width={101.05} height={61} />
        </div>
      )}
    </div>
  );
};

export default Popover;
