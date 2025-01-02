import { IconPencil } from '@tabler/icons-react';

export default function Fab() {
  return (
    <button
      className="w-[64px] h-[64px] p-[20px] rounded-10 border stroke-normal border-neutral-10 bg-neutral-0 shadow-[0px_0px_15px_0px_rgba(70,69,107,0.10)]"
      aria-label="edit button"
      type="button"
    >
      <IconPencil width={24} height={24} />
    </button>
  );
}
