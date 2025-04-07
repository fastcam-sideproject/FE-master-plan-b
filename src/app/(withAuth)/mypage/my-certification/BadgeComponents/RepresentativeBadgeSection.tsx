import React from 'react';
import Badge from '@/components/Badge/Badge';
import BadgeGridHeader from './BadgeGridHeader';
import { RepresentativeBadgeSectionProps } from './types';

const popoverText = '대표 배지를 설정하고\n프로필에 등록해 봐요';

const RepresentativeBadgeSection = ({
  isPopoverVisible,
  setIsPopoverVisible,
}: RepresentativeBadgeSectionProps) => (
  <div className="flex flex-col gap-3">
    <BadgeGridHeader
      title="대표 배지"
      helpText={popoverText}
      isPopoverVisible={isPopoverVisible}
      setIsPopoverVisible={setIsPopoverVisible}
    />
    <Badge
      variant="secondary"
      achieveItem="growthApprentice"
      achieve
      selected="true"
    />
  </div>
);

export default RepresentativeBadgeSection;
