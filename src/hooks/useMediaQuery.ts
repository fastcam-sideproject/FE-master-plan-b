'use client';

// useMediaQuery를 임포트한 후 이 내용을 가져다 쓰세요!
// const isMobile = useMediaQuery('(max-width: 767.9px)');
// const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279.9px)');
// const isDesktop = useMediaQuery('(min-width: 1280px)');

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // 브라우저 환경에서만 실행되도록 체크
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);

      // 초기값 설정
      setMatches(media.matches);

      // 미디어 쿼리 변경 감지 함수
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // 이벤트 리스너 등록
      media.addEventListener('change', listener);

      // 클린업 함수
      return () => {
        media.removeEventListener('change', listener);
      };
    }
  }, [query]);

  return matches;
};
