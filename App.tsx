import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { Box, Button, NativeBaseProvider, Text } from "native-base";
import { customTheme } from "./src/theme";

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box style={styles.container}>
        <Text style={styles.text} fontFamily="heading" fontSize="xl">
          Este es un texto con la fuente ShamSans
        </Text>
        <Text fontFamily="body" fontSize="md">
          Este es otro texto con la fuente ShamSans para el cuerpo
        </Text>
        <Button backgroundColor={"text.hint"}>Hi</Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnable ? Storybook : App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
});
