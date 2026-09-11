import AddNewNoteButton from "@/components/AddNewNoteButton";
import NoteModal from "@/components/NoteModal";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const newNote = () => {
    setModalVisible(true);
  };

  const closeNote = () => {
    setModalVisible(false);
  };

  const saveNote = () => {};
  return (
    <>
      <View style={styles.rootContainer}>
        <View>
          <AddNewNoteButton onPress={newNote} />
        </View>
        <View style={styles.noteContainer}>
          <NoteModal
            closeNote={closeNote}
            modalVisible={modalVisible}
            saveNote={saveNote}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#222120",
  },

  noteContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
