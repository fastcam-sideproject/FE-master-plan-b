'use client';

import { useEffect, useState } from 'react';

function MswWrapper({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (process.env.NODE_ENV === 'development') {
        const initMsw = await import('@/mocks/index').then((res) => res.initMsw);
        await initMsw();
        setMswReady(true);
      }
    };
    init();
  }, []);

  if (!mswReady && process.env.NODE_ENV === 'development') {
    return null;
  }

  return <>{children}</>;
}

export default MswWrapper;
