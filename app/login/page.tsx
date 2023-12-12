import { UserContext } from "@/context/UserContext";
import {
  Box,
  Button,
  ButtonText,
  Text,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { useContext, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(UserContext);
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
        <Box maxWidth="$1/2" mx="auto">
          <Text
            fontSize="$3xl"
            lineHeight="$2xl"
            color="$secondary950"
            textAlign="center"
          >
            Sign in with username
          </Text>
          <Text fontSize="$md" textAlign="center" mt={30}>
            Enter the email address associated with your account, and we’ll send
            a magic link to your inbox.
          </Text>
          <Text fontSize="$sm" textAlign="center" mt={62}>
            Your username
          </Text>
          <Box>
            <Input variant="underlined" size="md">
              <InputField
                placeholder=""
                textAlign="center"
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </Input>
            <Button
              mt={42}
              backgroundColor="#191919"
              rounded="$full"
              width="$5/6"
              mx="auto"
              onPress={() => {
                login(username);
                setTimeout(() => {
                  setUsername("");
                }, 1000);
              }}
            >
              <ButtonText fontWeight="$light">Continue</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
