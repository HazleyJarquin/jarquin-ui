import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Storybook from "./.storybook";
import { NativeBaseProvider } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnable ? Storybook : App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
