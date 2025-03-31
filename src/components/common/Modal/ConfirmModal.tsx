import React from 'react';
import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Drawer, DrawerContent, DrawerOverlay } from '@/components/ui/drawer';

const ConfirmModalVariants = cva(
  'flex w-fit flex-col items-center justify-center gap-9 py-10 w-[467px] mobile:w-full rounded-9 mobile:rounded-none mobile:rounded-t-9 bg-neutral-0 desktop:shadow-2 tablet:shadow-2 mobile:pt-4 mobile:px-6 mobile:pb-9',
  {
    variants: {
      variant: { default: '', secondary: '' },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ConfirmModalProps extends VariantProps<typeof ConfirmModalVariants> {
  title1: string;
  title2?: string;
  subtitle: string;
  message1: string;
  message2?: string;
  cancelButtonLabel?: string;
  confirmButtonLabel: string;
  onCancel?: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({
  title1,
  title2,
  subtitle,
  message1,
  message2,
  cancelButtonLabel,
  confirmButtonLabel,
  variant = 'default',
  onCancel,
  onConfirm,
  ...props
}: ConfirmModalProps) => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');

  const content = (
    <div className={cn(ConfirmModalVariants({ variant }))} {...props}>
      <div className="flex flex-col items-center gap-5 text-center">
        {variant === 'default' && (
          <Image
            src="/images/character/web/popup.png"
            alt="팝업 이미지"
            width={175}
            height={175}
          />
        )}
        <div
          className={`flex flex-col items-center ${variant === 'secondary' && 'gap-5'}`}
        >
          <ul>
            <li className="text-body-xlarge-desktop font-[700] text-primary-50 mobile:text-body-xsmall-desktop">
              {subtitle}
            </li>
            <li className="text-title-large-desktop mobile:text-title-medium-desktop">
              {title1}
            </li>
            <li className="text-title-large-desktop mobile:text-title-medium-desktop">
              {title2}
            </li>
          </ul>
          {variant === 'secondary' && (
            <Image
              src="/images/character/web/popup.png"
              alt="팝업 이미지"
              width={175}
              height={175}
            />
          )}
          <ul
            className={`text-body-small-desktop text-neutral-30 mobile:text-body-xsmall-desktop ${variant === 'default' && 'mt-3'}`}
          >
            <li>{message1}</li>
            <li>{message2}</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5">
        {onCancel && (
          <Button
            label={cancelButtonLabel}
            size={`${isMobile ? 'sm' : 'lg'}`}
            variant={'third'}
            className="w-[150px] mobile:h-[46px] mobile:w-[163px]"
            onClick={onCancel}
          />
        )}
        <Button
          label={confirmButtonLabel}
          size={`${isMobile ? 'sm' : 'lg'}`}
          className="w-[150px] mobile:h-[46px] mobile:w-[163px]"
          onClick={onConfirm}
        />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={true}>
        {/* <DrawerOverlay /> */}
        <DrawerContent className="flex justify-center px-0">
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return content;
};

export default ConfirmModal;
