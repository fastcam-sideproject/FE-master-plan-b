import { apiClient } from '../../apiClient';
import { MY_STUDY_LOGS_API_PATH } from '../../path';
import {
  StudyLogs,
  PostStudyLogsRequest,
  PostStudyLogsResponse,
} from './types';

export const studyLogsApi = {
  // 학습 기록 조회
  getMyLog: async ({ year, month }: { year: number; month: number }) => {
    return await apiClient.get<StudyLogs>(
      `${MY_STUDY_LOGS_API_PATH.myStudyLogs}?year=${year}&month=${month}`,
    );
  },
  // 학습 기록 상세 조회
  getMyLogDetail: async (id: number) => {
    return await apiClient.get<StudyLogs>(
      `${MY_STUDY_LOGS_API_PATH.myStudyLogs}/${id}`,
    );
  },
  // 학습 기록 작성
  postMyLogDetail: async () => {
    return await apiClient.post<PostStudyLogsRequest>(
      `${MY_STUDY_LOGS_API_PATH.myStudyLogs}`,
    );
  },
  // 학습 기록 수정
  patchMyLogDetail: async (id: number) => {
    return await apiClient.patch<PostStudyLogsRequest>(
      `${MY_STUDY_LOGS_API_PATH.myStudyLogs}/${id}`,
    );
  },
  // 학습 기록 삭제
  deleteMyLogDetail: async (id: number) => {
    return await apiClient.delete(
      `${MY_STUDY_LOGS_API_PATH.myStudyLogs}/${id}`,
    );
  },
};
