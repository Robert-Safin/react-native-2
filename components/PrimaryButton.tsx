import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  title: string;
  action: () => void;
}

const PrimaryButton: FC<Props> = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      style={{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
        flex: 1,
      }}
    >
      <Pressable
        android_ripple={{
          color: "pink",
        }}
        style={({ pressed }) => ({
          backgroundColor: "black",
          opacity: pressed ? 0.5 : 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
        })}
        onPress={() => props.action()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
