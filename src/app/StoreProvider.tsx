"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { HeroUIProvider } from "@heroui/react";
import { makeStore, AppStore } from "../store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <HeroUIProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </HeroUIProvider>
  );
}
