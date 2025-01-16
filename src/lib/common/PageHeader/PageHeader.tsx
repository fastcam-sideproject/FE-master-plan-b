import React from 'react';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BreadcrumbItems = {
  label: string;
  href: string;
};

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  breadcrumbItems: BreadcrumbItems[];
  variant: 'center-default' | 'center-small' | 'left-default' | 'left-small';
};

export function PageHeader({
  title,
  breadcrumbItems,
  variant,
  className,
  ...props
}: PageHeaderProps) {
  const variants = {
    'center-default': {
      container: 'flex flex-col',
      title:
        'w-[1200px] flex items-center justify-center text-heading-medium-desktop font-[400] leading-[140%] text-neutral-85 py-3 px-6 text-center',
    },
    'center-small': {
      container: 'flex flex-col',
      title:
        'w-[1200px] flex items-center justify-center text-heading-small-desktop font-[400] leading-[140%] text-neutral-85 py-3 px-6 text-center',
    },
    'left-default': {
      container: 'flex flex-col',
      title:
        'w-[1200px] flex items-center text-heading-medium-desktop font-[400] leading-[140%] text-neutral-85 py-3 px-6 text-center',
    },
    'left-small': {
      container: 'flex flex-col',
      title:
        'w-[1200px] flex items-center text-heading-small-desktop font-[400] leading-[140%] text-neutral-85 py-3 px-6 text-center',
    },
  };

  return (
    <div className={cn(variants[variant].container, className)} {...props}>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={variants[variant].title}>{title}</h1>
    </div>
  );
}
