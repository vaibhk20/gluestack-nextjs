import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import React from "react";

const SuggestionsCard = () => {
  return (
    <Box paddingBottom="$4">
      <HStack width="$full" space="sm" alignItems="center">
        <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
          <AvatarFallbackText>Vaibhavi</AvatarFallbackText>
        </Avatar>
        <Text color="$secondary900" fontWeight="$light" fontSize="$xs">
          Scott-Ryan Abt in Pitfall
        </Text>
        <Text color="$secondary900" fontWeight="$light" fontSize="$xs">
          in StoryBook
        </Text>
      </HStack>
      <Pressable>
        <Text mt="$2.5" color="$secondary900" fontWeight="$bold" fontSize="$md">
          Trying to Innovate? Put down your hammer.
        </Text>
      </Pressable>
    </Box>
  );
};

export default SuggestionsCard;
