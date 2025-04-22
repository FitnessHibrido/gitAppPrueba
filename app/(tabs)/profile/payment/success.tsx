import { View, Text, StyleSheet } from "react-native";
import { CheckCircle } from "lucide-react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <CheckCircle size={64} color="#10B981" />
      <Text style={styles.title}>¡Suscripción activada!</Text>
      <Text style={styles.message}>
        Gracias por suscribirte al Plan BiMensual. Ya puedes disfrutar de todo el contenido premium.
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
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    maxWidth: 320,
  },
});
