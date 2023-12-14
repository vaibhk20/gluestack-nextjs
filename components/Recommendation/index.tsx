import {
  Badge,
  BadgeText,
  Box,
  HStack,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import React from "react";

const Recommendation = () => {
  return (
    <Box mt="$10">
      <Text color="$secondary900" fontWeight="$semibold" mb="$6">
        Recommendations
      </Text>
      <HStack flexWrap="wrap" space="sm">
        <Pressable width="auto">
          <Badge
            size="md"
            variant="solid"
            borderRadius="$full"
            backgroundColor="$secondary100"
          >
            <BadgeText p="$1.5" color="$secondary900" fontSize="$xs">
              New feature
            </BadgeText>
          </Badge>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Recommendation;
