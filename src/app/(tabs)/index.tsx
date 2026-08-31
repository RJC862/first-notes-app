import AddNewNoteButton from "@/components/AddNewNoteButton";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const newNote = () => {
    // functionality
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.newNoteButtonContainer}>
        <AddNewNoteButton onPress={newNote} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#222120",
  },

  newNoteButtonContainer: {
    justifyContent: "flex-end",
  },
});
