import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CloseNoteButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="close" size={25} color={"#E7180B"} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
  },

  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
