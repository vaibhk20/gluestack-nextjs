import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import React from "react";
import { Platform } from "react-native";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === "web") {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // value = useDarkMode();
    }
    return (
      <GluestackUIProvider config={config}>
        <Story />
      </GluestackUIProvider>
    );
  },
];

export default preview;
