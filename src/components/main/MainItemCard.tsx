import { Dropdown } from "../Dropdown";
import ItemCard from "../ItemCard/ItemCard";

function MainItemCard() {
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
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-neutral-40 text-body-large-desktop">추천 자격증</p>
        <Dropdown items={['정보처리', '흰색 2', '흰색 3', '흰색 4', '흰색 5']} />
      </div>
      <div className="flex gap-6 tablet:min-w-[688px] tablet:overflow-scroll mobile:min-w-[335px] mobile:overflow-scroll">
        {/* 데스크탑일때는 4개, 태블릿 3개 옆으로 스크롤 모바일 두개 */}
        <ItemCard type={'info'} data={ItemCardDummyData} />
        <ItemCard type={'info'} data={ItemCardDummyData} />
        <ItemCard type={'info'} data={ItemCardDummyData} />
        <ItemCard type={'info'} data={ItemCardDummyData} />
      </div>
    </section>
  );
}

export default MainItemCard;