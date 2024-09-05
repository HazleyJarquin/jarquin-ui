import { Text, StyleSheet } from "react-native";

export type CustomTextProps = {
  text: string;
};

export const CustomText = ({ text }: CustomTextProps) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
  },
});
