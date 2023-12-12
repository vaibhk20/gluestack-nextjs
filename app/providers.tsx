"use client";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { UserProvider } from "../context/UserContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
    </UserProvider>
  );
}
