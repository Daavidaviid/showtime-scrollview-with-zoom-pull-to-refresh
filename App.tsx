import { StyleSheet, Text, View } from "react-native";
import { ScrollWithZoom } from "./src/pages/ScrollWithZoom/ScrollWithZoom";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollWithZoom />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
