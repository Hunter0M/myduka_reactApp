import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
 
const ProductTable = () => {
  const url = import.meta.env.VITE_APP_URL; // Accessing the URL
  const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token

  const [productdata, fetchProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "product", {
        headers: {
          Authorization: token,
        },
      });
      fetchProductData(response.data.products);
    } catch (e) {
      console.log("Error fetching products:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "Buying Price",
      selector: (row) => row.buying_price,
      sortable: true,
    },
    {
      name: "Selling Price",
      selector: (row) => row.selling_price,
      sortable: true,
    },
    {
      name: "Stock Quantity",
      selector: (row) => row.stock_quantity,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Link to={`/update/${row.id}`}>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </Link>
      ),
    },
  ];

  // Filtered data based on search term
  const filteredData = productdata.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h4>My Duka Products</h4>
      <div className="border border-gray-300 rounded-md p-4 mr-10 mb-10 shadow-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Product Table</h2>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Product Name"
          className="w-48 pl-2 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
        <DataTable 
          columns={columns}
          data={filteredData}
          pagination
          progressPending={loading}
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default ProductTable;
