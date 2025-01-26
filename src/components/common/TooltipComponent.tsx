import { IconHelp } from '@tabler/icons-react';

export function TooltipComponent() {
  return (
    <div className="relative group inline-flex items-center">
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-neutral-20">
        <IconHelp size={24} />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[300px] opacity-0 group-hover:opacity-100 transition-opacity shadow-2 bg-neutral-60 rounded-lg text-neutral-0 text-center p-4 text-label-small-desktop">
        자격증 인증 심사를 받으면
        <br />
        합격자 커뮤니티를 이용할 수 있어요!
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-neutral-60"></div>
      </div>
    </div>
  );
}
