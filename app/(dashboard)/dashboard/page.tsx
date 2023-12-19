"use client";
import React, { useState } from "react";
import { Box, HStack } from "@gluestack-ui/themed";
import BlogCard from "@/components/BlogCard";
import SuggestionsSection from "@/components/SuggestionsSection";
import WhoToFollow from "@/components/WhoToFollow";
import Recommendation from "@/components/Recommendation";
import data from "@/app/data.json";

const Dashboard = () => {
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);
  const [blogs, setBlogs] = useState(data.blogs);

  const filteredBlogs = selectedTagId
    ? data.blogs.filter((blog) => blog.tagsId === selectedTagId)
    : data.blogs;

  return (
    <HStack
      position="relative"
      mx="auto"
      justifyContent="space-around"
      sx={{
        "@base": {
          px: "$6",
          height: "100%",
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
        {filteredBlogs.map((blog) => {
          return <BlogCard blogData={blog} key={blog.id} />;
        })}
      </Box>

      <Box
        h="$full"
        px="$8"
        pb="$12"
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
        <Recommendation
          selectedTagId={selectedTagId}
          setSelectedTagId={setSelectedTagId}
        />
        <WhoToFollow />
      </Box>
    </HStack>
  );
};

export default Dashboard;
