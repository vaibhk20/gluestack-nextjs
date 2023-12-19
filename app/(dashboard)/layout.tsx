"use client";
import Header from "@/components/Header";
import { Box } from "@gluestack-ui/themed";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Box>
        <Header />
        {children}
      </Box>
    </main>
  );
};

export default Layout;
