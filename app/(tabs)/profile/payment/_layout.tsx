import { Stack } from "expo-router";
import { PurchasesProvider } from "../../../../context/PurchasesContext";

export default function PaymentLayout() {
  return (
    <PurchasesProvider>
      <Stack />
    </PurchasesProvider>
  );
}
