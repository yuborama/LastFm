import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import "react-native-url-polyfill/auto";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "red",
        }}
      >
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaView>
    </>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
