import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateWeek = (dateString: string): string => {
  const date = new Date(dateString);

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = weekdays[date.getDay()];

  return `${year}.${month}.${day}.(${weekday})`;
};
