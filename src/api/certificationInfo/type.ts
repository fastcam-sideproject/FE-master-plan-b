export interface ExamContent {
  name: string;
  specCategory: string;
  applyStartDate: string;
  examStartDate: string;
  isBookmarked: boolean;
}

export interface ExamResponse {
  page: number;
  size: number;
  totalElements: number;
  content: ExamContent[];
  hasNext: boolean;
}

export interface ExamDetailResponse {
  name: string;
  issuingOrganization: string;
  certificationType: string; //'NATIONAL_TECHNICAL';
  isBookmarked: boolean;
  preparation: string;
  eligibility: string;
  examStructure: string;
  passingCriteria: string;
}

export interface ExamPostRequest {
  name: string; //name
  participantCount: number; //0
  applyStartDate: string; //"2025-04-02",
  applyEndDate: string; //"2025-04-02",
  examStartDate: string; //"2025-04-02",
  examDetailId: number; //0
}

export interface ExamPostResponse extends ExamPostRequest {
  examId: number; //0
}

export type EditCertificationInfo = Omit<ExamPostRequest, 'examId'>;

export interface EditCertificationResponse extends ExamDetailResponse {
  participantCount: number;
  applyStartDate: string;
  applyEndDate: string;
  examStartDate: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
