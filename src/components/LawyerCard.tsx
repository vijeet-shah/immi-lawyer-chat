// LawyerCard component

import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface LawyerCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  onClickContact?: (index: number) => void;
  index: number; // Add the index parameter
}

const LawyerCard: React.FC<LawyerCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  onClickContact,
  index,
}) => {
  const darkMode = useAppSelector((state) => state.controller[0].darkMode);

  return (
    <div
      className={cn(
        "flex flex-col justify-between font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs",
        darkMode ? "bg-black/75 text-white" : "bg-white text-gray-700"
      )}
      style={{ height: "100%" }}
    >
      <div>
        <img
          className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src={imageUrl}
          alt={name}
        />
        <h1
          className={cn("text-lg ", darkMode ? "text-white" : "text-gray-700")}
        >
          {name}
        </h1>
        <h3
          className={cn("text-sm ", darkMode ? "text-white" : "text-gray-400")}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-xs mt-4 ",
            darkMode ? "text-white" : "text-gray-400"
          )}
        >
          {description}
        </p>
      </div>
      <button
        className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold tracking-wide"
        onClick={() => onClickContact && onClickContact(index)} // Pass the index parameter
      >
        Contact Now
      </button>
    </div>
  );
};

export default LawyerCard;
