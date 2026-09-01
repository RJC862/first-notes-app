import AddNewNoteButton from "@/components/AddNewNoteButton";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const newNote = () => {
    // functionality
  };
  return (
    <View style={styles.rootContainer}>
      <AddNewNoteButton onPress={newNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#222120",
  },
});
