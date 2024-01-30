"use client";

import { GlobalContextProvider } from "./contexts/GlobalContext";
import Home from "./home";

export default function Page() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}
