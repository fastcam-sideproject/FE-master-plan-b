import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-10 text-link-small-desktop text-neutral-50">
      <div className="mobile:grid-row-4 grid h-full grid-cols-3 grid-rows-3 p-9 mobile:grid-cols-1 mobile:items-center mobile:gap-5 mobile:p-7">
        <Image width={150} height={50} src="/logos/logo-text-dark.svg" alt="로고" />
        <div className="row-start-2 row-end-4 mobile:col-start-1 mobile:row-start-4">
          <p>
            <span className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-neutral-300 after:content-['']">
              상호
            </span>
            <span className="px-4">마스터플랜비</span>
            <br />
            <span className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-neutral-300 after:content-['']">
              대표자 명
            </span>
            <span className="px-4">김시환</span>
            <br />
            <span className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-neutral-300 after:content-['']">
              사업자 등록번호
            </span>
            <span className="px-4">580 - 46 - 01046</span>
            <br />
            <span className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-neutral-300 after:content-['']">
              사업자 소재지
            </span>
            <span className="px-4">Seoul, Gangnam District, Teheran-ro</span>
            <br />
          </p>
        </div>

        <div className="flex h-2 justify-center tablet:col-start-3 tablet:justify-end mobile:col-start-1 mobile:row-start-2">
          <div className="grid grid-cols-[97px_1px_50px_1px_50px] items-center gap-6">
            <div>개인정보처리방침</div>
            <div className="h-5 w-full bg-neutral-30"></div>
            <div>이용약관</div>
            <div className="h-5 w-full bg-neutral-30"></div>
            <div>결제정보</div>
          </div>
        </div>

        <div className="flex justify-center tablet:col-start-3 tablet:row-start-3 tablet:justify-end mobile:col-start-1 mobile:row-start-3 mobile:justify-normal">
          <div className="tablet:text-right">
            <div>고객센터</div>
            <div>masterplanb@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
