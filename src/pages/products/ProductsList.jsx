// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { Link } from "react-router-dom";

// const ProductsList = () => {
//   const url = import.meta.env.VITE_APP_URL; // Accessing the URL
//   const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token

//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(url + "product");
//       setProducts(response.data.products); // Assuming the data is directly in response.data
//     } catch (error) {
//       alert("Unable to get the data");
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []); // this function will excute only one time when we render the compontnt for the first time

//   //   const [searchTerm, setSearchTerm] = useState("");
//   //   const [loading, setLoading] = useState(false);

//   // const getProducts = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await axios.get(url + "product", {
//   //       headers: {
//   //         Authorization: token,
//   //       },
//   //     });
//   //     fetchProductData(response.data.products);
//   //   } catch (e) {
//   //     console.log("Error fetching products:", e);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   //   const columns = [
//   //     { name: "ID", selector: (row) => row.id, sortable: true },
//   //     { name: "Product Name", selector: (row) => row.name, sortable: true },
//   //     {
//   //       name: "Buying Price",
//   //       selector: (row) => row.buying_price,
//   //       sortable: true,
//   //     },
//   //     {
//   //       name: "Selling Price",
//   //       selector: (row) => row.selling_price,
//   //       sortable: true,
//   //     },
//   //     {
//   //       name: "Stock Quantity",
//   //       selector: (row) => row.stock_quantity,
//   //       sortable: true,
//   //     },
//   //     {
//   //       name: "Actions",
//   //       cell: (row) => (
//   //         <Link to={`/update/${row.id}`}>
//   //           <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
//   //             Update
//   //           </button>
//   //         </Link>
//   //       ),
//   //     },
//   //   ];

//   //    // Filtered data based on search term
//   //    const filteredData = products.filter((product) =>
//   //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   //   const handleSearch = (e) => {
//   //     setSearchTerm(e.target.value);
//   //   };

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Products List</h2>

//       <div className="row mb-3">
//         <div className="col">
//           <Link
//             to="/products/create"
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded me-1"
//             role="button"
//           >
//             Create Products
//           </Link>
//           {/* this button allowed us to refresh the list of products  */}
//           <button
//             type="button"
//             className="border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded"
//             onClick={getProducts}
//           >
//             Refresh
//           </button>
//         </div>
//         <div className="col"></div>
//       </div>

//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Product Name</th>
//             <th scope="col">Buying Price</th>
//             <th scope="col">Selling Price</th>
//             <th scope="col">Stock Quantity</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => {
//             return (
//               <tr key={index}>
//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>{product.buying_price}</td>
//                 <td>{product.selling_price}</td>
//                 <td>{product.stock_quantity}</td>
//                 <td className="w-2.5 whitespace-nowrap">
//                   <Link
//                     to={"/products/edit/" + product.id}
//                     className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm mr-2 "
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     type="button"
//                     className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm mr-2 "
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* <div className="border border-gray-300 rounded-md p-4 mr-10 mb-10 shadow-md">
//         <div className="flex justify-between mb-4">
//           <h2 className="text-lg font-bold">Sales Data</h2>
//           <input
//             type="search"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by Product Name"
//             className="w-48 pl-2 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <DataTable
//           columns={columns}
//           data={filteredData}
//           pagination
//           progressPending={loading}
//           highlightOnHover
//           striped
//         />
//       </div> */}
//     </div>
//   );
// };

// export default ProductsList;
