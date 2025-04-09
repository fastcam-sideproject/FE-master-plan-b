import StudyCard from './StudyCard';

interface StudyData {
  id: number;
  title: string;
  daysRemaining: number;
  progress: number;
}

interface StudyCardListProps {
  studyData: StudyData[];
  onClickRecord: () => void;
}

export default function StudyCardList({
  studyData,
  onClickRecord,
}: StudyCardListProps) {
  return (
    <div className="flex h-[280px] items-end overflow-x-scroll pb-4 disabled:bg-neutral-5 mobile:h-[226px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-20 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-[6px]">
      <ul className="flex gap-4">
        {studyData.map((data) => (
          <StudyCard
            key={data.id}
            title={data.title}
            daysRemaining={data.daysRemaining}
            progress={data.progress}
            onClickRecord={onClickRecord}
          />
        ))}
      </ul>
    </div>
  );
}
