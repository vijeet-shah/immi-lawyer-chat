import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const ChatMessagesGrid: React.FC = () => {
  const value = useAppSelector((state) => state.controller);
  const imageUrl = value[0].imageUrl;

  return (
    <div className="grid grid-cols-12 gap-y-2">
      <div className="col-start-1 col-end-8 p-3 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img
              src={imageUrl}
              alt="Avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>Hey How are you today?</div>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-8 p-3 rounded-lg">
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
              Thank you for visiting https://immibot.ai/! We appreciate your
              interest. Our team will be in touch with you shortly. Feel free to
              explore our site for more information in the meantime. We look
              forward to connecting with you and assisting with any
              immigration-related inquiries.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesGrid;
