import { Modal, StyleSheet, View } from "react-native";
import CloseNoteButton from "./CloseNoteButton";
import NoteTextInput from "./NoteTextInput";

type Props = {
  closeNote: () => void;
  modalVisible: boolean;
};
export default function NoteModal({ closeNote, modalVisible }: Props) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      style={styles.modalContainer}
    >
      <View style={styles.buttonContainer}>
        <CloseNoteButton onPress={closeNote} />
      </View>
      <NoteTextInput />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, backgroundColor: "#222120" },
  buttonContainer: {
    backgroundColor: "#222120",
    borderBottomWidth: 2,
    borderBottomColor: "#E7E5E4",
  },
});
