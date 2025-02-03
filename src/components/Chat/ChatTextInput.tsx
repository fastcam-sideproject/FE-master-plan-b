import { IconArrowUp } from "@tabler/icons-react";
import { FormEvent, useState } from "react";

interface ChatTextInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatTextInput({ onSendMessage }: ChatTextInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2 rounded-md">
      <input
        type="text"
        className="w-full h-[100px] rounded-5 bg-neutral-5 px-7 py-5"
        placeholder="내용을 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="absolute right-4 bottom-4 bg-neutral-85 p-2 rounded-full">
        <IconArrowUp className="text-neutral-0" />
      </button>
    </form>
  );
}