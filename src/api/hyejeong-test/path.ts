export const MY_HISTORY_API_PATH = {
  // 내가 쓴 글 조회
  my: 'api/v1/posts/my',
  // 내가 좋아요한 글 조회
  like: 'api/v1/posts/liked',
  // 내가 저장한 글 조회
  stored: 'api/v1/posts/stored',
  // 게시글 삭제(delete)
  // 게시글 수정(patch)
  posts: '/api/v1/posts',
} as const;

export const MY_EXAM_SESSION_API_PATH = {
  // 시험 일정 조회
  schedules: '/api/v1/user-exam-sessions?year={year}&month={month}',
  // 시험 일정 상세, 수정, 삭제
  schedulesDetail: '/api/v1/user-exam-sessions/{exam-sessions-id}',
};

export const MY_STUDY_LOGS_API_PATH = {
  // 학습 기록 작성
  record: '/api/v1/study-logs',
  // 학습 기록 상세 조회(get)
  // 학습 기록 수정(patch)
  // 학습 기록 삭제(delete)
  detailRecord: '/api/v1/study-logs/{study-log-id}',
  // 학습 기록 조회
  getMyRecord: `/api/v1/study-logs?year=year&month=month`,
};
