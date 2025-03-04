import * as React from 'react';
import { cn } from '@/lib/utils';

const baseStyles = 'w-full max-w-[1048px] resize-none rounded-6 border border-neutral-20 px-6 py-5';
const textareaStyles = cn(
  baseStyles,
  'disabled:bg-neutral-5 box-border text-body-medium-desktop placeholder:text-neutral-20',
  'focus:outline-none text-neutral-85',
  '[&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:ml-[20px]',
  '[&::-webkit-scrollbar-thumb]:bg-neutral-20 [&::-webkit-scrollbar-thumb]:rounded-full',
  '[&::-webkit-scrollbar-track]:bg-transparent',
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, placeholder, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaStyles, disabled && 'bg-neutral-5', className)}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
