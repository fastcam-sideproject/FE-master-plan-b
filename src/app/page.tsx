import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Fab from '@/lib/common/Fab/Fab';

export default function Home() {
  return (
    <>
      <h1 className="text-display-desktop md:text-display-mobile font-extrabold">제목</h1>
      <Fab />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">홈</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="" />
          <BreadcrumbItem>
            <Link href="/components">하위 페이지</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
