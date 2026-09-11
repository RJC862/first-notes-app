import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

export default function SaveNoteButton({ text, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.overlayContainer}>
        <MaterialIcons name="circle" size={30} />
        <View style={styles.overlayIcon}>
          <MaterialIcons name="check" size={20} color="#F0B13B" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
  },
  overlayContainer: { flex: 1, justifyContent: "center", alignItems: "center" },

  overlayIcon: {
    position: "absolute",
  },
});
