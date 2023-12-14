import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { testImage } from "@/lib/constants";
import { Bookmark, MinusCircle, MoreHorizontal } from "lucide-react-native";
import { BlogSchema } from "@/lib/schema";
import { getTagTopic } from "@/lib/utils";

const BlogCard = ({ blogData }: { blogData: BlogSchema }) => {
  const router = useRouter();
  return (
    <Box mx="$6">
      <HStack mt="$6" width="$full" space="md" alignItems="center">
        <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
          <AvatarFallbackText>Vaibhavi</AvatarFallbackText>
        </Avatar>
        <Text color="$secondary400" fontWeight="$light" fontSize="$sm">
          {blogData.author}
        </Text>
        <Text color="$secondary400" fontWeight="$light" fontSize="$sm">
          {blogData.date}
        </Text>
      </HStack>

      <HStack mt="$3" justifyContent="space-between" position="relative">
        <Box width="$3/4">
          <Pressable onPress={() => router.push(`/blog/${blogData.id}`)}>
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
              {blogData.title}
            </Text>
            <Text
              mt="$2"
              color="$secondary400"
              fontWeight="$light"
              overflow="hidden"
              height={70}
              sx={{
                "@base": {
                  display: "none",
                },
                "@sm": {
                  overflow: "ellipsis",
                  display: "flex",
                },
              }}
            >
              {blogData.content}
            </Text>
          </Pressable>

          <HStack
            width="$full"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack
              space="md"
              sx={{
                "@base": {
                  py: "$4",
                },
                "@md": {
                  py: "$8",
                },
              }}
            >
              <Pressable>
                <Badge
                  size="md"
                  variant="solid"
                  borderRadius="$full"
                  backgroundColor="$secondary100"
                >
                  <BadgeText p="$0.5" color="$secondary900" fontSize="$xs">
                    {getTagTopic(blogData.tagsId)}
                  </BadgeText>
                </Badge>
              </Pressable>

              <Text fontSize="$sm" color="$secondary400">
                4 min read
              </Text>
            </HStack>
            <HStack space="md">
              <Icon as={Bookmark} m="$1" w="$5" h="$5" color="$secondary300" />

              <Icon
                as={MinusCircle}
                m="$1"
                w="$5"
                h="$5"
                color="$secondary300"
              />
              <Icon
                as={MoreHorizontal}
                m="$1"
                w="$5"
                h="$5"
                color="$secondary300"
              />
            </HStack>
          </HStack>
        </Box>
        <Box
          position="absolute"
          right={0}
          sx={{
            "@base": {
              height: "55px",
              width: "65px",
            },
            "@lg": {
              height: "112px",
              width: "112px",
            },
          }}
        >
          <Image
            src={testImage}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="medium logo"
          />
        </Box>
      </HStack>

      <Divider my="$0.5" bg="$secondary100" />
    </Box>
  );
};

export default BlogCard;
