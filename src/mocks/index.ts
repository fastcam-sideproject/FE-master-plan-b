export async function initMsw() {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      const { server } = await import('./server');
      server.listen();
    } else {
      const { worker } = await import('./browser');
      await worker.start();
    }
  }
}
