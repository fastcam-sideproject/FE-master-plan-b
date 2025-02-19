import React from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 모든 배지 이미지 import
const badges = {
  palette: '/images/badges/artistPalette.png',
  bullseye: '/images/badges/bullseye.png',
  chart: '/images/badges/chartIncreasing.png',
  coin: '/images/badges/coin.png',
  fire: '/images/badges/fire.png',
  gear: '/images/badges/gear.png',
  globe: '/images/badges/globeShowingEurope-Africa.png',
  graduationCap: '/images/badges/graduationCap.png',
  chick: '/images/badges/hatchingChick.png',
  laptop: '/images/badges/laptop.png',
  speechbubble: '/images/badges/leftSpeechBubble.png',
  lightBulb: '/images/badges/lightBulb.png',
  medal: '/images/badges/militaryMedal.png',
  book: '/images/badges/openBook.png',
  pill: '/images/badges/pill.png',
  trophy: '/images/badges/trophy.png',
  turtle: '/images/badges/turtle.png',
};

interface BadgeIconProps {
  type: keyof typeof badges;
  width?: number;
  height?: number;
}

const BadgeIcon = ({ type, width = 48, height = 48 }: BadgeIconProps) => {
  return <Image src={badges[type]} alt={`${type} badge`} width={width} height={height} />;
};

export default BadgeIcon;
