import { Box, Pressable, Text } from "@gluestack-ui/themed";
import React from "react";
import SuggestionsCard from "../SuggestionsCard";

const SuggestionsSection = () => {
  return (
    <Box mt="$10">
      <Text color="$secondary900" fontWeight="$semibold" mb="$6">
        Staff Picks
      </Text>
      <SuggestionsCard />
      <Pressable>
        <Text color="$green600" fontSize="$xs">
          See the full list
        </Text>
      </Pressable>
    </Box>
  );
};

export default SuggestionsSection;
