import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CustomText } from "../../components/CustomText";

const CustomTextMeta: Meta<typeof CustomText> = {
  title: "CustomText",
  component: CustomText,

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

export default CustomTextMeta;

export const Basic: StoryObj<typeof CustomText> = {};

export const AnotherExample: StoryObj<typeof CustomText> = {
  args: {
    text: "Another example",
  },
};
