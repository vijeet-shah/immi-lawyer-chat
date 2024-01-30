import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import { Provider } from "react-redux";
import { Switch } from "./ui/switch";
import { turnDarkMode } from "@/slices/controllerSlice";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const value = useAppSelector((state) => state.controller);
  const dispatch = useAppDispatch();

  const darkMode = value[0].darkMode;
  const lawyerName = value[0].lawerName;
  const jobTitle = value[0].jobTitle;
  const imageUrl = value[0].imageUrl;

  const handleDarkModeToggle = () => {
    dispatch(turnDarkMode({ index: 0, darkMode: !darkMode }));
  };

  return (
    <div
      className={cn(
        "flex flex-col py-8 pl-6 pr-2 w-64 flex-shrink-0 ",
        darkMode ? "bg-black/75" : "bg-white"
      )}
    >
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div
          className={cn(
            "ml-2 font-bold text-2xl",
            darkMode ? "text-white" : "text-dark"
          )}
        >
          Attorney Chat
        </div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          <img src={imageUrl} alt="Avatar" className="h-full w-full" />
        </div>
        <div className="text-sm font-semibold mt-2">{lawyerName}</div>
        <div className="text-xs text-gray-500">{jobTitle}</div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs">Active</div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span
            className={cn("font-bold", darkMode ? "text-white" : "text-dark")}
          >
            Active Conversations
          </span>
          <Switch
            checked={darkMode}
            onCheckedChange={handleDarkModeToggle}
            className="my-1.5"
          />
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              <img
                src={imageUrl}
                alt="Avatar"
                className="h-full w-full rounded-full"
              />
            </div>
            <div
              className={cn(
                "ml-2 text-sm font-semibold",
                darkMode ? "text-white" : "text-dark"
              )}
            >
              {lawyerName}
            </div>
          </button>
        </div>

        <div className="flex flex-col space-y-1 mt-4 -mx-2"></div>
      </div>
    </div>
  );
};

export default Sidebar;
