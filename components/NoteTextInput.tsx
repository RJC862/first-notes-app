import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function NoteTextInput() {
  const [text, onChangeText] = useState<string>("hi");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 40,
    fontSize: 20,
    outlineStyle: "none" as any,
  },
});
