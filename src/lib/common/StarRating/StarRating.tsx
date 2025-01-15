import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';

interface StarRatingProps {
  size: 'large' | 'small';
  rating: number;
}
export default function StarRating({ size, rating }: StarRatingProps) {
  const totalStars = 5;

  const isLarge = size === 'large';
  const gap = isLarge ? 'gap-2' : 'gap-1';
  const starSize = isLarge ? 'size-7' : 'size-4';
  const filledStarsColor = 'text-primary-40';
  const emptyStarsColor = isLarge ? 'text-neutral-70' : 'text-neutral-5';

  return (
    <div className={`flex ${gap}`}>
      {Array.from({ length: totalStars }, (_, index) => (
        <IconStarFilled
          key={index}
          className={`${index < rating ? filledStarsColor : emptyStarsColor} ${starSize}`}
        />
      ))}
    </div>
  );
}
