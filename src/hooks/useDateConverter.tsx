import { useCallback } from 'react';

function useDateConverter() {
  const convertToDate = useCallback((dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }, []);

  return { convertToDate };
}

export default useDateConverter;
