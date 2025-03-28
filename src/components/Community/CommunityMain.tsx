'use client';

import { IconCircleFilled, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import CommunityInfo from "../CommunityInfo/CommunityInfo";
import MainButton from "../MainButton/MainButton";
import MainCategory from "../main/MainCatstgory";
import MainItemCard from "../main/MainItemCard";
import SearchBar from "../SearchBar/SearchBar";
import { LiveChip } from "../LiveChip";
import Popover from "../Popover/Popover";

function CommunityMain() {
  return <>
    <section className="w-full flex flex-col justify-center items-center bg-neutral-100 py-10">
      <div className="w-[85%] flex justify-evenly">
        <div className="flex flex-col gap-10">
          <LiveChip />
          <div className="flex flex-col gap-7">
            <h1 className="text-neutral-0 text-heading-small-desktop">합격자 커뮤니티</h1>
            <div className="flex flex-col gap-3 text-neutral-20">
              <p>같은 목표를 이룬 합격자들이 모여 정보를 공유하고 취업 및 진로 고민을 나누는 공간입니다.
              </p>
              <p>함께 성장하고 서로에게 힘이 되는 네트워크를 만들어보세요!</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Popover
            label="합격자 커뮤니티에 들어가면 이런점이 좋아요"
            mode="big"
            tipDirection="up"
            tipPosition="start"
            className="top-0 -left-52"
          />
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