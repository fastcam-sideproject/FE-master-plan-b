import { ReactNode } from 'react';
import clsx from 'clsx';

type ContentsHeaderProps = {
  size: 'large' | 'medium' | 'small';
  title: string;
  description: string;
  icon?: ReactNode;
};

export function ContentsHeader({ size, title, description, icon }: ContentsHeaderProps) {
  const sizeStyles = {
    large: {
      title: 'text-title-large-desktop font-[400] text-neutral-85',
      desc: 'text-body-large-desktop font-[400] text-neutral-50',
      iconSize: 'w-7 h-7',
      gap: 'gap-4',
    },
    medium: {
      title: 'text-title-medium-desktop font-[400] text-neutral-85',
      desc: 'text-body-medium-desktop font-[400] text-neutral-50',
      iconSize: 'w-7 h-7',
      gap: 'gap-3',
    },
    small: {
      title: 'text-title-small-desktop font-[400] text-neutral-85',
      desc: 'text-body-small-desktop font-[400] text-neutral-50',
      iconSize: 'w-7 h-7',
      gap: 'gap-2',
    },
  };

  return (
    <div className={clsx('w-[674px] flex flex-col', sizeStyles[size].gap)}>
      <div className="flex items-center gap-3">
        {icon && <div className={clsx(sizeStyles[size].iconSize)}>{icon}</div>}
        <h2 className={clsx(sizeStyles[size].title)}>{title}</h2>
      </div>
      <p className={clsx(sizeStyles[size].desc)}>{description}</p>
    </div>
  );
}
