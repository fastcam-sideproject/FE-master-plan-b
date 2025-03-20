'use client';

import { IconCircleFilled, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import CommunityInfo from "../CommunityInfo/CommunityInfo";
import MainButton from "../MainButton/MainButton";
import MainCategory from "../main/MainCatstgory";
import MainItemCard from "../main/MainItemCard";
import SearchBar from "../SearchBar/SearchBar";

function CommunityMain() {
  return <>
    <section className="w-full flex flex-col justify-center items-center bg-neutral-100 py-10">
      <div className="w-[85%] flex justify-evenly">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center py-3 px-8 bg-neutral-80 rounded-full border-2 border-neutral-70">
            <div>
              <div className="flex gap-4">
                <span>
                  <p className="text-neutral-0 text-body-medium-desktop"> <IconPlus className="inline-block" /> 00,000명 참여중</p>
                </span>
                <IconCircleFilled className="text-red-50" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-neutral-0 text-heading-small-desktop">합격자 커뮤니티</h1>
            <div className="flex flex-col gap-3 text-neutral-20">
              <p>같은 목표를 이룬 합격자들이 모여 정보를 공유하고 취업 및 진로 고민을 나누는 공간입니다.
              </p>
              <p>함께 성장하고 서로에게 힘이 되는 네트워크를 만들어보세요!</p>
            </div>
          </div>
        </div>
        <div>
          {/* <Popover
          label="대표 배지를 설정하고 프로필에 등록해 봐요"
          mode="light"
          tipDirection="up"\
          tipPosition="center"
        /> */}
          <Image width={350} height={300} src={"/character/web/MainPage.png"} alt={""} />
        </div>
      </div>
      <div className="w-[80%] flex justify-evenly">
        <div>
          <MainButton link={""} innerText={"인증하러 가기"} />
        </div>
        <CommunityInfo />
      </div>
    </section>
    <section className="flex justify-center items-center bg-white py-16">
      <MainItemCard />
    </section>
    <section className="w-full bg-neutral-5 py-16">
      <h2 className="text-title-large-desktop text-center">커뮤니티 카테고리를 선택해보세요</h2>
      <div className="mt-9">
        <MainCategory />
      </div>
    </section>
    <section className="w-full bg-neutral-5 py-16">
      <div>
        <SearchBar type={"main"} />
      </div>
    </section>

  </>;
}

export default CommunityMain;