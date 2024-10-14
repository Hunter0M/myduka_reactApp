import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";

function BasicBars() {
  const url = "http://127.0.0.1:5000/dashboard";
  const [data, setData] = React.useState({
    sales: [],
    profit: [],
  });

  const fetchdata = async () => {
    try {
      const response = await axios.get(url);
      setData({
        sales: response.data.sales_per_product,
        profit: response.data.profit_per_product,
      });
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  const xAxisData = data.sales.map((item) => item.product_name);
  const salesseries = data.sales.map((item) => item.day_sales);
  const profitseries = data.profit.map((item) => item.profit);


  console.log("Product:",xAxisData);
  console.log("Sales per product:",salesseries);
  console.log("Profit:",profitseries)

  return (
    <BarChart
    xAxis={[{ scaleType: 'band', data: xAxisData }]}
    series={[
      {data:salesseries,label:"sales",}, /**/
      {data:profitseries,label:"profit"},
    ]}
    width={500}
    height={300}
    title="Sales and Profit per Product"
  />
  );
}
export default BasicBars;
