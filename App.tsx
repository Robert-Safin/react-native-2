import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import PrimaryButton from "./components/PrimaryButton";
import GameStartScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);

  const obtainPickedNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <GameStartScreen obtainPickedNumber={obtainPickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }

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
        source={require("./assets/img.png")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <StatusBar style="inverted" />
        <SafeAreaView style={{
          flex: 1,
        }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
