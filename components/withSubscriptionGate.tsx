import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator, Text, Platform } from "react-native";
import { usePurchases } from "../context/PurchasesContext";

export default function withSubscriptionGate(WrappedComponent: React.ComponentType) {
    return function ProtectedComponent(props: any) {
        const { hasActiveSubscription, isLoading } = usePurchases();
        const router = useRouter();

        useEffect(() => {
            // ⚠️ Solo protegemos si es iOS y ya terminó de cargar
            if (
                Platform.OS === "ios" &&
                !isLoading &&
                hasActiveSubscription === false
            ) {
                router.replace("/(tabs)/profile/payment");
            }
        }, [hasActiveSubscription, isLoading]);

        // Mensaje para otros SO
        if (Platform.OS !== "ios") {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Esta funcionalidad solo está disponible en iOS.</Text>
                </View>
            );
        }

        // Estado de carga
        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        // Si todo bien, renderiza el componente original
        return <WrappedComponent {...props} />;
    };
}
