import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getCapital } from "./api.js";
import { useEffect } from "react";

export default function App() {
  const loadCapital = async () => {
    const res = await fetch("http://192.168.100.70:3000/coinNet");
    const data = await res.json();
    console.log("second");
    console.log(data);
  };

  useEffect(() => {
    loadCapital();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
