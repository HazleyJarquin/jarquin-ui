import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet } from "react-native";
import { Box, Text } from "native-base";
import { InfoBanner } from "../../components/InfoBanner";
import React from "react";
const meta = {
  title: "Components/InfoBanner",
  component: InfoBanner,
  decorators: [
    (Story) => (
      <Box style={styles.centered}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof InfoBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    children: <Text color={"red"}>This is an info banner</Text>,
    variant: "secondary",
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
