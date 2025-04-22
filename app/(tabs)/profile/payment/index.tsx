import { View, Text, Button, ActivityIndicator, Alert, Platform, Linking, TouchableOpacity } from "react-native";
import { usePurchases } from "../../../../context/PurchasesContext";
import Purchases from "react-native-purchases";

export default function PaywallScreen() {
  const { currentOffering, isLoading } = usePurchases();

  const handlePurchase = async () => {
    try {
      const selectedPackage = currentOffering?.availablePackages.find(
        (pack) => pack.product.identifier === "11"
      );

      if (!selectedPackage) {
        Alert.alert("Ups", "No se encontró el plan con ID 11.");
        return;
      }

      const { customerInfo } = await Purchases.purchasePackage(selectedPackage);

      const isActive = Object.keys(customerInfo.entitlements.active).length > 0;

      if (isActive) {
        Alert.alert("¡Gracias!", "Suscripción activada con éxito.");
      } else {
        Alert.alert("Error", "La suscripción no se activó correctamente.");
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        console.error("Error al comprar:", e);
        Alert.alert("Error", e.message || "Ocurrió un error durante la compra.");
      }
    }
  };

  if (Platform.OS !== "ios") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Este paywall solo está disponible en iOS.</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!currentOffering) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text>No hay planes de suscripción disponibles por el momento.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Suscríbete al Plan BiMensual
      </Text>
      <Text style={{ marginBottom: 12 }}>
        Accede a todo el contenido exclusivo suscribiéndote ahora.
      </Text>
      <Text style={{ marginBottom: 20 }}>
        • Duración: 2 meses{"\n"}
        • Precio: 39,99 € cada 2 meses{"\n"}
        • Renovación automática. Puedes cancelar en cualquier momento desde la App Store.
      </Text>
      <Button title="Suscribirse ahora" onPress={handlePurchase} />

      {/* Enlaces legales */}
      <View style={{ marginTop: 24 }}>
        <TouchableOpacity onPress={() => Linking.openURL("https://fitnesshibridoapp.fitnesshibrido.com/politica-de-privacidad/")}>
          <Text style={{ color: "#007aff", textAlign: "center", marginBottom: 8 }}>
            Política de Privacidad y Términos de Servicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.apple.com/legal/internet-services/itunes/dev/stdeula/")}>
          <Text style={{ color: "#007aff", textAlign: "center" }}>
            Términos de uso (EULA - Apple)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
