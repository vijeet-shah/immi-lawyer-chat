"use client";

import ChatApp from "@/components/ChatApp";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

function LawyerChat() {
  return (
    <Provider store={store}>
      <div>
        <ChatApp />
      </div>
    </Provider>
  );
}

export default LawyerChat;
