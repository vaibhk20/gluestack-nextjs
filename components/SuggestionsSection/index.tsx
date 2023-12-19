import React from "react";
import { Box, Pressable, Text } from "@gluestack-ui/themed";
import SuggestionsCard from "../SuggestionsCard";
import data from "@/app/data.json";

const SuggestionsSection = () => {
  return (
    <Box mt="$10">
      <Text color="$secondary900" fontWeight="$semibold" mb="$6">
        Staff Picks
      </Text>
      {data.blogs.map((blog, index) => {
        if (index < 3) return <SuggestionsCard blog={blog} key={blog.id} />;
      })}
      <Pressable>
        <Text color="$green600" fontSize="$xs">
          See the full list
        </Text>
      </Pressable>
    </Box>
  );
};

export default SuggestionsSection;
