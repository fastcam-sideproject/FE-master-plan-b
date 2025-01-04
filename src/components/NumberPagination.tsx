import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) => {
  const renderPageNumbers = () => {
    let pages = [];

    // 맨처음 페이지로 이동
    pages.push(
      <Button
        key="first"
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="h-9 w-9"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>,
    );
    // 이전 페이지로 이동
    pages.push(
      <Button
        key="prev"
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>,
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
          <Button
            key={i}
            variant={currentPage === i ? 'default' : 'ghost'}
            size="icon"
            onClick={() => onPageChange(i)}
            className={cn('h-9 w-9', currentPage === i && 'bg-black text-white hover:bg-black/90')}
          >
            {i}
          </Button>,
        );
      } else if (
        (i === currentPage - 2 && currentPage > 4) ||
        (i === currentPage + 2 && currentPage < totalPages - 3)
      ) {
        pages.push(
          <span key={`ellipsis-${i}`} className="px-2">
            ...
          </span>,
        );
      }
    }

    // 마지막 페이지로 이동
    pages.push(
      <Button
        key="next"
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>,
    );

    // 다음 페이지로 이동
    pages.push(
      <Button
        key="last"
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="h-9 w-9"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>,
    );

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('flex justify-center items-center gap-1', className)}
    >
      {renderPageNumbers()}
    </nav>
  );
};

export default CustomPagination;
