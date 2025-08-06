import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 4000 },
  { name: "Sep", uv: 3100 },
  { name: "Oct", uv: 4200 },
  { name: "Nov", uv: 3800 },
  { name: "Dec", uv: 3500 },
];

export default function SellerChart() {
  return (
    <div className=" text-textGray p-2 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="">Total seller</h1>
        <select defaultValue="Year" className="w-28 h-[30px]">
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#8DB501"
            fill="#414141"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
