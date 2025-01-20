import React from 'react';
import { cn } from '@/lib/utils';

type AvatarSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type AvatarProps = {
  size: AvatarSize;
  src: string;
  alt: string;
  className?: string;
};

const sizeClasses = {
  xl: 'w-[75px] h-[75px] p-[18.75px] rounded-6',
  lg: 'w-[60px] h-[60px] p-[18.75px] rounded-6',
  md: 'w-[40px] h-[40px] p-[10px] rounded-5',
  sm: 'w-[32px] h-[32px] p-[8px] rounded-4',
  xs: 'w-[24px] h-[24px] p-[6px] rounded-4',
};

const imageSizeClasses = {
  xl: 'w-[45px] h-[45px]',
  lg: 'w-[36px] h-[36px]',
  md: 'w-[24px] h-[24px]',
  sm: 'w-[19.2px] h-[19.2px]',
  xs: 'w-[14.4px] h-[14.4px]',
};

export function Avatar({ size, src, alt }: AvatarProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        'border:none bg-neutral-5 justify-center items-center inline-flex',
      )}
    >
      <img src={src} alt={alt} className={cn(imageSizeClasses[size])} />
    </div>
  );
}
