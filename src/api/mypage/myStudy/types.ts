export interface StudyLogs {
  id: number;
  studyDate: string;
  totalStudyTimes: number;
  content: string;
  inputSource: string;
}

export interface PostStudyLogsRequest {
  examId: number;
  studyDate: string;
  hour: number;
  minute: number;
  content: string;
  inputSource: string;
}

export interface PostStudyLogsResponse extends PostStudyLogsRequest {
  id: number;
  totalStudyTimes: number;
}

export interface EditStudyLogsRequest {
  title: null;
  date: string;
  scheduleType: string;
  examType: null;
  subjects: [];
}

export interface EditStudyLogResponse extends EditStudyLogsRequest {
  id: number;
}
