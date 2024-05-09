"use client";
import { UserContext } from "@/context/UserContext";
import {
  Box,
  Button,
  ButtonText,
  Text,
  Input,
  InputField,
  VStack,
  ToastTitle,
  ToastDescription,
  useToast,
  Toast,
} from "@gluestack-ui/themed";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login } = useContext(UserContext);
  const toast = useToast();
  const router = useRouter();

  const loginHandler = () => {
    if (username === "") {
      toast.show({
        placement: "top right",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <Toast nativeID={toastId} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Hi User!</ToastTitle>
                <ToastDescription>Please enter valid username</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
      return;
    }
    const user = {
      username: username,
      id: uuidv4(),
    };
    login(user);
    setLoading(true);
    setTimeout(() => {
      setUsername("");
      router.push("/dashboard");
    }, 2000);
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <Box
      sx={{
        "@base": {
          height: "100vh",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        hardShadow="5"
        borderRadius="$sm"
        m="auto"
        p="$12"
        sx={{
          "@base": {
            width: "100%",
            height: "100%",
          },
          "@md": {
            width: "680px",
            height: "680px",
          },
        }}
      >
        <Box
          mx="auto"
          sx={{
            "@md": {
              maxWidth: "$1/2",
            },
          }}
        >
          <Text
            fontSize="$3xl"
            lineHeight="$2xl"
            color="$secondary950"
            textAlign="center"
          >
            Sign in with username
          </Text>
          <Text
            fontSize="$md"
            textAlign="center"
            mt={30}
            sx={{
              "@base": {
                display: "none",
              },
              "@md": {
                display: "flex",
              },
            }}
          >
            Enter the email address associated with your account, and we’ll send
            a magic link to your inbox.
          </Text>
          <Text fontSize="$sm" textAlign="center" mt={62}>
            Your username
          </Text>
          <Box>
            <Input variant="underlined" size="md" isRequired={true}>
              <InputField
                placeholder=""
                textAlign="center"
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </Input>
            <Button
              mt={42}
              backgroundColor={loading ? "#696969" : "#191919"}
              rounded="$full"
              width="$5/6"
              mx="auto"
              onPress={loginHandler}
              disabled={loading}
            >
              <ButtonText fontWeight="$light" fontSize="$sm">
                {loading ? "Loading..." : "Continue"}
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
