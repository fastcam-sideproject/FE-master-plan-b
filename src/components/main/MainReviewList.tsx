import Image from "next/image";
import { MainItemList } from "../ItemList";
import MainButton from "../MainButton/MainButton";

export default function MainReviewList() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex items-center justify-between mt-20">
        <div>
          <p className="text-heading-small-desktop">웹디자인 기능사 마스터님의<br />비법을 전수받아보세요</p>
        </div>
        <Image width={370} height={370} src={"/character/web/MainPage2.png"} alt="마스터플랜비 캐릭터" />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-10 tablet:grid-cols-1 mobile:grid-cols-1">
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
      <div className="flex justify-center items-center">
        <MainButton innerText="모든 후기 보러가기" link="" />
      </div>
    </section>);
}