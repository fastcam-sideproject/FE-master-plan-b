import React from 'react';
import { IconBookmark, IconBookmarkFilled } from '@tabler/icons-react';

type BookmarkButtonProps = {
  examId: string;
  initialBookmark: boolean;
};
export default function BookmarkButton({ examId, initialBookmark }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(initialBookmark);

  const handleBookmarkClick = () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
  };

  return (
    <div onClick={handleBookmarkClick}>
      {isBookmarked ? (
        <IconBookmarkFilled className="mobile:size-6 size-[28px] text-primary-30" />
      ) : (
        <IconBookmark className="mobile:size-6 size-[28px] text-primary-30" />
      )}
    </div>
  );
}
