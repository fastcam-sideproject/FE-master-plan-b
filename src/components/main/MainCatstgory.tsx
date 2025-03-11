import Category from "../Category/Category";

export default function MainCategory() {
  return (
    <section className="flex justify-center items-center tablet:w-full tablet:overflow-scroll">
      {/* 태블릿 7, 모바일 5 */}
      <Category />
    </section>
  );
}
