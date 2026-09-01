import AddNewNoteButton from "@/components/AddNewNoteButton";
import CloseNoteButton from "@/components/CloseNoteButton";
import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const newNote = () => {
    setModalVisible(true);
  };

  const closeNote = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.rootContainer}>
      <View>
        <AddNewNoteButton onPress={newNote} />
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CloseNoteButton onPress={closeNote} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#222120",
  },
});
