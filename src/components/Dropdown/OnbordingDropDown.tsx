'use cilent';

import { useState } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { JobCategoriesType } from "@/types/jobCategories";
import jobCategoriesJson from '../data/job-categories.json';

const jobCategories: JobCategoriesType = jobCategoriesJson;

export default function OnbordingDropDown() {
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedMain(null);
    setSelectedSub(null);
  };

  const handleComplete = () => {
    if (selectedMain && selectedSub) {
      alert(`선택한 직무: ${selectedMain} > ${selectedSub}`);
    } else {
      alert('직무를 선택해주세요.');
    }
  };

  return (
    <div className="max-h-[380px] bg-neutral-0 rounded-8 shadow-lg p-8 flex flex-col gap-4">

      <div className="grid grid-cols-2 gap-8">

        <ul className="max-h-[200px] overflow-y-auto">
          {Object.keys(jobCategories).map((main) => (
            <li
              key={main}
              onClick={() => {
                setSelectedMain(main);
                setSelectedSub(null);
              }}
              className={`w-full px-5 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${selectedMain === main ? 'bg-gray-200 font-semibold' : ''}`}
            >
              <span>{main}</span> <IconChevronRight />
            </li>
          ))}
        </ul>

        {selectedMain && (
          <ul className="max-h-[200px] overflow-y-auto">
            {jobCategories[selectedMain].map((sub: string) => (
              <li
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`w-full px-5 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${selectedSub === sub ? 'bg-gray-200 font-semibold' : ''}`}
              >
                {sub}
              </li>
            ))}
          </ul>
        )}
      </div>


      <div className="w-full flex justify-between mt-6">
        <button onClick={handleReset} className="px-4 py-2 border border-gray-300 rounded-md">
          초기화
        </button>
        <button onClick={handleComplete} className="bg-yellow-400 px-4 py-2 rounded-md text-neutral-85">
          선택완료
        </button>
      </div>
    </div>
  );
}
