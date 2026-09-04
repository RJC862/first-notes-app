import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CloseNoteButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <MaterialIcons name="close" size={25} color={"#E7180B"} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-end",
    padding: 10,
  },
});
