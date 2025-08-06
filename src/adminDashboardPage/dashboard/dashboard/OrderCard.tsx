// components/OrderSummaryList.tsx
import { PackageCheck, RefreshCcw, CheckCircle, XCircle } from "lucide-react";
import { OrderSummaryCard } from "./OrderSummaryCard";

export function OrderCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-6">
      <OrderSummaryCard
        count={100}
        label="Active Order"
        icon={<PackageCheck className="w-6 h-6" />}
        bgColor="bg-green-50"
        textColor="text-green-600 bg-green-100"
        borderColor="border-green-200"
      />
      <OrderSummaryCard
        count={100}
        label="Pending Order"
        icon={<RefreshCcw className="w-6 h-6" />}
        bgColor="bg-cyan-50"
        textColor="text-cyan-700 bg-cyan-100"
        borderColor="border-cyan-200"
      />
      <OrderSummaryCard
        count={100}
        label="Complete Delivery"
        icon={<CheckCircle className="w-6 h-6" />}
        bgColor="bg-yellow-50"
        textColor="text-yellow-600 bg-yellow-100"
        borderColor="border-yellow-200"
      />
      <OrderSummaryCard
        count={100}
        label="Cancel Order"
        icon={<XCircle className="w-6 h-6" />}
        bgColor="bg-red-50"
        textColor="text-red-600 bg-red-100"
        borderColor="border-red-200"
      />
    </div>
  );
}
