import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/index";

export default function App() {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#162238",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <StatusBar style="light" />
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
