import { View, Text, ScrollView, Platform } from "react-native";
import { usePurchases } from "../../../../context/PurchasesContext";

export default function SubscriptionHistory() {
  const { customerInfo, isLoading } = usePurchases();

  if (Platform.OS !== "ios") {
    return (
      <View style={{ padding: 20 }}>
        <Text>Esta función solo está disponible en iOS.</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Cargando historial de suscripciones...</Text>
      </View>
    );
  }

  const activeEntitlements = customerInfo?.entitlements.active ?? {};

  const hasSubscriptions = Object.keys(activeEntitlements).length > 0;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Historial de Suscripciones
      </Text>

      {!hasSubscriptions && (
        <Text>No tienes suscripciones activas actualmente.</Text>
      )}

      {Object.entries(activeEntitlements).map(([key, entitlement]) => (
        <View key={key} style={{ marginBottom: 15, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Plan: {entitlement.productIdentifier}
          </Text>
          <Text>Adquirido el: {new Date(entitlement.originalPurchaseDate).toLocaleDateString()}</Text>
          {entitlement.expirationDate && (
            <Text>Expira el: {new Date(entitlement.expirationDate).toLocaleDateString()}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
