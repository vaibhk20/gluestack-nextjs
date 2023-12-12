import React from "react";
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
} from "@gluestack-ui/themed";
import { User } from "lucide-react-native";
import Image from "next/image";

const Header = () => {
  return (
    <HStack px="$6" py="$2" justifyContent="space-between">
      <HStack alignItems="center" space="2xl">
        <Image src="/mediumLogo.svg" width={42} height={42} alt="medium logo" />
        <Input px="$4" rounded="$full">
          <InputSlot pr="$2">
            <InputIcon as={SearchIcon} size="lg" />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
      </HStack>
      <HStack alignItems="center" space="3xl">
        <HStack space="sm">
          <Icon as={EditIcon} w="$6" h="$6" color="$secondary300" />
          <Text color="$secondary300" fontWeight="$light">
            Write
          </Text>
        </HStack>
        <Icon as={BellIcon} w="$6" h="$6" color="$secondary300" />
        <Avatar bgColor="$secondary200" h="$8" w="$8">
          <Icon as={User} color="white" size="xl" />
        </Avatar>
      </HStack>
    </HStack>
  );
};

export default Header;
