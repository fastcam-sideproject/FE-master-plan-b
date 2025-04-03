import { createApiCall, createPaginatedApiCall } from '@/lib/apiUtils';
import apiClient from '../apiClient';
import { EXAM_API_PATH } from '../path';
import {
  ApiResponse,
  EditCertificationInfo,
  EditCertificationResponse,
  ExamDetailResponse,
  ExamPostRequest,
  ExamPostResponse,
  ExamResponse,
} from './type';

export const certificatioinInfoApi = {
  getCertificationInfo: createPaginatedApiCall<ExamResponse>(
    (page, size) =>
      apiClient.get<ApiResponse<ExamResponse>>(
        `${EXAM_API_PATH.exams}?page=${page}&size=${size}`,
      ),
    '시험 정보 조회 실패',
  ),

  getCertificationInfoDetail: (examId: number) =>
    createApiCall<ExamDetailResponse>(
      () =>
        apiClient.get<ApiResponse<ExamDetailResponse>>(
          `${EXAM_API_PATH.exams}/${examId}`,
        ),
      '상세 시험 정보 조회 실패',
    ),

  postCertificationInfo: (data: ExamPostRequest) =>
    createApiCall<ExamPostResponse>(
      () =>
        apiClient.post<ApiResponse<ExamPostResponse>>(
          `${EXAM_API_PATH.exams}`,
          data,
        ),
      '시험 등록 실패',
    ),

  editCertificationInfo: (examId: number, data: EditCertificationInfo) =>
    createApiCall<EditCertificationResponse>(
      () =>
        apiClient.patch<ApiResponse<EditCertificationResponse>>(
          `${EXAM_API_PATH.exams}/${examId}`,
          data,
        ),
      '시험 수정 실패',
    ),
};
