import { Button, IButtonProps, Text } from "native-base";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

export type MyButtonProps = IButtonProps & {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const CustomButton = ({
  onPress,
  text,
  variant = "tertiary",
  buttonStyle = {},
  textStyle = {},
  ...props
}: MyButtonProps) => {
  const backgroundColor =
    variant === "primary"
      ? "primary.500"
      : variant === "secondary"
      ? "none"
      : variant === "tertiary"
      ? "none"
      : "";

  const borderWidth = variant === "tertiary" ? 1 : 0;

  const borderColor = variant === "tertiary" ? "text.hint" : "none";

  return (
    <Button
      style={buttonStyle}
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      {...props}
    >
      <Text style={textStyle}>{text}</Text>
    </Button>
  );
};
