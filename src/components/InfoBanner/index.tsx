import { Box, IBoxProps, Text } from "native-base";
import React from "react";
export type InfoBannerProps = IBoxProps & {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
};

export const InfoBanner = ({
  variant,
  children,
  ...props
}: InfoBannerProps) => {
  const borderVariants =
    variant === "secondary" || variant === "primary" ? 0 : 1;

  return (
    <Box {...props} borderBottomWidth={borderVariants}>
      {children}
    </Box>
  );
};
