import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  title: string;
}


const PrimaryButton: FC<Props> = (props) => {

  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      style={{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
      }}
    >
      <Pressable
        android_ripple={{
          color: "lime",
        }}
        style={({ pressed }) => ({
          backgroundColor: 'black',
          opacity: pressed ? 0.5 : 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
        })}
                onPress={() => console.log("pressed")}
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
