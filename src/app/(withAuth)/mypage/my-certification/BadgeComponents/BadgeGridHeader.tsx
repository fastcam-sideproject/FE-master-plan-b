import React from 'react';
import { IconHelp } from '@tabler/icons-react';
import Popover from '@/components/Popover/Popover';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { HeaderProps } from './types';

const BadgeGridHeader = ({
  title,
  helpText,
  isPopoverVisible,
  setIsPopoverVisible,
}: HeaderProps) => {
  const isMobile = useMediaQuery('(max-width: 767.9px)');
  const isTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279.9px)',
  );

  return (
    <ul className="flex gap-3">
      <li className="text-body-medium-desktop font-[700] text-neutral-0">
        {title}
      </li>
      <ul>
        <li className="relative w-fit">
          <IconHelp
            onMouseEnter={() => setIsPopoverVisible(true)}
            onMouseLeave={() => setIsPopoverVisible(false)}
            className="text-neutral-0"
          />
          {isPopoverVisible && (
            <Popover
              label={helpText}
              mode="light"
              tipDirection="up"
              tipPosition={isTablet || isMobile ? 'start' : 'center'}
              whiteSpace={isTablet || isMobile ? 'preLine' : 'nowrap'}
              className="min-w-[215px]"
            />
          )}
        </li>
      </ul>
    </ul>
  );
};

export default BadgeGridHeader;
