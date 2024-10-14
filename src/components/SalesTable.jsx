import { useState, useEffect } from "react";
import axios from "axios";
const SalesTable = () => {
  const url = import.meta.env.VITE_APP_URL; // Accessing the URL
  const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token
  const [salesdata, setSalesData] = useState([]);
  const getSales = async () => {
    try {
      const response = await axios.get(url + "sales", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      setSalesData(response.data.sales);
    } catch (e) {
      console.log("Error fetching sales:", e);
    }
  };
  useEffect(() => {
    getSales();
  }, []);

  return (
    <div className="mt-4 ml-16">
      <table className="border border-black">
        <thead>
          <tr className="border border-black">
            <td>Sale id</td>
            <td>Pid</td>
            <td>Quantity</td>
            <td>Time sold</td>
          </tr>
        </thead>
        {salesdata.map((sale, index) => (
          <tbody key={sale.id}>
            <tr className="border border-black">
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.created_at}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default SalesTable;
