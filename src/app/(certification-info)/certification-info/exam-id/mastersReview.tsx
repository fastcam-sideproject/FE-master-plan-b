import React from 'react';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import { ItemList, ItemListProps } from '@/components/ItemList';

// todo: 전체 리뷰 보기 링크 달기
// 설명
// React에서 리스트를 렌더링할 때 각 항목을 구분하기 위한 고유한 key가 필요합니다
// 여기서는 제목(item.title)과 라벨들(item.labels)을 조합해서 고유한 key를 만듭니다
// 예를 들어, 만약 title이 "시험 후기"이고 labels가 ["자격증", "2024"]라면
// key는 "시험 후기-자격증,2024"가 됩니다

interface MastersReviewProps {
  MastersReviewData: ItemListProps[];
}

const MastersReview = ({ MastersReviewData }: MastersReviewProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full items-end justify-between">
        <ul className="pb-3">
          <li className="text-title-large-desktop">마스터 후기 Best3 👑</li>
          <li className="text-body-large-desktop text-neutral-50">
            가장 많은 좋아요를 받은 베스트 후기를 확인해보세요!
          </li>
        </ul>
        <Link href="/" className="flex items-center p-3 text-label-medium-desktop text-neutral-80">
          <span>전체보기</span>
          <IconChevronRight className="h-5 w-5" />
        </Link>
      </div>
      {MastersReviewData.map((item) => (
        <ItemList key={`${item.title}-${item.labels.join()}`} {...item} />
      ))}
    </div>
  );
};

export default MastersReview;
