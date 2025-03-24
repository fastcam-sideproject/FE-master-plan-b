'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  requirText?: boolean;
  optionalText?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    { className, label, requirText = false, optionalText = false, ...props },
    ref,
  ) => (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'peer h-6 w-6 shrink-0 rounded-3 border border-neutral-40 border-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:border-neutral-50 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="flex">
        {requirText && (
          <span className="text-body-xsmall-desktop text-red-40">[필수]</span>
        )}
        {optionalText && (
          <span className="text-body-xsmall-desktop text-neutral-40">
            [선택]
          </span>
        )}
        {label && (
          <label
            className="cursor-pointer text-body-xsmall-desktop font-[400]"
            onClick={() => props.onCheckedChange?.(!props.checked)}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
