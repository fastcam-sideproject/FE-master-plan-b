import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface MainButtonProps {
  link: string;
  innerText: string;
  color?: "black" | "white" | "primary";
  size?: "sm" | "md" | "lg";
}

export default function MainButton({ innerText, color = "primary", size = "lg", link }: MainButtonProps) {
  const router = useRouter();

  const colorClass = {
    black: "bg-neutral-85 text-primary-30 border border-primary-40 hover:bg-neutral-70 active:bg-neutral-85 active:text-primary-60",
    white: "bg-neutral-0 text-neutral-85 border border-neutral-85 hover:bg-neutral-20  active:bg-neutral-5",
    primary: "bg-primary-40 text-neutral-85 hover:bg-primary-50  active:bg-primary-60",
  }[color];

  const sizeClass = {
    sm: "p-3 text-label-large-desktop",
    md: "py-4 px-7 text-label-medium-desktop",
    lg: "py-4 px-8 text-label-large-desktop",
  }[size];



  return <button type="button" onClick={() => { router.push(`${link}`); }} className={`${colorClass} ${sizeClass} rounded-10 flex justify-center items-center gap-3`}> {innerText}{color === "black" ? <IconChevronRight /> : ""}</button >;
}
