import { useCallback } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.locale('ko');

const useGetTimeAgo = () => {
  const getTimeAgo = useCallback((uploadedDay: string) => {
    // UTC 문자열을 파싱하고 바로 한국 시간으로 변환
    const uploaded = dayjs.utc(uploadedDay).local();
    const now = dayjs();

    const diffInMinutes = now.diff(uploaded, 'minute');
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분`;
    }

    return uploaded.fromNow();
  }, []);

  return { getTimeAgo };
};

export default useGetTimeAgo;
