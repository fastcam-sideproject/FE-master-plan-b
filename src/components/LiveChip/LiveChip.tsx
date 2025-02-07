import { useState } from 'react';

export function LiveChip() {
  const [participants, setParticipants] = useState(12345);

  return (
    <div className="h-[42px] mobile:h-[38px] px-5 mobile:px-4 py-3 bg-neutral-80 rounded-10 shadow-2 border-2 border-neutral-70 justify-center items-center gap-4 mobile:gap-3 inline-flex">
      <div className="text-center text-neutral-0 text-body-medium-desktop mobile:text-body-xsmall-desktop font-normal">
        + {participants.toLocaleString()}명 참여중
      </div>
      <div className="w-5 mobile:w-4 h-5 mobile:h-4 bg-[#f61832] rounded-10" />
    </div>
  );
}
