import React, { useState } from "react";
import {
  Badge,
  BadgeText,
  Box,
  HStack,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import data from "@/app/data.json";

const Recommendation = ({
  selectedTagId,
  setSelectedTagId,
}: {
  selectedTagId: number | null;
  setSelectedTagId: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <Box mt="$10">
      <Text color="$secondary900" fontWeight="$semibold" mb="$6">
        Recommendations
      </Text>
      <HStack flexWrap="wrap" space="sm">
        {data.tags.map((tag) => (
          <Pressable
            width="auto"
            key={tag.id}
            onPress={() => setSelectedTagId(tag.id)}
          >
            <Badge
              size="md"
              variant="solid"
              borderRadius="$full"
              backgroundColor="$secondary100"
            >
              <BadgeText p="$1.5" color="$secondary900" fontSize="$xs">
                {tag.name}
              </BadgeText>
            </Badge>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
};

export default Recommendation;
