import React, { ReactNode } from 'react';
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
  if (props.type === 'confirm') {
    return <ConfirmModal {...props} />;
  }
  return <InputModal {...props} />;
}
