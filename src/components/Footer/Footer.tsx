import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-5 text-neutral-50 text-link-small-desktop">
      <div className='h-full grid mobile:grid-cols-1 mobile:grid-row-4 mobile:gap-5  mobile:items-center grid-cols-3 grid-rows-3 mobile:p-7 p-9 '>
        <Image width={150} height={50} src="/logos/logo-text-dark.svg" alt="로고" />
        <div className='mobile:col-start-1 mobile:row-start-4 row-start-2 row-end-4'>
          <p>
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 pr-4">
              상호
            </span>
            <span className="px-4">마스터플랜비</span>
            <br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 pr-4">
              대표자 명
            </span>
            <span className="px-4">김시환</span>
            <br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 pr-4">
              사업자 등록번호
            </span>
            <span className="px-4">580 - 46 - 01046</span>
            <br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 pr-4">
              사업자 소재지
            </span>
            <span className="px-4">Seoul, Gangnam District, Teheran-ro</span>
            <br />
          </p>
        </div>

        <div className='h-2 mobile:col-start-1 mobile:row-start-2 tablet:col-start-3 tablet:justify-end flex justify-center'>
          <div className="grid grid-cols-[97px_1px_50px_1px_50px] gap-6 items-center">
            <div>개인정보처리방침</div>
            <div className='w-full h-5 bg-neutral-30'></div>
            <div>이용약관</div>
            <div className='w-full h-5 bg-neutral-30'></div>
            <div>결제정보</div>
          </div>
        </div>

        <div className='mobile:justify-normal mobile:col-start-1 mobile:row-start-3 tablet:col-start-3 tablet:row-start-3  tablet:justify-end flex justify-center'>
          <div className='tablet:text-right'>
            <div>고객센터</div>
            <div>masterplanb@gmail.com</div>
          </div>
        </div>

      </div>

    </footer >
  );
}
