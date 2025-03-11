import Image from "next/image";
import Link from "next/link";
import { IconSquareFilled } from "@tabler/icons-react";
import MainButton from "../MainButton/MainButton";
import SearchBar from "../SearchBar/SearchBar";
import { Calendar } from "../ui/calendar";

export default function MainCalendar() {
  return (
    <section className="flex gap-[54px] tablet:flex-col mobile:flex-col">
      <div className="flex flex-col justify-end pb-6">
        <div className="flex gap-4">
          <div className="flex flex-col gap-8">
            <p className="text-heading-small-desktop text-neutral-0">
              <span className="text-primary-40">D-00</span><br />
              <span className="text-primary-40">정보처리기사</span> 시험이<br /> 얼마 남지않았어요
            </p>
            <MainButton innerText="학습하러가기" link="community" color="black" />
          </div>
          <Image width={261} height={286} src={"/character/web/MainPage.png"} alt={"메인캐릭터"} />
        </div>
        <SearchBar type={"main"} />
      </div>

      <section className="relative w-[588px] h-[445px] px-[25px] pt-[31px] pb-[24px] flex flex-col items-center gap-6 bg-[url('/images/component-image/main-desktop-folder.svg')] bg-contain bg-center bg-no-repeat tablet:bg-none tablet:bg-neutral-80 tablet:rounded-8 tablet:p-9 tablet:border tablet:border-neutral-70">
        <button className="absolute w-[223px] h-[103px] -right-4 top-0 bg-[url('/images/component-image/main-desktop-button.svg')] bg-contain bg-no-repeat text-label-large-desktop tablet:hidden mobile:hidden">시험등록하기</button>
        <div className="flex justify-center items-end gap-10">
          <Calendar date={[]} bg={"dark"} size={"small"} />
          <div className="flex gap-8">
            <div className="text-body-large-desktop text-neutral-0 text-center">
              <p>예정시험</p>
              <p className="text-heading-medium-desktop">00</p>
            </div>
            <div className="text-body-large-desktop text-neutral-40 text-center">
              <p>보유 자격증</p>
              <p className="text-heading-medium-desktop">00</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 bg-neutral-70 rounded-6 px-8 py-5">
          <div className="flex justify-between">
            <h3 className="text-neutral-0">시험 일정</h3>
            <Link href={"/myhome"} className="text-neutral-30 underline">더보기</Link>
          </div>
          <div className="flex flex-col gap-2 text-body-medium-desktop">
            <div className="flex gap-7">
              <span className="flex"> <IconSquareFilled className="text-primary-40 mr-3" /> <p className="text-neutral-0">0000년 00월 00일 (일)</p> </span>
              <span className="text-primary-40"> 정보처리산업기사 시험</span>
            </div>
            <div className="flex gap-7">
              <span className="flex"> <IconSquareFilled className="text-primary-40 mr-3" /> <p className="text-neutral-0">0000년 00월 00일 (일)</p> </span>
              <span className="text-primary-40"> 정보처리산업기사 시험</span>
            </div>
          </div>
        </div>

      </section>

    </section>);
}