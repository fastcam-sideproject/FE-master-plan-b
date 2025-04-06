export const getStyles = (isDark: boolean, isLarge: boolean) => {
  const baseTextColor = isDark ? 'text-neutral-0' : 'text-neutral-30';
  const baseYearMonthColor = isDark ? 'text-neutral-0' : 'text-neutral-85';
  const outsideTextColor = isDark ? '!text-neutral-60' : '!text-neutral-20';
  const cellSize = isLarge
    ? 'size-9 text-body-medium-desktop '
    : 'size-[30px] text-body-xsmall-desktop';

  const cellHeight = isLarge ? 'h-[69px]' : 'h-[56px]';
  const captionTextSize = isLarge
    ? 'text-title-medium-desktop'
    : 'text-[20px] h-fit';

  // 요일 간격
  const headRowGap = isLarge ? 'gap-6' : 'gap-3 mobile:mb-4';

  // 요일 크기
  const headCellSize = isLarge
    ? 'w-[45px] h-[26px] text-body-medium-desktop mb-5'
    : 'w-[38px] h-[22px] text-body-xsmall-desktop font-[400]';

  const iconSize = isLarge ? 43 : 35;

  // 날짜 글씨 크기
  const dayTextSize = isLarge
    ? 'text-body-medium-desktop text-neutral-30 font-[400]'
    : 'text-body-small-desktop font-[400] h-[21px]';

  // 육각형 테두리
  const hexagonBorder = 'text-neutral-85';

  return {
    baseTextColor,
    baseYearMonthColor,
    outsideTextColor,
    cellSize,
    headCellSize,
    cellHeight,
    captionTextSize,
    headRowGap,
    iconSize,
    dayTextSize,
    hexagonBorder,
  };
};
