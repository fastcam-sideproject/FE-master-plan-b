'use client';

import { useRouter } from 'next/navigation';
import { Dropdown } from '@/components/Dropdown';
import { Button } from '@/components/ui/button';
import OnboardingSubject from '@/components/Onboarding/OnboardingSubject';


const ageItems = ["10대", "20대", "30대", "40대", "50대이상"];

function StepAge() {
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col gap-16'>
        <OnboardingSubject title={<>더 정확한 추천을 위해<br /> 연령대를 선택해주세요</>} p={'연령대에 맞춰 인기 자격증을 추천해드려요!'} />
        <div className='w-full'>
          <Dropdown items={ageItems} />
        </div>
      </div>
      <div className='w-full flex justify-end gap-4'>
        <Button
          type="button"
          variant={'third'}
          size={'lg'}
          label="이전"
          onClick={() => { router.push("/onboarding"); }}
        />
        <Button
          type="button"
          variant={'default'}
          size={'lg'}
          label="다음"
          onClick={() => { router.push("/onboarding/step2"); }}
        />
      </div>
    </>

  );
}

export default StepAge;
