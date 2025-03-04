export type StudyInfo = {
  time: number;
  minute: number;
  memo: string;
};

export type ClickedDate = {
  year: number;
  month: number;
  day: number;
} | null;

export type HexagonCalendarProps = {
  date: string[];
  studyInfo: {
    [key: string]: StudyInfo;
  };
  bg: 'light' | 'dark';
  size: 'large' | 'small';
  className?: string;
  classNames?: Partial<Record<string, string>>;
};
