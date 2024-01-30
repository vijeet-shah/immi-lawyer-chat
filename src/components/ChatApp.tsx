"use client";
import React from "react";
import Sidebar from "./Sidebar";
import ChatMessagesGrid from "./ChatMessagesGrid";
import MessageInput from "./MessageInput";

import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const ChatApp: React.FC = () => {
  const darkMode = useAppSelector((state) => state.controller[0].darkMode);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar />

        <div className="flex flex-col flex-auto h-full p-6">
          <div
            className={cn(
              "flex flex-col flex-auto flex-shrink-0 rounded-2xl  h-full p-4 ",
              darkMode ? "bg-black/75" : "bg-gray-100"
            )}
          >
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <ChatMessagesGrid />
              </div>
            </div>
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
