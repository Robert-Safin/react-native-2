import { FC, useCallback, useState } from "react";
import { Alert, Dimensions, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
interface Props {
  userNumber: number;
}

const GameScreen: FC<Props> = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  let maxBoundary = 100;
  let minBoundary = 1;

  const deviceWidth = Dimensions.get("window").width;

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    const nextGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextGuess);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          width: "100%",
          fontSize: 24,
          fontWeight: "bold",
          color: "pink",
          borderWidth: 1,
          borderColor: "pink",
          textAlign: "center",
          paddingVertical: 4,
        }}
      >
        Opponents guess
      </Text>

      <Text
        style={{
          width: "75%",
          marginTop: 16,
          fontSize: 36,
          fontWeight: "bold",
          color: "pink",
          borderWidth: 2,
          borderColor: "pink",
          textAlign: "center",
          paddingVertical: 12,
          borderRadius: 8,
        }}
      >
        {currentGuess}
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 300,
        }}
      >
        <PrimaryButton title="-" action={() => nextGuessHandler("lower")} />
        <PrimaryButton title="+" action={() => nextGuessHandler("greater")} />
      </View>
    </View>
  );
};

export default GameScreen;

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};
