import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// todo: 버튼에 들어갈 아이콘 확인 후 필요한 것만 항목 추가할 것.
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'text-neutral-85 font-medium bg-primary-40 hover:bg-primary-50 active:bg-primary-60 disabled:bg-neutral-5 disabled:text-neutral-20 text-label-large-desktop gap-[10px]',
        secondary:
          'text-neutral-0 !text-neutral-0 font-medium bg-neutral-85 hover:bg-neutral-80 active:bg-neutral-70 disabled:bg-neutral-5 disabled:text-neutral-20  disabled:!text-neutral-20 text-label-large-desktop gap-3',
        third:
          'text-neutral-80 bg-neutral-10 font-medium hover:bg-neutral-20 active:bg-neutral-20 disabled:bg-neutral-5 disabled:text-neutral-20 text-label-large-desktop gap-[10px]',
        outline:
          'text-neutral-80 border border-neutral-20 bg-neutral-0 font-medium hover:bg-neutral-5 active:bg-neutral-10 disabled:bg-neutral-5 disabled:text-neutral-20 text-label-large-desktop',
        text: 'text-neutral-80 font-medium hover:font-bold disabled:text-neutral-20',
        round: 'rounded-10',
        // 링크, 기타 버튼에 사용되는 항목
        none: '',
      },
      size: {
        default: '',
        sm: 'rounded-4 px-[16px] py-[8px] gap-[10px] text-label-small-desktop',
        md: 'rounded-4 px-[24px] py-[12px] gap-[10px] text-label-medium-desktop',
        lg: 'rounded-5 px-[32px] py-[16px] gap-[10px] text-label-large-desktop',
        icon: 'h-10 w-10',
      },
      // 텍스트 사이즈만
      textSize: {
        default: '',
        sm: 'text-label-small-desktop',
        md: 'text-label-medium-desktop',
        lg: 'text-label-large-desktop',
      },
      textColor: {
        default: '',
        dark: 'text-neutral-80',
        gray: 'text-neutral-20',
        strong: 'text-neutral-80 font-[800]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      textSize: 'default',
      textColor: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withIcon?: boolean;
  label?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      withIcon = false,
      label,
      onClick,
      onSubmit,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const iconSize = size === 'sm' ? '16px' : '20px';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        onSubmit={onSubmit}
        {...props}
      >
        {withIcon === true && (
          <img
            src="/icons/active/check.svg"
            alt="button icon"
            className="bg-neutral-0"
            width={iconSize}
            height={iconSize}
          />
        )}
        {label || children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
