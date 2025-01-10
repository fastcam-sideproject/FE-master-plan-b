import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-neutral-85 p-5">
      <div className="flex items-center gap-[145px]">
        <Image width={157} height={40} src={"/logos/logo-text-light.svg"} alt={"헤더로고"} />
        <ul className="flex text-neutral-0">
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">자격증 정보</li>
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">커뮤니티</li>
          <li className="px-6 py-5 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">마이페이지</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <Image width={24} height={24} src={"icons/active/search-bold.svg"} alt="헤더아이콘" className="filter invert" />
          </li>
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <Image width={24} height={24} src={"icons/gnb/bell-filled.svg"} alt="헤더아이콘" className="filter invert" />
          </li>
          <li className="flex justify-center items-center w-10 h-10 bg-neutral-80 rounded-full hover:cursor-pointer hover:bg-neutral-70 active:bg-neutral-50">
            <Image width={24} height={24} src={"icons/gnb/user-filled.svg"} alt="헤더아이콘" className="filter invert" />
          </li>
        </ul>
      </div>
    </header>
  );
}
