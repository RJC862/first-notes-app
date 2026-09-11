import { Modal, StyleSheet, View } from "react-native";
import CloseNoteButton from "./CloseNoteButton";
import NoteTextInput from "./NoteTextInput";
import SaveNoteButton from "./SaveNoteButton";

type Props = {
  closeNote: () => void;
  modalVisible: boolean;
  saveNote: () => void;
};
export default function NoteModal({
  closeNote,
  modalVisible,
  saveNote,
}: Props) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      style={styles.modalContainer}
    >
      <View style={styles.buttonContainer}>
        <SaveNoteButton onPress={saveNote} />
        <CloseNoteButton onPress={closeNote} />
      </View>
      <NoteTextInput />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, backgroundColor: "#222120" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222120",
    borderBottomWidth: 2,
    borderBottomColor: "#E7E5E4",
  },
});
