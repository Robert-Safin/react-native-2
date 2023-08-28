import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./components/PrimaryButton";
import GameStartScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={{
      flex: 1,
    }}>
      <GameStartScreen />
    </View>
  );
}
