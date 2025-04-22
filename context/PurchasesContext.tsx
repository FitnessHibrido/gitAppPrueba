import { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import Purchases, { CustomerInfo, PurchasesOffering } from "react-native-purchases";

const API_KEY = "appl_NMARpDmVGCRAnFXWqDQMlYEgRJF";

type PurchasesContextType = {
    currentOffering: PurchasesOffering | null;
    customerInfo: CustomerInfo | null;
    isLoading: boolean;
    hasActiveSubscription: boolean;
};

export const PurchasesContext = createContext<PurchasesContextType>({
    currentOffering: null,
    customerInfo: null,
    isLoading: true,
    hasActiveSubscription: false,
});

export const usePurchases = () => useContext(PurchasesContext);

export function PurchasesProvider({ children }: { children: React.ReactNode }) {
    const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

    useEffect(() => {
        const setup = async () => {
            if (Platform.OS !== "ios") {
                setIsLoading(false);
                return;
            }

            try {
                Purchases.configure({ apiKey: API_KEY });

                const offerings = await Purchases.getOfferings();
                const customer = await Purchases.getCustomerInfo();

                setCurrentOffering(offerings.current ?? null);
                setCustomerInfo(customer);

                const isActive = Object.keys(customer.entitlements.active).length > 0;
                setHasActiveSubscription(isActive);
            } catch (error) {
                console.error("RevenueCat setup error", error);
            } finally {
                setIsLoading(false);
            }
        };

        setup();
    }, []);

    return (
        <PurchasesContext.Provider
            value={{
                currentOffering,
                customerInfo,
                isLoading,
                hasActiveSubscription,
            }}
        >
            {children}
        </PurchasesContext.Provider>
    );
}
