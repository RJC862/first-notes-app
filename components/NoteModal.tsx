import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";
import CloseNoteButton from "./CloseNoteButton";
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
  const [text, onChangeText] = useState<string>("");

  const handleSave = async () => {
    if (!text.trim()) return;

    const existingData = await AsyncStorage.getItem("user_notes");
    const currentNotes = existingData ? JSON.parse(existingData) : [];
    const updatedNotes = [...currentNotes, text];
    await AsyncStorage.setItem("user_notes", JSON.stringify(updatedNotes));
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContent}>
        <View style={styles.buttonContainer}>
          <SaveNoteButton onPress={saveNote} />
          <CloseNoteButton onPress={closeNote} />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            multiline={true}
            placeholder=">"
            placeholderTextColor="#E7E5E4"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: { flex: 1, backgroundColor: "#222120" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222120",
    borderBottomWidth: 2,
    borderBottomColor: "#E7E5E4",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#222120",
  },
  textInput: {
    flex: 1,
    padding: 30,
    fontSize: 20,
    outlineStyle: "none" as any,
    color: "#E7E5E4",
  },
});
