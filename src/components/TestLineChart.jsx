import * as React from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = () => {
  const url = "http://127.0.0.1:5000/dashboard";
  const [data, setData] = React.useState([]);
  const fetchDayData = async () => {
    const response = await axios.get(url);
    const daySales = response.data.sales_per_day;
    const dayProfit = response.data.profit_per_day;

    const mergedData = daySales.map((sale, index) => ({
      date: sale.date,
      total_sales: sale.total_sales,
      profit: dayProfit[index].profit,
    }));

    setData(mergedData);
  };

  React.useEffect(() => {
    fetchDayData();
  }, []);


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="pt-[1%] bg-gray-100 flex flex-col gap-4 rounded-md">
          <p className=" text-xs">{label}</p>
          <p className="text-xs text-blue-400">
            Sales:
            <span className="ml-2">KES {payload[0].value}</span>
          </p>
          <p className="text-xs text-indigo-400">
            Profit:
            <span className="ml-2">KES {payload[1].value}</span>
          </p>
        </div>
      );
    }
  };


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="total_sales" stroke="#3b82f6" />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
