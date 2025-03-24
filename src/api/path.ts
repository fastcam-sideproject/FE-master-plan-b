export const SIGN_UP_API_PATH = {
  verification: '/api/v1/member/verification',
  sendVerificationCode: '/api/v1/member/send-verification-code',
  create: '/api/v1/member/create',
};

export const USERS_API_PATH = {
  // 셋 모두 post 사용
  login: '/api/v1/member/login',
  logout: '/api/v1/member/logout',
  create: '/api/v1/member/create',
} as const;

export const MY_HISTORY_API_PATH = {
  // 내가 쓴 글 조회
  my: '/api/v1/posts/my',
  // 내가 좋아요한 글 조회
  liked: '/api/v1/posts/liked',
  // 내가 저장한 글 조회
  stored: '/api/v1/posts/stored',
  // 내가 저장한 글 등록 & 삭제(post)(//api/v1/{postId}/store)
  storeTo: '/api/v1',
  // 게시글 삭제(delete)
  // 게시글 수정(patch)
  posts: '/api/v1/posts',
} as const;

export const MY_EXAM_SESSION_API_PATH = {
  // 시험 일정 조회
  // schedules: '//api/v1/user-exam-sessions?year={year}&month={month}',
  schedules: '/api/v1/user-exam-sessions?year={year}&month={month}',
  // 시험 일정 상세, 수정, 삭제
  // schedulesDetail: '//api/v1/user-exam-sessions/{exam-sessions-id}',
  schedulesDetail: '/api/v1/user-exam-sessions/',
};

export const MY_STUDY_LOGS_API_PATH = {
  myStudyLogs: '/api/v1/study-logs',
};

export const MY_SPECS_API_PATH = {
  specs: '/api/v1/specs',
};
