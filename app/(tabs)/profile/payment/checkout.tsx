import { View, Text, Button, ActivityIndicator, Alert, Platform } from "react-native";
import { useEffect, useState } from "react";
import Purchases from "react-native-purchases";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "expo-router";

export default function CheckoutScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePurchase = async () => {
    setIsLoading(true);

    try {
      // ✅ Buscar el paquete que tenga el product_id "11"
      const offerings = await Purchases.getOfferings();
      const pack = offerings.current?.availablePackages.find(
        (p) => p.product.identifier === "11"
      );

      if (!pack) throw new Error("Paquete con ID 11 no disponible.");

      const { customerInfo } = await Purchases.purchasePackage(pack);

      const isActive = Object.keys(customerInfo.entitlements.active).length > 0;

      if (isActive) {
        const { data: user, error: authError } = await supabase.auth.getUser();
        if (authError || !user?.user?.id) throw new Error("No se pudo obtener el usuario actual");

        // ✅ Actualizar Supabase con el tipo de suscripción
        await supabase
          .from("profiles")
          .update({ subscription_type: "Plan BiMensual" })
          .eq("id", user.user.id);

        Alert.alert("¡Suscripción exitosa!");
        router.push("/(tabs)/profile/payment/success");
      } else {
        throw new Error("La suscripción no se activó correctamente.");
      }
    } catch (error) {
      console.error("Error en la compra:", error);
      Alert.alert("Error", (error as any)?.message || "Algo salió mal");
      router.push("/(tabs)/profile/payment/error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Confirmar compra de Plan BiMensual
      </Text>
      {Platform.OS !== "ios" ? (
        <Text>Esta funcionalidad está disponible solo en iOS.</Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Comprar ahora" onPress={handlePurchase} />
      )}
    </View>
  );
}
