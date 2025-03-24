export const SIGNIN_ERROR_MESSAGE =
  '아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요.';

export const SIGNIN_FORMS = [
  {
    id: 'username',
    type: 'text',
    placeholder: '아이디를 입력해주세요.',
    required: '아이디를 입력하세요.',
    pattern: [
      {
        regExp: /^[a-zA-Z0-9_@.-]+$/,
      },
    ],
  },
  {
    id: 'password',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    required: '비밀번호를 입력하세요.',
    pattern: [
      {
        regExp: /^.{1,}$/,
      },
    ],
  },
] as const;
// 특수문자 !@#$%^&_+[]{}:,.<>?
