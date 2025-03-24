import { Suspense } from 'react';
import WelcomeContent from './WelcomeContent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WelcomeContent />
    </Suspense>
  );
}
