// components/OrderSummaryCard.tsx
type OrderSummaryCardProps = {
  count: number;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

export function OrderSummaryCard({
  count,
  label,
  icon,
  bgColor,
  textColor,
  borderColor,
}: OrderSummaryCardProps) {
  return (
    <div
      className={`flex items-center gap-4 p-4 h-24 rounded-lg border ${bgColor} ${borderColor}`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${textColor}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{count}</p>
        <p className="text-xl text-gray-600">{label}</p>
      </div>
    </div>
  );
}
