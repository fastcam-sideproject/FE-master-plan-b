import * as React from 'react';
import { cn } from '@/lib/utils';

const textareaStyles =
  'disabled:bg-neutral-5 text-body-medium-desktop placeholder:text-neutral-20 w-full pr-6 h-[320px] focus:outline-none text-neutral-85 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:ml-[20px] [&::-webkit-scrollbar-thumb]:bg-neutral-20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent resize-none';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, placeholder, ...props }, ref) => {
    return (
      <div
        className={cn(
          'border border-neutral-20 rounded-6 py-5 px-6 w-full max-w-[1048px]',
          disabled && 'bg-neutral-5',
        )}
      >
        <textarea
          className={cn(textareaStyles, className)}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
