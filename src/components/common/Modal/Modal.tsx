import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ConfirmModal from './ConfirmModal';
import InputModal from './InputModal';

// 일정 추가 모달
// 자격증 등록 모달
// 자격증 취득 질문 모달
// 수고 많았어 모달

// 돌아가기, 나중에 등록하기, 다음에 남길게요 --> cancel 버튼
// 보러 가기, 후기 남길래요 --> 특정 페이지로 이동
// 자격증 등록하기 --> 자격증 등록 모달로 이동

interface BaseModalProps {
  type: 'confirm' | 'input';
  onCancel?: () => void;
  onConfirm: () => void;
  closeOnOutsideClick?: boolean;
}

interface ConfirmModalProps extends BaseModalProps {
  type: 'confirm';
  title1: string;
  title2?: string;
  subtitle: string;
  message1: string;
  message2?: string;
  cancelButtonLabel?: string;
  confirmButtonLabel: string;
  variant?: 'default' | 'secondary';
}

interface InputModalProps extends BaseModalProps {
  type: 'input';
}

type ModalProps = ConfirmModalProps | InputModalProps;

export default function Modal(props: ModalProps) {
  const isMobile = useMediaQuery('(min-width: 767.9px)');
  const handleOutsideClick = () => {
    if (props.closeOnOutsideClick && props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-40"
        onClick={handleOutsideClick}
      />
      <div
        className="fixed inset-0 flex items-center justify-center"
        onClick={handleOutsideClick}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {props.type === 'confirm' ? (
            <ConfirmModal {...props} />
          ) : (
            <InputModal {...props} />
          )}
        </div>
      </div>
    </div>
  );
}
