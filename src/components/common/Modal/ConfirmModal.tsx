import React from 'react';
import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ConfirmModalVariants = cva(
  'flex w-fit flex-col items-center justify-center gap-8 rounded-9 bg-neutral-0 p-10 shadow-2',
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
  return (
    <div className={cn(ConfirmModalVariants({ variant }))} {...props}>
      <div className="flex flex-col items-center text-center">
        {variant === 'default' && (
          <Image
            src="/images/character/web/popup.png"
            alt="팝업 이미지"
            width={175}
            height={175}
          />
        )}
        <ul className="">
          <li className="text-body-xlarge-desktop font-[700] text-primary-50">
            {subtitle}
          </li>
          <li className="text-title-large-desktop">{title1}</li>
          <li className="text-title-large-desktop">{title2}</li>
        </ul>
        {variant === 'secondary' && (
          <Image
            src="/images/character/web/popup.png"
            alt="팝업 이미지"
            width={175}
            height={175}
          />
        )}
        <ul className="text-body-small-desktop text-neutral-30">
          <li>{message1}</li>
          <li>{message2}</li>
        </ul>
      </div>
      <div className="flex gap-5">
        {onCancel && (
          <Button
            label={cancelButtonLabel}
            size={'lg'}
            variant={'third'}
            className="w-[178px]"
            onClick={onCancel}
          />
        )}
        <Button
          label={confirmButtonLabel}
          size={'lg'}
          className="w-[178px]"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
};

export default ConfirmModal;
