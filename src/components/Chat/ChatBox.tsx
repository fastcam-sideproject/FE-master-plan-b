import { Avatar } from "../common/Avatar";


type ChatMessage = {
  message: string;
  sender: "me" | "other";
  time: string;
  avatar?: string;
}

export default function ChatBox({ message, sender, time, avatar }: ChatMessage) {
  return sender === "me" ? (
    <div className="w-fit flex flex-col gap-2 self-end">
      <div className="w-fit bg-primary-30 px-7 py-4 sm:py-5 rounded-l-7 rounded-br-7">{message}</div>
      <div className="flex justify-end">
        <span className="text-body-xsmall-desktop text-neutral-30">{time}</span>
      </div>
    </div>
  ) : (
    <div className="w-fit flex flex-col gap-2 self-start">
      <div className="bg-neutral-5 px-7 py-5 rounded-r-7 rounded-bl-7">{message}</div>
      <div className="flex items-center gap-2">
        <Avatar size={"sm"} src={avatar || ""} alt={"상대 아바타"} />
        <span className="text-body-xsmall-desktop text-neutral-30">{time}</span>
      </div>
    </div>
  );
}
