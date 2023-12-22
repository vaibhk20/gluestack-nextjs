import React, { use, useContext, useEffect, useRef, useState } from "react";
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
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
} from "@gluestack-ui/themed";
import { User } from "lucide-react-native";
import Image from "next/image";
import Link from "next/link";
import AddBlogModal from "../AddBlogModal";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const { logout, isLoggedIn } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

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
          <Popover
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="bottom"
            size="md"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Avatar bgColor="$secondary200" h="$8" w="$8">
                    <Icon as={User} color="white" size="xl" />
                  </Avatar>
                </Pressable>
              );
            }}
          >
            <PopoverBackdrop />
            <PopoverContent width="$20">
              <PopoverBody>
                <Pressable onPress={() => logout()}>
                  <Text size="sm">Logout</Text>
                </Pressable>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </HStack>
      <AddBlogModal showModal={showModal} setShowModal={setShowModal} />
    </Box>
  );
};

export default Header;
