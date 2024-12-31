import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <h1 className="text-display-desktop md:text-display-mobile font-extrabold">제목</h1>
      <h2 className="text-heading-medium-desktop md:text-heading-medium-mobile font-extrabold">
        중제목asdasdsaddddddddd
      </h2>
      <p className="text-title-large- md:text-body-large-mobile font-medium leading-[160%]">
        본문 텍스트
      </p>
      <main className="bg-yellow-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Button>Click me</Button>
      </main>
    </>
  );
}
