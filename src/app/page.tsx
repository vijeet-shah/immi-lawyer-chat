"use client";

import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gradient-to-br ">
        <Navbar />
        <Card />
      </div>
    </Provider>
  );
}
