import MainCategory from "../main/MainCatstgory";


export default function CommunityCategory() {
  return (
    <section className="w-full bg-neutral-5 py-16">
      <h2 className="text-title-large-desktop text-center">커뮤니티 카테고리를 선택해보세요</h2>
      <div className="mt-9">
        <MainCategory />
      </div>
    </section>
  );
}

