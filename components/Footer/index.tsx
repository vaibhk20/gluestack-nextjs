import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { FooterTags } from "@/lib/constants";
import RelatedBlogsFold from "../RelatedBlogsFold";

const Footer = () => {
  return (
    <Box backgroundColor="$secondary0" pt="$20" mt="$20">
      <Box
        mx="auto"
        py="$6"
        sx={{
          "@lg": {
            maxWidth: "768px",
          },
        }}
      >
        <Box>
          <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
            <AvatarFallbackText>Vaibhavi</AvatarFallbackText>
          </Avatar>
        </Box>
        <HStack
          mx="auto"
          py="$6"
          space="xl"
          sx={{
            "@base": {
              flexDirection: "column",
            },
            "@md": {
              flexDirection: "row",
            },
            "@lg": {
              maxWidth: "768px",
            },
          }}
        >
          <RelatedBlogsFold />
          <RelatedBlogsFold />
        </HStack>
      </Box>
      <Box borderTopColor="$secondary200" borderTopWidth={1} mt="$20">
        <HStack
          display="none"
          mx="auto"
          p="$6"
          space="xl"
          sx={{
            "@md": {
              display: "flex",
            },
            "@lg": {
              justifyContent: "space-between",
              width: "$2/4",
            },
          }}
        >
          {FooterTags.map((tag) => (
            <Text fontSize="$sm">{tag}</Text>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
