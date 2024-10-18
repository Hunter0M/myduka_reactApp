import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const { productId } = useParams(); // Get the productId from the URL
  const [name, setName] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the product details to pre-fill the form if needed
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/${productId}`
        );
        console.log("Fetched product:", response.data); // Log the fetched product
        const product = response.data;
        setName(product.name);
        setBuyingPrice(product.buying_price);
        setSellingPrice(product.selling_price);
        setStockQuantity(product.stock_quantity);
        console.log(product)
      } catch (err) {
        setError("Failed to load product details");
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = {
        name,
        buyingPrice,
        sellingPrice,
        stockQuantity,
      };

      const response = await axios.put(
        `http://localhost:5000/product/${productId}`,
        updatedProduct
      );

      console.log("Product updated:", response.data);
      setError(null);
    } catch (error) {
      setError("Failed to update product: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buyingPrice"
          >
            Buying Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="buyingPrice"
            type="number"
            value={buyingPrice}
            onChange={(event) => setBuyingPrice(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sellingPrice"
          >
            Selling Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sellingPrice"
            type="number"
            value={sellingPrice}
            onChange={(event) => setSellingPrice(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stockQuantity"
          >
            Stock Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stockQuantity"
            type="number"
            value={stockQuantity}
            onChange={(event) => setStockQuantity(event.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Product
        </button>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </form>
    </div>
  );
}

export default Update;
