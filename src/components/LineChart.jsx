import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

export default function BasicLineChart() {
  const url = "http://127.0.0.1:5000/dashboard";
  const [data, setData] = React.useState({
    day_sales:[],
    day_profit:[]
  });
  const fetchDayData = async ()=>{
    const response = await axios.get(url);
    setData({
      day_sales: response.data.sales_per_day,
      day_profit: response.data.profit_per_day
    })
  }

  React.useEffect(()=>{
    fetchDayData();
  },[])
  

  const xAxisData = data.day_sales.map(item => item.date).sort();
  const salesseries = data.day_sales.map(item=>item.total_sales)
  const profitseries = data.day_profit.map(item=>item.profit)

  console.log("days in sales/profit",xAxisData )
  console.log("sales in sales/profit",salesseries )
  console.log("profit in sales/profit",profitseries )

  return (
    <LineChart
      xAxis={[{ data: [1,2,] }]}
      series={[
        {data:salesseries,label:"sales"},
        {data:profitseries,label:"profit"},
      ]}
      width={500}
      height={300}
    />
  );
}
