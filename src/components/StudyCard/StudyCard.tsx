import { IconHexagonFilled, IconPencil } from '@tabler/icons-react';
import { Button } from '../ui/button';

interface StudyCardProps {
  title: string;
  daysRemaining: number;
  progress: number;
  onClickRecord: () => void;
}

export default function StudyCard({
  title,
  daysRemaining,
  progress,
  onClickRecord,
}: StudyCardProps) {
  return (
    <li className="folder">
      <div className="flex w-full flex-col gap-7">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-title-medium-desktop mobile:text-title-small-mobile">
              {title}
            </h3>
            <div className="rounded-4 bg-gray-200 px-3 text-label-small-desktop text-neutral-40">
              D-{daysRemaining}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-body-xsmall-desktop text-neutral-50 mobile:text-body-xsmall-mobile">
              이번주 학습량
            </p>
            <div className="flex gap-3 mobile:gap-2">
              {[...Array(6)].map((_, index) => (
                <IconHexagonFilled
                  key={index}
                  className={`${index < progress ? 'text-primary-40' : 'text-neutral-30'} rotate-90`}
                  size={24}
                />
              ))}
            </div>
          </div>
        </div>

        <Button
          label="학습 기록하기"
          variant={'secondary'}
          size={'sm'}
          className="w-full"
          withIcon
          icon={<IconPencil />}
          onClick={onClickRecord}
        />
      </div>
    </li>
  );
}
