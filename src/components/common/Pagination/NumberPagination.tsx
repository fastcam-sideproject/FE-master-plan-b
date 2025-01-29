import React from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDots,
} from '@tabler/icons-react';

import { cn } from '@/lib/utils';

export function NumberPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  const renderPageNumbers = () => {
    let pages = [];

    // 맨처음 페이지로 이동
    pages.push(
      <button
        type="button"
        key="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={cn('text-neutral-85', currentPage === 1 && 'text-neutral-30')}
      >
        <IconChevronsLeft className="w-7 h-7 mobile:w-6 mobile:h-6" />
      </button>,
    );

    // 이전 페이지로 이동
    pages.push(
      <button
        key="prev"
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn('text-neutral-85', currentPage === 1 && 'text-neutral-30')}
      >
        <IconChevronLeft className="w-7 h-7 mobile:w-6 mobile:h-6" />
      </button>,
    );

    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1) ||
        (currentPage <= 3 && i <= 5) ||
        (currentPage >= totalPages - 2 && i >= totalPages - 4)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={cn(
              'h-9 w-9 mobile:h-8 mobile:w-8',
              currentPage === i
                ? 'text-body-large-desktop mobile:text-body-medium-desktop font-[400] bg-neutral-85 text-neutral-0 border rounded-10'
                : 'text-body-large-desktop mobile:text-body-medium-desktop font-[400] text-neutral-85',
            )}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 && currentPage > 4) ||
        (i === currentPage + 2 && currentPage < totalPages - 3)
      ) {
        pages.push(
          <span key={`ellipsis-${i}`} className="text-neutral-85">
            <IconDots className="w-7 h-7 mobile:w-6 mobile:h-6" />
          </span>,
        );
      }
    }

    // 마지막 페이지로 이동
    pages.push(
      <button
        key="next"
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn('text-neutral-85', currentPage === totalPages && 'text-neutral-30')}
      >
        <IconChevronRight className="w-7 h-7 mobile:w-6 mobile:h-6" />
      </button>,
    );

    // 다음 페이지로 이동
    pages.push(
      <button
        key="last"
        type="button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={cn('text-neutral-85', currentPage === totalPages && 'text-neutral-30')}
      >
        <IconChevronsRight className="w-7 h-7 mobile:w-6 mobile:h-6" />
      </button>,
    );

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn(
        'w-[480px] h-[40px] mobile:w-[355px] mobile:h-[32px] flex justify-center items-center gap-4 mobile:gap-3',
        className,
      )}
    >
      {renderPageNumbers()}
    </nav>
  );
}
