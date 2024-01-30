"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { turnDarkMode } from "@/slices/controllerSlice";
import { UserButton } from "@clerk/nextjs";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const Navbar: React.FC = () => {
  const darkMode = useAppSelector((state) => state.controller[0].darkMode);
  const dispatch = useAppDispatch();

  const handleDarkModeToggle = () => {
    dispatch(turnDarkMode({ index: 0, darkMode: !darkMode }));
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div
          className={cn(
            "px-3 mb-6 mx-auto w-11/12 rounded-xl ",
            darkMode ? "bg-black/75" : "bg-white"
          )}
        >
          <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5">
            <div className="flex items-center lg:mb-0 mb-5 mr-3 lg:mb-0">
              <img
                src="http://immibot.ai/wp-content/uploads/2023/04/cropped-immibot_logo_square_icon_stacked_1.png"
                alt="Immibot Logo"
                className="h-8 w-8 mr-2"
              />
              <span
                className={cn(
                  "my-0 ml-2 flex font-semibold text-[1.35rem]/[1.2] flex-col justify-center",
                  darkMode ? "text-white" : "text-dark"
                )}
              >
                Meet Our Attorney
              </span>
            </div>
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Search Profile" />
                </div>
              </div>

              <div className="relative flex items-center ml-2 lg:ml-4">
                <Switch
                  checked={darkMode}
                  onCheckedChange={handleDarkModeToggle}
                  className="my-1.5"
                />

                <span className="ml-4">
                  {/* User Button */}
                  <UserButton afterSignOutUrl="/" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
