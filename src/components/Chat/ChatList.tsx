"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";
import ChatTextInput from "./ChatTextInput";

type ChatMessage = {
  id: number;
  senderId: number;
  message: string;
  time: string;
  avatar: string;
};

type ChatData = {
  chatRoomId: string;
  messages: ChatMessage[];
};


//추후 웹소켓으로 구현해야하는거 같습니다(데이터는 지피티가 만들어줌)
const chatData: ChatData = {
  "chatRoomId": "1234",
  "messages": [
    { "id": 1, "senderId": 2, "message": "안녕하세요!", "time": "10:00 AM", "avatar": "/avatars/user2.png" },
    { "id": 2, "senderId": 1, "message": "안녕하세요! 만나서 반갑습니다.", "time": "10:01 AM", "avatar": "/avatars/user1.png" },
    { "id": 3, "senderId": 2, "message": "요즘 어떻게 지내세요?", "time": "10:02 AM", "avatar": "/avatars/user2.png" },
    { "id": 4, "senderId": 1, "message": "잘 지내고 있어요. 당신은요?", "time": "10:03 AM", "avatar": "/avatars/user1.png" },
    { "id": 5, "senderId": 2, "message": "저도 잘 지내고 있어요! 주말에 뭐 하시나요?", "time": "10:04 AM", "avatar": "/avatars/user2.png" },
    { "id": 6, "senderId": 1, "message": "친구들과 만나서 영화 보려고요 😊", "time": "10:05 AM", "avatar": "/avatars/user1.png" },
    { "id": 7, "senderId": 2, "message": "좋네요! 무슨 영화 보세요?", "time": "10:06 AM", "avatar": "/avatars/user2.png" },
    { "id": 8, "senderId": 1, "message": "아직 고민 중이에요. 추천할 만한 영화 있나요?", "time": "10:07 AM", "avatar": "/avatars/user1.png" },
    { "id": 9, "senderId": 2, "message": "저는 '인터스텔라' 추천해요! 정말 감동적이에요.", "time": "10:08 AM", "avatar": "/avatars/user2.png" },
    { "id": 10, "senderId": 1, "message": "좋은 추천 감사합니다! 한번 볼게요 😊", "time": "10:09 AM", "avatar": "/avatars/user1.png" }
  ]
};

export default function ChatList() {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChat(chatData.messages);
  }, []);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: chat.length + 1,
      senderId: 1,
      message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      avatar: "/avatars/user1.png",
    };

    setChat([...chat, newMessage]);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="w-[335px] h-[300px] sm:w-[500px] sm:h-[380px] lg:w-[800px] lg:h-[500px] p-7">
      <div ref={chatContainerRef} className="h-[300px] flex flex-col gap-4 p-4 overflow-scroll">
        {chat.map((msg) => (
          <ChatBox
            key={msg.id}
            message={msg.message}
            sender={msg.senderId === 1 ? "me" : "other"}
            time={msg.time}
            avatar={msg.avatar}
          />
        ))}
      </div>
      <ChatTextInput onSendMessage={handleSendMessage} />
    </div>
  );
}