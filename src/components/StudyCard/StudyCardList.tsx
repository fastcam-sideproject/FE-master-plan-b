import StudyCard from "./StudyCard";

const dummyStudyData = [
  {
    id: 1,
    title: "TOEIC",
    daysRemaining: 10,
    progress: 5,
  },
  {
    id: 2,
    title: "JLPT N2",
    daysRemaining: 20,
    progress: 3,
  },
  {
    id: 3,
    title: "정보처리기사",
    daysRemaining: 15,
    progress: 6,
  },
];

export default function StudyCardList() {
  return (
    <div className="h-[400px] flex justify-center items-center bg-black overflow-x-scroll">
      <ul className="grid grid-cols-3 gap-2">
        {dummyStudyData.map((data) => (
          <StudyCard
            key={data.id}
            title={data.title}
            daysRemaining={data.daysRemaining}
            progress={data.progress}
            onClickRecord={() => console.log(`${data.title} 학습 기록하기 클릭`)}
          />
        ))}
      </ul>
    </div>
  );
}