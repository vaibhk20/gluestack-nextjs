"use client";

import { useContext } from "react";
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Text,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { UserContext } from "../context/UserContext";
import Login from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main>
      <Container />
    </main>
  );
}

const FeatureCard = ({ iconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Image
          src={`/${iconSvg}`}
          alt="document"
          width={22}
          height={22}
          priority
        />
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  const { user } = useContext(UserContext);
  return user === null ? <Login /> : <Dashboard />;
};
