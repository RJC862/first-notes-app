import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function AddNewNoteButton({ onPress }: Props) {
  return (
    <View style={styles.newNoteButtonContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="add" size={20} color="#ED7845" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  newNoteButtonContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 50,
    marginVertical: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F5EB27",
    padding: 3,
    alignSelf: "flex-end",
  },

  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
