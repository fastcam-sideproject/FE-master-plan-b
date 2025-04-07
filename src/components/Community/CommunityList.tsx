import { Dropdown } from "../Dropdown";
import ItemCard from "../ItemCard/ItemCard";
import SearchBar from "../SearchBar/SearchBar";

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

const communityDropdown = ["국가기술자격", "국가전문자격", "국가공인자격", "등록민간자격", "능력검정"];

export default function CommunityList() {
  return (
    <section className="w-[1200px] flex justify-center items-center bg-neutral-5 py-16">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex justify-between">
          <Dropdown items={communityDropdown} title="자격증 종류" />
          <SearchBar type={"default"} />
        </div>
        <ul className="grid grid-cols-4 gap-7">
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
          <ItemCard type="community" data={[ItemCardDummyData]} />
        </ul>
      </div>
    </section>
  );
}

