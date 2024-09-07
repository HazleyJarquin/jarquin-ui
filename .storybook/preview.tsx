import type { Preview } from "@storybook/react";
import { NativeBaseProvider } from "native-base";

import { customTheme } from "../src/theme/index";
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
      <NativeBaseProvider theme={customTheme}>
        <Story />
      </NativeBaseProvider>
    ),
  ],
};

export default preview;
