"use client";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";
import { setMessage } from "@/slices/controllerSlice";

const MessageInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  const handleButton = () => {
    dispatch(setMessage({ message: input }));
    setInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleButton();
    }
  };

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          📎
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          onClick={() => handleButton()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
