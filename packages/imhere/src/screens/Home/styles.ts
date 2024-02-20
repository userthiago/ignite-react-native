import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,

    backgroundColor: "#1F1E25",
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 4,

    color: "#FFFFFF",
    fontSize: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#31CF67",
    width: 56,
    height: 56,
    borderRadius: 4,
  },
  form: {
    flexDirection: "row",
    gap: 8,

    width: "100%",
    marginTop: 36,
    marginBottom: 42,
  },
});
