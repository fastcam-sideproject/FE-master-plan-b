import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'text-neutral-85 font-[400] bg-primary-40 hover:bg-primary-50 active:bg-primary-60 focus:bg-neutral-5 text-label-large-desktop ',
        secondary:
          'text-neutral-0 !text-neutral-0 font-[400] bg-neutral-85 hover:bg-neutral-80 active:bg-neutral-70 text-label-large-desktop',
        third:
          'text-neutral-80 bg-neutral-5 font-[400] hover:bg-neutral-10 active:bg-neutral-20 text-label-large-desktop',
        outline:
          'text-neutral-80 border border-neutral-20 bg-neutral-0 font-[400] hover:bg-neutral-5 active:bg-neutral-10 text-label-large-desktop',
        ghost:
          'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'rounded-3 px-[16px] py-[8px] gap-[10px]',
        md: 'rounded-4 px-[24px] py-[12px] gap-[10px]',
        lg: 'rounded-4 px-[32px] py-[16px] gap-[10px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
