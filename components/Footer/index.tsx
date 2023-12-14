import React from "react";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import { FooterTags } from "@/lib/constants";

const Footer = () => {
  return (
    <Box
      backgroundColor="$secondary0"
      borderTopColor="$secondary200"
      borderTopWidth={1}
      mt="$20"
    >
      <HStack width="$2/4" mx="auto" p="$6" space="xl">
        {FooterTags.map((tag) => (
          <Text fontSize="$sm">{tag}</Text>
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
