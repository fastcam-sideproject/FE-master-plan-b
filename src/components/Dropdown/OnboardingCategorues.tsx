import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import OnbordingDropDown from "./OnbordingDropDown";
interface JobDropdownToggleProps {
  onSelect?: (main: string, sub: string) => void;
}
export default function JobDropdownToggle({ onSelect }: JobDropdownToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="text-body-xlarge-desktop flex items-center gap-4"
      >
        직군 · 직무
        <span className="w-[28px] h-[28px] flex justify-center items-center bg-neutral-5 rounded-4 border border-neutral-20">{isOpen ? <IconChevronUp /> : <IconChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="mt-[18px]">
          <OnbordingDropDown onSelect={onSelect} />
        </div>
      )}
    </div>
  );
}