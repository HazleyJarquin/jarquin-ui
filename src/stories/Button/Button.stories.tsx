import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../../components/Button/Button";

const CustomButtonMeta: Meta<typeof CustomButton> = {
  title: "CustomButtom",
  component: CustomButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CustomButtonMeta;

export const Basic: StoryObj<typeof CustomButton> = {};

export const AnotherExample: StoryObj<typeof CustomButton> = {
  args: {
    text: "Another example",
  },
};
