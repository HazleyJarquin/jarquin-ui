import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { Button, NativeBaseProvider, Text } from "native-base";
import { customTheme } from "./src/theme";

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <View style={styles.container}>
        <Text color="primary.900">
          Open up App.tsx to start working on your app!
        </Text>

        <StatusBar style="auto" />
      </View>
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
});
