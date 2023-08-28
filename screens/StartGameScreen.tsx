import { FC, useState } from "react";
import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen: FC = (props) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const validateEntry = () => {
    if (enteredNumber === "") {
      Alert.alert("Wrong input", "Please enter a number", [
        { text: "Okay", style: "destructive", onPress: resetGame },
      ]);
      return;
    }
    if (isNaN(parseInt(enteredNumber))) {
      Alert.alert("Wrong input", "Please enter a valid number", [
        { text: "Okay", style: "destructive", onPress: resetGame },
      ]);
      return;
    }
    if (parseInt(enteredNumber) < 1 || parseInt(enteredNumber) > 99) {
      Alert.alert("Wrong input", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetGame },
      ]);
      return;
    }
    console.log("Valid");
  };

  const resetGame = () => {
    setEnteredNumber("");
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "gray",
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginTop: 60,
        borderRadius: 8,
        elevation: 20,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
      }}
    >
      <TextInput
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          textAlign: "center",
          height: 40,
          width: 40,
          fontSize: 32,
          borderBottomColor: "pink",
          borderBottomWidth: 1,
          color: "pink",
          marginVertical: 8,
          fontWeight: "bold",
        }}
        maxLength={2}
        onChangeText={(text) => {
          setEnteredNumber(text);
        }}
        value={enteredNumber}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <PrimaryButton title="Reset" action={resetGame} />
        <PrimaryButton title="Confirm" action={validateEntry} />
      </View>
    </View>
  );
};

export default GameStartScreen;
