import { Box, IInputProps, Input as NativeInput, Text } from "native-base";
import { StyleProp, TextStyle } from "react-native";
import React from "react";
export type InputProps = IInputProps & {
  variant: "primary" | "secondary" | "tertiary";
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  asterisk?: boolean;
};
export const Input = ({
  variant,
  label = "",
  labelStyle = {},
  asterisk = false,
  ...props
}: InputProps) => {
  const borderVariants = variant === "secondary" ? 0 : 1;
  return (
    <Box style={{ width: "100%", justifyContent: "flex-start" }}>
      {label && (
        <Text marginBottom={2} style={labelStyle}>
          {label}
          {asterisk && <Text color="red">*</Text>}
        </Text>
      )}

      <NativeInput
        {...props}
        borderWidth={1}
        borderTopWidth={borderVariants}
        borderLeftWidth={borderVariants}
        borderRightWidth={borderVariants}
      />
    </Box>
  );
};
