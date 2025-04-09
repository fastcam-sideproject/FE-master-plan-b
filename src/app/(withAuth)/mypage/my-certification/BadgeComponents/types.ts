// 배지 관련 타입 정의
export interface AchievementForActivityBadge {
  achieveItem: string;
  achieve: boolean;
  title: string;
}

// 헤더 컴포넌트 props 타입
export interface HeaderProps {
  title: string;
  helpText: string;

  isPopoverVisible: boolean;
  setIsPopoverVisible: (visible: boolean) => void;
}

// 배지 그리드 컴포넌트 props 타입
export interface BadgeGridProps {
  title: string;
  badges: AchievementForActivityBadge[];
}

// 대표 배지 섹션 컴포넌트 props 타입
export interface RepresentativeBadgeSectionProps {
  isPopoverVisible: boolean;
  setIsPopoverVisible: (visible: boolean) => void;
}

// 전체 배지 섹션 컴포넌트 props 타입
export interface AllBadgesSectionProps {
  isPopoverVisible: boolean;
  setIsPopoverVisible: (visible: boolean) => void;
}
