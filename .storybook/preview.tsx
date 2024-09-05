import type { Preview } from "@storybook/react";
import { NativeBaseProvider } from "native-base";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <NativeBaseProvider>
        <Story />
      </NativeBaseProvider>
    ),
  ],
};

export default preview;
