import { View, Text, StyleSheet } from "react-native";
import { XCircle } from "lucide-react-native";

export default function ErrorScreen() {
  return (
    <View style={styles.container}>
      <XCircle size={64} color="#EF4444" />
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>
        No se pudo completar la suscripción. Intenta de nuevo más tarde o revisa tu conexión.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B91C1C",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#991B1B",
    textAlign: "center",
    maxWidth: 320,
  },
});
