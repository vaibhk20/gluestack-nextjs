"use client";
import React from "react";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import SuggestionsSection from "@/components/SuggestionsSection";
import WhoToFollow from "@/components/WhoToFollow";
import Recommendation from "@/components/Recommendation";
import data from "@/app/data.json";
import { BlogSchema } from "@/lib/schema";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <HStack
        position="relative"
        mx="auto"
        justifyContent="space-around"
        sx={{
          "@base": {
            px: "$6",
            height: "100vh",
          },
          "@lg": {
            px: "0",
            width: "90%",
          },
        }}
      >
        <Box
          mt="$10"
          h="$full"
          sx={{
            "@base": {
              width: "100%",
            },
            "@lg": {
              width: "55%",
            },
          }}
        >
          {data.blogs.map((blog) => {
            return <BlogCard blogData={blog} />;
          })}
        </Box>
        <Box
          h="$full"
          px="$8"
          width="30%"
          minWidth={315}
          borderLeftColor="$secondary100"
          borderLeftWidth={1}
          display="none"
          sx={{
            "@lg": {
              display: "flex",
            },
          }}
        >
          <SuggestionsSection />
          <WhoToFollow />
          <Recommendation />
        </Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;
