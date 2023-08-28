import { FC } from "react";
import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen: FC = (props) => {
  return (
    <View
      style={{
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
          borderBottomColor: "lime",
          borderBottomWidth: 1,
          color: "lime",
          marginVertical: 8,
          fontWeight: "bold",
        }}
        maxLength={2}
      />
      <PrimaryButton title="Reset" />
      <PrimaryButton title="Confirm" />
    </View>
  );
};

export default GameStartScreen;
