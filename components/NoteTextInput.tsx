import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function NoteTextInput() {
  const [text, onChangeText] = useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        placeholder=">"
        placeholderTextColor="#E7E5E4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222120",
  },
  input: {
    flex: 1,
    padding: 30,
    fontSize: 20,
    outlineStyle: "none" as any,
    color: "#E7E5E4",
  },
});
