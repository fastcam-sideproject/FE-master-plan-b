'use client';

import BtnOnboarding from '@/components/Onboarding/BtnOnboarding';
import OnboardingSubject from '@/components/Onboarding/OnboardingSubject';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function StepIsFavorite() {
  const router = useRouter();
  return (
    <>
      <div>
        <OnboardingSubject title={<>관심있는 자격증을 선택해주세요</>} p={'선택한 분야에 맞게 자격증을 추천해드릴게요!'} />
        <div className='flex justify-center mt-10 gap-9'>
          <BtnOnboarding type={'general'} />
          <BtnOnboarding type={'specific'} />
        </div>
      </div>
      <div className='w-full flex justify-end gap-4'>
        <Button
          type="button"
          variant={'third'}
          size={'lg'}
          label="이전"
          onClick={() => { router.push("/onboarding/step1"); }}
        />
        <Button
          type="button"
          variant={'default'}
          size={'lg'}
          label="다음"
          onClick={() => { router.push("/onboarding/step3"); }}
        />
      </div>
    </>

  );
}