import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function AddNewNoteButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [
        styles.buttonContainer,
        hovered && styles.buttonHovered,
      ]}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="add"
          size={20}
          color="#ED7845"
          style={{ marginTop: 2 }}
        />
        <Text style={styles.text}>New Note</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 50,
    marginVertical: 25,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#A88F00",
    alignSelf: "flex-end",
    alignItems: "center",

    transitionProperty: "background-color, border-color",
    transitionDuration: "100ms",
  },

  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    color: "#ED7845",
    fontSize: 16,
    fontWeight: 600,
    includeFontPadding: false,
  },

  buttonHovered: {
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 50,
    marginVertical: 25,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#A88F00",
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(245, 235, 39, 0.1)",
  },
});
