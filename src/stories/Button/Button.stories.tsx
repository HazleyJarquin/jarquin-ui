import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet } from "react-native";
import { CustomButton } from "../../components/Button/Button";
import { Box } from "native-base";
import React from "react";

const meta = {
  title: "Components/CustomButton",
  component: CustomButton,
  decorators: [
    (Story) => (
      <Box style={styles.centered}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    text: "Press me",
    onPress: () => alert("Pressed"),
    variant: "tertiary",
    textStyle: { color: "red" },
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
