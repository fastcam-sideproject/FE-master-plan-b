'use client';

import MainCalendar from "./MainCalendar";
import MainCategory from "./MainCatstgory";
import MainItemCard from "./MainItemCard";
import MainReviewList from "./MainReviewList";

export default function Main() {
  return (
    <div className="flex flex-col bg-[url('/background/desktop-background.png')] tablet:bg-[url('/background/tablet-background.png')] mobile:bg-[url('/background/mobile-background.png')] bg-cover bg-center">
      <main className="flex flex-col items-center pt-20 pb-32 tablet:p-9 mobile:p-6">
        <div className="flex flex-col gap-16 mb-[280px] tablet:flex tablet:justify-center tablet:items-center">
          <MainCalendar />
          <MainItemCard />
        </div>
        <div className="mb-20">
          <MainCategory />
        </div>
        <div className="w-[1200px] tablet:w-full mobile:w-full">
          <MainReviewList />
        </div>
      </main>
    </div>
  );
}
