import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./components/PrimaryButton";
import GameStartScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["black", "white"]}
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
      imageStyle={{
        opacity: 0.2,
      }}
      source={require('./assets/img.png')}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
      >
        <StatusBar style="inverted" />
        <GameStartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
