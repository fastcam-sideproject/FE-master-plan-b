'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Chip from '@/components/Chip/Chip';
import OnboardingSubject from '@/components/Onboarding/OnboardingSubject';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Button } from '@/components/ui/button';
import OnbordingDropDown from '@/components/Dropdown/OnbordingDropDown';
import JobDropdownToggle from '@/components/Dropdown/OnboardingCategorues';




export default function StepSearch() {
  const [jobTags, setJobTags] = useState<string[]>([]);

  const handleAddTag = (newTag: string) => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !jobTags.includes(trimmedTag)) {
      setJobTags(prev => [...prev, trimmedTag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setJobTags(prev => prev.filter(t => t !== tag));
  };
  const router = useRouter();
  return (
    <>
      <div className='flex gap-20'>

        <div className='flex flex-col gap-20'>
          <OnboardingSubject title={<>현재 종사하거나 관심있는 직무를 선택해주세요</>} p={'선택한 분야에 맞게 자격증을 추천해드릴게요!'} />
          <div className='flex gap-20'>
            <SearchBar type={'default'} variant='default' onSearch={handleAddTag} />
            <div className='w-[1px] h-[61px] bg-neutral-30'></div>
            <div>
              {jobTags.map(tag => (
                // eslint-disable-next-line react/jsx-key
                <Chip size={'large'} keyword={tag} onClick={() => handleRemoveTag(tag)} />
              ))}
            </div>
          </div>
          <JobDropdownToggle />
        </div>

      </div>
      <div className='w-full flex justify-end gap-4'>
        <Button
          type="button"
          variant={'third'}
          size={'lg'}
          label="이전"
          onClick={() => { router.push("/onboarding/step2"); }}
        />
        <Button
          type="button"
          variant={'default'}
          size={'lg'}
          label="다음"
          onClick={() => { router.push("/onboarding/step4"); }}
        />
      </div>

    </>
  );
}