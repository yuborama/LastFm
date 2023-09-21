import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
// import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaView>
    </>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
