import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Hello Bye
      </Text>
    </View>
  );
}
