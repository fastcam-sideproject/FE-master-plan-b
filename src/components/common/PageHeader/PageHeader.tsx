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
  title?: string;
  withTitle?: boolean;
  breadcrumbItems: BreadcrumbItems[];
  variant: 'center-default' | 'center-small' | 'left-default' | 'left-small';
  titleColor?: 'neutral-85' | 'neutral-0';
};

type VariantStyles = {
  container: string;
  title: (color: string) => string;
};

type Variants = {
  'center-default': VariantStyles;
  'center-small': VariantStyles;
  'left-default': VariantStyles;
  'left-small': VariantStyles;
};

export function PageHeader({
  title,
  withTitle = true,
  breadcrumbItems,
  variant,
  titleColor = 'neutral-85',
  className,
  ...props
}: PageHeaderProps) {
  const variants: Variants = {
    'center-default': {
      container: 'flex flex-col',
      title: (color: string) =>
        `w-[1200px] tablet:w-[688px] flex items-center justify-center text-heading-medium-desktop font-[400] leading-[140%] text-${color} py-3 px-6 text-center`,
    },
    'center-small': {
      container: 'flex flex-col',
      title: (color: string) =>
        `w-[1200px] tablet:w-[688px] flex items-center justify-center text-heading-small-desktop font-[400] leading-[140%] text-${color} py-3 px-6 text-center`,
    },
    'left-default': {
      container: 'flex flex-col',
      title: (color: string) =>
        `w-[1200px] tablet:w-[688px] flex items-center text-heading-medium-desktop font-[400] leading-[140%] text-${color} py-3 px-6 text-center`,
    },
    'left-small': {
      container: 'flex flex-col',
      title: (color: string) =>
        `w-[1200px] tablet:w-[688px] flex items-center text-heading-small-desktop font-[400] leading-[140%] text-${color} py-3 px-6 text-center`,
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
      {withTitle === true && (
        <h1 className={variants[variant].title(titleColor)}>{title}</h1>
      )}
    </div>
  );
}
