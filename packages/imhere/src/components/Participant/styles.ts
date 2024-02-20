import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#1F1E25",
    width: "100%",
    borderRadius: 4,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#E23C44",
    width: 56,
    height: 56,
    borderRadius: 4,
  },
});
