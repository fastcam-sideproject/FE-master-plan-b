import Image from 'next/image';
import { LiveChip } from '../LiveChip';
import Popover from '../Popover/Popover';
import MainButton from '../MainButton/MainButton';
import CommunityInfo from '../CommunityInfo/CommunityInfo';

export default function CommunityUpper() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-neutral-100 py-10">
      <div className="w-full flex justify-evenly">
        <div className="flex flex-col gap-10">
          <div>
            <LiveChip />
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
        <div className="relative">
          <Popover
            label="합격자 커뮤니티에 들어가면 이런점이 좋아요"
            mode="big"
            tipDirection="up"
            tipPosition="end"
            className="top-0 -left-60"
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
  );
}
