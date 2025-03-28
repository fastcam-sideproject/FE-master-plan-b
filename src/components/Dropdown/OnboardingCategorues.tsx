import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import OnbordingDropDown from "./OnbordingDropDown";

export default function JobDropdownToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="text-body-xlarge-desktop flex items-center gap-2"
      >
        직군 · 직무
        <span className="text-lg">{isOpen ? <IconChevronUp /> : <IconChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="mt-4">
          <OnbordingDropDown />
        </div>
      )}
    </div>
  );
}