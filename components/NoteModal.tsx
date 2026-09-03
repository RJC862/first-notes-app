import { Modal, View } from "react-native";
import CloseNoteButton from "./CloseNoteButton";
import NoteTextInput from "./NoteTextInput";

type Props = {
  closeNote: () => void;
  modalVisible: boolean;
};
export default function NoteModal({ closeNote, modalVisible }: Props) {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View>
        <CloseNoteButton onPress={closeNote} />
      </View>

      <NoteTextInput />
    </Modal>
  );
}
