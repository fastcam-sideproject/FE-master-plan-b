import { IconHexagonFilled, IconPencil } from '@tabler/icons-react';

function StudyCard() {
  return (
    <div className="m-10 w-1/2 h-[300px] flex justify-center items-center bg-slate-700">
      <div className="folder">
        <div className="w-full flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-title-medium-desktop">TOEIC</h3>
              <div className="text-label-small-desktop text-neutral-40 bg-gray-200 px-3 rounded-4">
                D-00
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-body-xsmall-desktop text-neutral-50">이번주 학습량</p>
              <div className="flex gap-3">
                <IconHexagonFilled className="text-neutral-5" />
                <IconHexagonFilled className="text-neutral-5" />
                <IconHexagonFilled className="text-neutral-5" />
                <IconHexagonFilled className="text-neutral-5" />
                <IconHexagonFilled className="text-neutral-5" />
                <IconHexagonFilled className="text-neutral-5" />
              </div>
            </div>
          </div>

          <button className="w-full flex justify-center items-center gap-3 py-3 px-5 bg-neutral-85 text-neutral-0 rounded-md hover:bg-neutral-80">
            <IconPencil />
            학습 기록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudyCard;
