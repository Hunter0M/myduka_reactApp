import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const SalesTable = () => {
  const url = import.meta.env.VITE_APP_URL; // Accessing the URL
  const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token
  const [salesdata, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getSales = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  const columns = [
    {
      name: "Sale ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product ID",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Time Sold",
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = salesdata.filter((sale) => {
    return sale.product?.toString().includes(searchTerm);
  });

  return (
    <div className="border border-gray-300 rounded-md p-4 mx-5 mt-5 shadow-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Sales Data</h2>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Product ID"
          className="w-48 pl-2 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <DataTable
        // title="Sales Data"
        columns={columns}
        data={filteredData}
        pagination
        progressPending={loading}
        highlightOnHover
        striped
      />
    </div>
  );
};

export default SalesTable;
