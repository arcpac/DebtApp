import { StyleSheet, View } from "react-native";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text>
          <Ionicons name="add" size={24} color="black" />
        </Text>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {},
});
