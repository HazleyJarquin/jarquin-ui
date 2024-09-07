import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet } from "react-native";
import React from "react";
import { Box } from "native-base";
import { IconButton } from "../../components/IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [
    (Story) => (
      <Box style={styles.centered}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    onPress: () => alert("Pressed"),
    variant: "tertiary",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
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
