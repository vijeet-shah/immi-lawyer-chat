"use client";

import Card from "@/components/Card";
import LawyerCard from "@/components/LawyerCard";
import Navbar from "@/components/Navbar";
import { store } from "@/lib/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { Provider } from "react-redux";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const username = user?.fullName;

  return (
    <Provider store={store}>
      <div className="h-screen bg-gradient-to-br ">
        <Navbar />
        <Card />
      </div>
    </Provider>
  );
}
