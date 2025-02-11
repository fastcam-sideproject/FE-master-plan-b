import { useCallback } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

const useGetTimeAgo = () => {
  const getTimeAgo = useCallback((uploadedDay: string) => {
    const uploaded = dayjs(uploadedDay);
    const now = dayjs();
    const diffInMinutes = now.diff(uploaded, 'minute');
    const diffInHours = now.diff(uploaded, 'hour');
    const diffInDays = now.diff(uploaded, 'day');

    if (diffInMinutes < 60) {
      return `${diffInMinutes}분`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간`;
    } else {
      return `${diffInDays}일`;
    }
  }, []);

  return { getTimeAgo };
};

export default useGetTimeAgo;
