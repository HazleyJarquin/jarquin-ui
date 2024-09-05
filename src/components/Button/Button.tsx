import { Button } from "native-base";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const CustomButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: { color: "white" },
});
