import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

//TODO: input 옵션이 더 추가될 경우, inputVariants의 내용을 조금 더 정돈할 예정임

const inputVariants = cva('flex w-full text-neutral-85 font-medium', {
  variants: {
    variant: {
      default:
        'max-w-[1048px] px-6 py-4 rounded-6 border border-neutral-20 focus:outline-none disabled:bg-neutral-5 placeholder:text-neutral-20',
      secondary:
        'h-full p-0 text-center border-none [&::-webkit-inner-spin-button]:appearance-none',
    },
    size: {
      default: '',
      text_md: 'text-body-medium-desktop',
      text_lg: 'text-body-large-desktop',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, disabled, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        disabled={disabled}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
