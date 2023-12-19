import React, { useRef, useState } from "react";
import {
  Box,
  Input,
  Text,
  InputSlot,
  InputField,
  SearchIcon,
  InputIcon,
  EditIcon,
  Icon,
  HStack,
  BellIcon,
  Avatar,
  Pressable,
} from "@gluestack-ui/themed";
import { User } from "lucide-react-native";
import Image from "next/image";
import Link from "next/link";
import AddBlogModal from "../AddBlogModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  return (
    <Box>
      <HStack
        px="$6"
        py="$2"
        justifyContent="space-between"
        borderBottomColor="$secondary100"
        borderBottomWidth={1}
      >
        <HStack alignItems="center" space="2xl">
          <Link href="/dashboard">
            <Image
              src="/mediumLogo.svg"
              width={42}
              height={42}
              alt="medium logo"
              style={{
                cursor: "pointer",
              }}
            />
          </Link>
          <Input
            px="$4"
            rounded="$full"
            backgroundColor="$secondary0"
            sx={{
              "@base": {
                border: "none",
                display: "none",
              },
              "@md": {
                display: "flex",
              },
            }}
          >
            <InputSlot pr="$2">
              <InputIcon as={SearchIcon} size="lg" />
            </InputSlot>
            <InputField placeholder="Search" />
          </Input>
        </HStack>
        <HStack
          alignItems="center"
          space="3xl"
          sx={{
            "@base": {
              display: "none",
            },
            "@md": {
              display: "flex",
            },
          }}
        >
          <Pressable onPress={() => setShowModal(true)}>
            <HStack space="sm">
              <Icon as={EditIcon} w="$6" h="$6" color="$secondary400" />
              <Text color="$secondary400" fontWeight="$light" fontSize="$sm">
                Write
              </Text>
            </HStack>
          </Pressable>
          <Icon as={BellIcon} w="$6" h="$6" color="$secondary400" />
          <Avatar bgColor="$secondary200" h="$8" w="$8">
            <Icon as={User} color="white" size="xl" />
          </Avatar>
        </HStack>
      </HStack>
      <AddBlogModal showModal={showModal} setShowModal={setShowModal} />
    </Box>
  );
};

export default Header;
