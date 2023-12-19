import React from "react";
import { BlogSchema } from "@/lib/schema";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import Link from "next/link";

const SuggestionsCard = ({ blog }: { blog: BlogSchema }) => {
  return (
    <Box paddingBottom="$4">
      <HStack width="$full" space="sm" alignItems="center" mb="$2.5">
        <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
          <AvatarFallbackText>{blog.author}</AvatarFallbackText>
        </Avatar>
        <Text color="$secondary900" fontWeight="$semibold" fontSize="$xs">
          {blog.author}
        </Text>
        <Text color="$secondary900" fontWeight="$light" fontSize="$xs">
          in Whitespectre Ideas
        </Text>
      </HStack>
      <Link
        href={`/blog/${blog.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Text mt="$2.5" color="$secondary900" fontWeight="$bold" fontSize="$md">
          {blog.title}
        </Text>
      </Link>
    </Box>
  );
};

export default SuggestionsCard;
