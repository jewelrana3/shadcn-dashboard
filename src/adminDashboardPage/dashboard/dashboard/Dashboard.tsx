import Chart from "./Chart";
import { OrderCard } from "./OrderCard";
import SellerChart from "./SellerChart";

export default function Dashboard() {
  return (
    <div className="">
      <div className="">
        <OrderCard />
      </div>
      <div className="col-span-8">
        <Chart />
      </div>
      <div className="">
        <SellerChart />
      </div>
    </div>
  );
}
