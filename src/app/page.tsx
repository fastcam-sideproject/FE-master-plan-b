import Fab from '@/components/FAB/Fab';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <h1 className="text-display-desktop md:text-display-mobile font-extrabold">제목</h1>
      <Fab />

      <main className="bg-neutral-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Button variant="third" size="md" disabled>
          비활성화 버튼
        </Button>
        <Button variant="third" size="md">
          활성화 버튼
        </Button>
      </main>
    </>
  );
}
