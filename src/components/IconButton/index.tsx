import { IconButton as Ico, IIconButtonProps } from "native-base";

export type Props = IIconButtonProps & {
  variant: "primary" | "secondary" | "tertiary";
};
export const IconButton = ({ variant, ...props }: Props) => {
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
    <Ico
      {...props}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
    />
  );
};
