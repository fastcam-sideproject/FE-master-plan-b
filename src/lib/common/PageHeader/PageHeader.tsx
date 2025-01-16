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
  variant: 'center-default' | 'center-large' | 'left-default' | 'left-small';
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
    'center-large': {
      container: 'flex flex-col items-center',
      title: 'text-3xl font-bold mt-4 text-center',
    },
    'left-default': {
      container: 'flex flex-col',
      title: 'text-2xl font-semibold mt-4',
    },
    'left-small': {
      container: 'flex flex-col',
      title: 'text-xl mt-4',
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
