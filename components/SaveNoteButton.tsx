import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function SaveNoteButton({ onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.overlayContainer}>
          <MaterialIcons name="circle" size={30} />
          <View style={styles.overlayIcon}>
            <MaterialIcons name="check" size={20} color="#F0B13B" />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
  },
  overlayContainer: { flex: 1, justifyContent: "center", alignItems: "center" },

  overlayIcon: {
    position: "absolute",
  },
});
