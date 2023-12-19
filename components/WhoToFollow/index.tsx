import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Box,
  HStack,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import data from "@/app/data.json";

const WhoToFollow = () => {
  return (
    <Box mt="$10" width="$full">
      <Text color="$secondary900" fontWeight="$semibold">
        Who to follow
      </Text>
      {data.users.map((user, index) => {
        if (index < 3)
          return (
            <HStack
              pt="$4"
              justifyContent="space-between"
              width="$full"
              key={user.id}
            >
              <HStack
                width="65%"
                sx={{
                  "@xl": {
                    width: "70%",
                  },
                }}
              >
                <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
                  <AvatarFallbackText>{user.username}</AvatarFallbackText>
                </Avatar>
                <Box ml="$4" maxWidth="92%">
                  <Text fontWeight="$semibold" color="$secondary900">
                    {user.username}
                  </Text>
                  <Text fontSize="$xs">
                    I write about business, and leadership development.
                  </Text>
                </Box>
              </HStack>
              <Box
                justifyContent="center"
                width="30%"
                sx={{
                  "@xl": {
                    width: "25%",
                  },
                }}
              >
                <Pressable>
                  <Badge
                    size="md"
                    borderRadius="$full"
                    backgroundColor="$white"
                    borderColor="$secondary900"
                    variant="outline"
                  >
                    <BadgeText p="$1.5" color="$secondary900" fontSize="$xs">
                      Follow
                    </BadgeText>
                  </Badge>
                </Pressable>
              </Box>
            </HStack>
          );
      })}

      <Pressable>
        <Text color="$green600" fontSize="$xs" mt="$4">
          See the full list
        </Text>
      </Pressable>
    </Box>
  );
};

export default WhoToFollow;
