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
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분`;
    }

    return uploaded.fromNow();
  }, []);

  return { getTimeAgo };
};

export default useGetTimeAgo;
