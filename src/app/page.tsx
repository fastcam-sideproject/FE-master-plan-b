'use client';

import Image from "next/image";
import Category from "@/components/Category/Category";
import SearchBar from "@/components/SearchBar/SearchBar";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import { MainItemList } from "@/components/ItemList";
import MainButton from "@/components/MainButton/MainButton";

export default function Home() {
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
    <main className="flex flex-col bg-[url('/background/desktop-background.png')] tablet:bg-[url('/background/tablet-background.png')] mobile:bg-[url('/background/mobile-background.png')]  bg-cover bg-center h-[3142px] mobile:h-[2423px] w-full justify-center items-center">
      <article className="w-[1200px] h-[2926px] tablet:w-[688px] mobile:w-[343px] flex flex-col gap-[304px] pt-20 pb-32">

        <section className="flex flex-col gap-[104px]">
          <section className="flex gap-[54px]">
            <div className="flex flex-col justify-end pb-6">
              <div className="flex gap-4">
                <div className="flex flex-col gap-8">
                  <p className="text-heading-small-desktop text-neutral-0">
                    <span className="text-primary-40">D-00</span><br />
                    <span className="text-primary-40">정보처리기사</span> 시험이<br /> 얼마 남지않았어요
                  </p>
                  <MainButton innerText="학습하러가기" link="community" color="black" />
                </div>
                <Image width={261} height={286} src={"/character/web/MainPage.png"} alt={""} />
              </div>
              <SearchBar type={"main"} />
            </div>

            <div>
              <Image width={588} height={445} src={"/background/test.png"} alt={""} />
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-40 text-body-large-desktop">추천 자격증</p>
              <Dropdown items={['정보처리', '흰색 2', '흰색 3', '흰색 4', '흰색 5']} />
            </div>
            <div className="flex gap-6">
              <ItemCard type={'info'} data={ItemCardDummyData} />
              <ItemCard type={'info'} data={ItemCardDummyData} />
              <ItemCard type={'info'} data={ItemCardDummyData} />
              <ItemCard type={'info'} data={ItemCardDummyData} />
            </div>
          </section>

        </section>


        <section className="flex flex-col">
          <div className="flex justify-center items-center">
            <Category />
          </div>
          <div className="flex justify-between mt-20">
            <div>
              <p className="text-heading-small-desktop">웹디자인 기능사 마스터님의<br />비법을 전수받아보세요</p>
              <Button />
            </div>
            <Image width={370} height={370} src={"/character/web/MainPage2.png"} alt="마스터플랜비 캐릭터" />
          </div>
          <div className="grid grid-cols-2 gap-7 mt-10">
            <MainItemList
              title="제목을 입력해주세요"
              labels={['Label', 'Label']}
              tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
              content="필기는 기출문제를 정복하면 절반은 먹고 들어갑니다. 저는 5년 치 기출문제를 다운로드해서 한 번 풀어본 뒤, 틀린 문제만 다시 정리했어요. 기출문제는 반복되는 경향이 강하니까 시험 직전까지 최소 3번은 돌려보는 걸 추천합니다. 암기 팁으로는 **'키워드 중심으로 정리'**하는 게 중요해요. 책 한 권을 다 외우려 하지 말고, 꼭 나오는 핵심 개념만 메모하면서 공부했어요."
            />
            <MainItemList
              title="제목을 입력해주세요"
              labels={['Label', 'Label']}
              tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
              content="필기는 기출문제를 정복하면 절반은 먹고 들어갑니다. 저는 5년 치 기출문제를 다운로드해서 한 번 풀어본 뒤, 틀린 문제만 다시 정리했어요. 기출문제는 반복되는 경향이 강하니까 시험 직전까지 최소 3번은 돌려보는 걸 추천합니다. 암기 팁으로는 **'키워드 중심으로 정리'**하는 게 중요해요. 책 한 권을 다 외우려 하지 말고, 꼭 나오는 핵심 개념만 메모하면서 공부했어요."
            />
            <MainItemList
              title="제목을 입력해주세요"
              labels={['Label', 'Label']}
              tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
              content="필기는 기출문제를 정복하면 절반은 먹고 들어갑니다. 저는 5년 치 기출문제를 다운로드해서 한 번 풀어본 뒤, 틀린 문제만 다시 정리했어요. 기출문제는 반복되는 경향이 강하니까 시험 직전까지 최소 3번은 돌려보는 걸 추천합니다. 암기 팁으로는 **'키워드 중심으로 정리'**하는 게 중요해요. 책 한 권을 다 외우려 하지 말고, 꼭 나오는 핵심 개념만 메모하면서 공부했어요."
            />
            <MainItemList
              title="제목을 입력해주세요"
              labels={['Label', 'Label']}
              tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
              content="필기는 기출문제를 정복하면 절반은 먹고 들어갑니다. 저는 5년 치 기출문제를 다운로드해서 한 번 풀어본 뒤, 틀린 문제만 다시 정리했어요. 기출문제는 반복되는 경향이 강하니까 시험 직전까지 최소 3번은 돌려보는 걸 추천합니다. 암기 팁으로는 **'키워드 중심으로 정리'**하는 게 중요해요. 책 한 권을 다 외우려 하지 말고, 꼭 나오는 핵심 개념만 메모하면서 공부했어요."
            />
          </div>
        </section>
      </article>
      <MainButton innerText="모든 후기 보러가기" link="" />
    </main>
  );
}