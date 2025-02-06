import { IconHexagonFilled, IconPencil } from "@tabler/icons-react";

interface StudyCardProps {
  title: string;
  daysRemaining: number;
  progress: number;
  onClickRecord: () => void;
}

export default function StudyCard({ title, daysRemaining, progress, onClickRecord }: StudyCardProps) {
  return (

    <li className="folder">
      <div className="w-full flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-title-medium-desktop mobile:text-title-small-mobile">{title}</h3>
            <div className="text-label-small-desktop text-neutral-40 bg-gray-200 px-3 rounded-4">
              D-{daysRemaining}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-body-xsmall-desktop text-neutral-50 mobile:text-body-xsmall-mobile">이번주 학습량</p>
            <div className="flex gap-3 mobile:gap-2">
              {[...Array(6)].map((_, index) => (
                <IconHexagonFilled
                  key={index}
                  className={index < progress ? "text-primary-40" : "text-neutral-30"}
                  size={24}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          className="w-full flex justify-center items-center gap-3 py-3 px-5 bg-neutral-85 text-neutral-0 rounded-md hover:bg-neutral-80"
          onClick={onClickRecord}
        >
          <IconPencil />
          학습 기록하기
        </button>
      </div>
    </li>

  );
}