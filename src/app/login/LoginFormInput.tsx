'use client';

import { useFormContext } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';
import { LOGIN_FORMS } from './constants';
import Input from './LoginInput';

interface LoginFormInputProps {
  form: (typeof LOGIN_FORMS)[number];
  error?: FieldError;
}

const LoginFormInput = ({
  form: { id, type, placeholder, required },
  error,
}: LoginFormInputProps) => {
  const { register } = useFormContext();

  return (
    <Input
      type={type}
      placeholder={error?.type === 'required' ? error.message : placeholder}
      autoComplete="off"
      state={error ? 'error' : 'default'}
      {...register(id, {
        required: required,
      })}
    />
  );
};

export default LoginFormInput;
