import { useAppSelector } from "@/lib/hooks";
import { useUser } from "@clerk/nextjs";

const ChatMessagesGrid: React.FC = () => {
  const value = useAppSelector((state) => state.controller);

  const imageUrl = value[0].imageUrl;
  const message = value[0].messages;

  const { user } = useUser();
  const username = user?.firstName;
  const profile = user?.imageUrl;

  return (
    <div className="grid grid-cols-10 gap-y-2">
      <div className="col-start-1 col-end-12 p-3 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img
              src={imageUrl}
              alt="Avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>{`Hey ${username}, Thank you for visiting https://immibot.ai/!`}</div>
          </div>
        </div>
      </div>

      <div className="col-start-1 col-end-10 p-3 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img
              src={imageUrl}
              alt="Avatar"
              className="h-full w-full rounded-full"
            />
          </div>

          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>
              We appreciate your interest. Our team will be in touch with you
              shortly. Feel free to explore our site for more information in the
              meantime. We look forward to connecting with you and assisting
              with any immigration-related inquiries.
            </div>
          </div>
        </div>
      </div>

      {message.map((e, i) => {
        if (e !== "") {
          return (
            <div
              className="col-start-5 col-end-13 p-3 rounded-lg justify-self-end"
              key={i}
            >
              <div className="flex flex-row items-center">
                <div className="relative mr-3 text-sm bg-indigo-500 py-2 px-4 shadow rounded-xl text-white">
                  <div>{e}</div>
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  <img
                    src={profile}
                    alt="Avatar"
                    className="h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ChatMessagesGrid;
