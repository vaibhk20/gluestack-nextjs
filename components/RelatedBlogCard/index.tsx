import { testImage2 } from "@/lib/constants";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import Image from "next/image";
import React from "react";

const RelatedBlogCard = () => {
  return (
    <Box
      width="100%"
      sx={{
        "@md": {
          width: "$1/2",
        },
      }}
      px="$4"
      pb="$12"
    >
      <Box width="100%" height={162} mb="$6">
        <Image
          alt="blog"
          fill={true}
          style={{
            objectFit: "cover",
          }}
          src={testImage2}
        />
      </Box>
      <HStack mb="$5" width="$full" space="md" alignItems="center">
        <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
          <AvatarFallbackText>Vaibhavi</AvatarFallbackText>
        </Avatar>
        <Text color="$secondary400" fontWeight="$light" fontSize="$sm">
          Vaibhavi
        </Text>
      </HStack>
      <Box>
        <Text
          color="$secondary900"
          fontWeight="$bold"
          fontSize="$md"
          sx={{
            "@md": {
              fontSize: "$xl",
            },
          }}
        >
          (How to) Run multiple React Native apps at the same time
        </Text>
        <Text mt="$2" color="$secondary400" fontWeight="$light">
          (Tested on macOS, react-native 0.72.5 in 10/2023)
        </Text>
      </Box>
    </Box>
  );
};

export default RelatedBlogCard;
