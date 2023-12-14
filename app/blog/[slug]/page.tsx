"use client";

import React from "react";
import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Icon,
  MessageCircleIcon,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import {
  Bookmark,
  PlayCircle,
  Share,
  MoreHorizontal,
} from "lucide-react-native";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { blogContent, testImage } from "@/lib/constants";
import { getBlogById } from "@/lib/utils";
import { BlogSchema } from "@/lib/schema";

const Blog = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const blog: BlogSchema | undefined = getBlogById(Number(params.slug));

  return (
    <Box>
      <Header />
      <Box width="$2/4" mx="auto" px="$6">
        <Text
          mt={50}
          fontSize="$4xl"
          lineHeight="$4xl"
          color="$secondary900"
          fontWeight="$semibold"
        >
          {blog?.title}
        </Text>
        <HStack pt="$4" width="$full" space="xl">
          <HStack>
            <Avatar bgColor="$secondary200" h="$8" w="$8">
              <AvatarImage
                source={{
                  uri: "",
                }}
              />
            </Avatar>
            <Box ml="$4">
              <Text fontWeight="$semibold" color="$secondary900">
                {blog?.author}
              </Text>
              <Text fontSize="$xs">17 min read · {blog?.date}</Text>
            </Box>
          </HStack>
          <Box>
            <Pressable>
              <Text color="$green600">Follow</Text>
            </Pressable>
          </Box>
        </HStack>
        <HStack
          mt="$8"
          borderTopColor="$secondary100"
          borderTopWidth={1}
          borderBottomColor="$secondary100"
          borderBottomWidth={1}
          justifyContent="space-between"
          p="$2"
        >
          <HStack>
            <Pressable flexDirection="row" alignItems="center">
              <Icon
                as={MessageCircleIcon}
                m="$1"
                w="$4.5"
                h="$4.5"
                color="$secondary300"
              />
              <Text fontSize="$sm" color="$secondary300">
                2
              </Text>
            </Pressable>
          </HStack>
          <HStack space="2xl">
            <Icon as={Bookmark} m="$1" w="$5" h="$5" color="$secondary300" />
            <Icon as={PlayCircle} m="$1" w="$5" h="$5" color="$secondary300" />
            <Icon as={Share} m="$1" w="$5" h="$5" color="$secondary300" />
            <Icon
              as={MoreHorizontal}
              m="$1"
              w="$5"
              h="$5"
              color="$secondary300"
            />
          </HStack>
          {/* blog content  */}
        </HStack>
        <Box>
          <Image
            src={testImage}
            alt=""
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "40px",
            }}
          />
          <Text mt="$10" fontSize="$xl" lineHeight="$2xl" fontWeight="$light">
            {blog?.content}
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Blog;
