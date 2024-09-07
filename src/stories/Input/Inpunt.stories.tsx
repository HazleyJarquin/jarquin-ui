import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet } from "react-native";

import { Box } from "native-base";
import { Input } from "../../components/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <Box style={styles.centered}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    variant: "primary",
    placeholder: "Type something",
    label: "hi",
    labelStyle: { color: "red" },
    asterisk: true,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    asterisk: {
      control: { type: "boolean" },
    },
  },
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
