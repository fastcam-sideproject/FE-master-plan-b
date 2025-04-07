import ItemCard from "../ItemCard/ItemCard";

const ItemCardDummyData = {
  examId: '1',
  exam: '정보처리기사',
  host: '국가기술자격',
  bookmark: false,
  starRating: 4,
  category: '정보통신',
  regStartDate: '2025-01-22',
  regEndDate: '2025-02-28',
  examStartDate: '2025-02-28',
};

export default function CommunityJoined() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-16 bg-white relative z-0">
      <div className="flex flex-col px-9">
        <h2 className="text-title-medium-desktop mb-9">참여중인 커뮤니티</h2>
        <div className="flex justify-center gap-6 relative overflow-visible">
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <div className="w-[1240px] h-[192px] absolute bottom-[-24px] bg-primary-30 z-[-1] rounded-6"></div>
        </div>
      </div>
    </section>
  );
}


