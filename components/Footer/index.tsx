import React from "react";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import { FooterTags } from "@/lib/constants";
import RelatedBlogCard from "../RelatedBlogCard";

const Footer = () => {
  return (
    <Box backgroundColor="$secondary0" pt="$20" mt="$20">
      <HStack
        mx="auto"
        p="$6"
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
        <RelatedBlogCard />
        <RelatedBlogCard />
      </HStack>
      <Box borderTopColor="$secondary200" borderTopWidth={1} mt="$20">
        {/* <HStack
          mx="auto"
          p="$6"
          space="xl"
          sx={{
            "@base": {},
            "@md": {
              width: "$2/4",
            },
          }}
        >
          {FooterTags.map((tag) => (
            <Text fontSize="$sm">{tag}</Text>
          ))}
        </HStack> */}
      </Box>
    </Box>
  );
};

export default Footer;
