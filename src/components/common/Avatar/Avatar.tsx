import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AvatarSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type AvatarProps = {
  size: AvatarSize | { mobile: AvatarSize; desktop: AvatarSize };
  src: string;
  alt: string;
};

const sizeClasses = {
  xl: 'w-[75px] h-[75px] rounded-6',
  lg: 'w-[60px] h-[60px] rounded-6',
  md: 'w-[40px] h-[40px] rounded-5',
  sm: 'w-[32px] h-[32px] rounded-4',
  xs: 'w-[24px] h-[24px] rounded-4',
};

const imageSizeClasses = {
  xl: 'w-[45px] h-[45px]',
  lg: 'w-[36px] h-[36px]',
  md: 'w-[24px] h-[24px]',
  sm: 'w-[19.2px] h-[19.2px]',
  xs: 'w-[14.4px] h-[14.4px]',
};

export function Avatar({ size, src, alt }: AvatarProps) {
  const [currentSize, setCurrentSize] = useState<AvatarSize>(
    typeof size === 'object' ? size.mobile : size,
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof size === 'object') {
        setCurrentSize(window.innerWidth < 768 ? size.mobile : size.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return (
    <div
      className={cn(
        sizeClasses[currentSize],
        'border:none bg-neutral-5 justify-center items-center inline-flex',
      )}
    >
      <img src={src} alt={alt} className={cn(imageSizeClasses[currentSize])} />
    </div>
  );
}
