'use client';

import { useParams } from "next/navigation";
import CommunityDetail from "./communityDetail/CommunityDetail";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  console.log(" 커뮤니티 상세 페이지 - ID:" + id);

  return (
    <main>
      <CommunityDetail />
    </main>
  );

}
