import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Nov", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
];

export default function Chart() {
  //   const [selectedYear, setSelectedYear] = useState("Year");

  //   const handleYearChange = (value: string) => {
  //     setSelectedYear(value);
  //   };

  return (
    <div className="my-4  shadow-md rounded-lg px-3 pt-1 text-textGray">
      <div className="flex items-center justify-between my-4">
        <h1 className="">Total user statics</h1>
        <div className="flex justify-center items-center gap-7">
          <div className="text-[#B8B8B8] flex justify-center items-center gap-2">
            <p className="h-3 w-3 bg-[#B8B8B8] rounded-full"></p>
            <h1>User</h1>
          </div>
          <div className="text-[#8DB501] flex justify-center items-center gap-2">
            <p className="h-3 w-3 bg-[#8DB501] rounded-full"></p>
            <h1>Venues</h1>
          </div>
          <div></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          width={10}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#B8B8B8" />
          <Bar dataKey="uv" fill="#8DB501" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
