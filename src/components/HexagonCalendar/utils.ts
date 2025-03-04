import { StudyInfo } from './types';

export const formatDateString = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

export const getHexagonColor = (
  day: Date,
  studyInfo: { [key: string]: StudyInfo },
  isDark: boolean,
) => {
  const dateString = formatDateString(day);
  const study = studyInfo[dateString];

  if (!study) {
    return isDark ? 'text-neutral-60' : 'text-neutral-5';
  }

  const colorMap = [
    { threshold: 1, color: 'text-primary-10' },
    { threshold: 2, color: 'text-primary-20' },
    { threshold: 3, color: 'text-primary-30' },
    { threshold: 4, color: 'text-primary-40' },
    { threshold: 5, color: 'text-primary-50' },
  ];

  const matchedColor = colorMap.find((item, index) => {
    const nextThreshold = colorMap[index + 1]?.threshold ?? Infinity;
    return study.time >= item.threshold && study.time < nextThreshold;
  });

  return matchedColor?.color ?? (isDark ? 'text-neutral-60' : 'text-neutral-5');
};
