// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const Product = (props) => {
//   const url = import.meta.env.VITE_APP_URL; // Accessing the URL
//   const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token

//   const [product, setProduct] = useState({
//     name: "",
//     buying_price: "",
//     selling_price: "",
//     stock_quantity: "",
//   });

//   const [data, setData] = useState([]);
//     const getAPIdata = async () => {
//       try {
//           const response = await axios.get(url + "product");
//           setData(response.data.products); // Assuming the data is directly in response.data
//         } catch (error) {
//           alert("Unable to get the data");
//         }
//       // const url = "http://10.0.2.2:3000/users";
//       // let result = await fetch(url);
//       // result = await result.json();
//       // setData(result);

//     };

//     useEffect(() => {
//       getAPIdata();
//     }, []);




//   const [name, setName] = useState(undefined)
//   const [buyingPrice, setBuyingPrice] = useState(undefined)
//   const [sellingPrice, setSellingPrice] = useState(undefined)
//   const [stockQuantity, setStockQuantity] = useState(undefined)
//   const [selectedProduct,setSelectedProduct]=useState(undefined)

//   useEffect(() => {
//     if (selectedProduct) {
//       setName(selectedProduct.name);
//       setBuyingPrice(selectedProduct.buyingPrice);
//       setSellingPrice(selectedProduct.sellingPrice);
//       setStockQuantity(selectedProduct.stockQuantity);
//     }
//   }, [selectedProduct]);
    

//   return (
//     <div className="mt-10  max-w-md md:max-w-2xl md:mt-20 mx-auto p-4 bg-white border- rounded-md shadow-2xl  md:pb-6">
//       <h2 className="text-lg font-bold mb-4">Edit Product</h2>

//       {/* <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="name"
//         >
//           ID
//         </label>
//         <input
//           readOnly
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="text"
//           //   defaultValue={params.id}
//           // onChange={handlChange}
//         />
//       </div> */}

//       {/* {initialData && ( */}
//       <form  >
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="name"
//           >
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             name="name"
//             //   defaultValue={initialData.name}
//             value={product.name}
//             type="text"
//             onChange={(text) => setProduct(text)}
//           />
//           <span className="text-red-500"></span>
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="buyingPrice"
//           >
//             Buying Price
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             name="buying_price"
//             //   defaultValue={initialData.buying_price}
//             value={product.buying_price}
//             type="number"
//             onChange={(text) => setProduct(text)}
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="sellingPrice"
//           >
//             Selling Price
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             name="selling_price"
//             //   defaultValue={initialData.selling_price}
//             value={product.selling_price}
//             type="number"
//             onChange={(text) => setProduct(text)}
//           />
//           <span className="text-red-500"></span>
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="stockQuantity"
//           >
//             Stock Quantity
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             name="stock_quantity"
//             //   defaultValue={initialData.stock_quantity}
//             value={product.stock_quantity}
//             type="number"
//             onChange={(text) => setProduct(text)}
//           />
//           <span className="text-red-500"></span>
//         </div>

//         <div className="flex">
//           <div className="">
//             <button
//               type="submit"
//               className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-[1%] px-4 md:px-6 rounded ml-3 md:ml-7 "
//             >
//               Submit
//             </button>
//             <Link
//               to="/products"
//               className="bg-gray-500 text-white font-bold py-2 px-4 md:px-6 md:ml-96 rounded hover:bg-gray-600 ml-56 "
//               role="button"
//             >
//               Cancel
//             </Link>
//           </div>

//           <div></div>
//         </div>
//       </form>
      
//     </div>
//   );
// };
// export default Product;

// // const EditProduct = () => {
// //   const url = import.meta.env.VITE_APP_URL; // Accessing the URL
// //   const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token

// //   const [initialData, setInitialData] = useState(); //used to store the product details
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState({
// //     name: "",
// //     buying_price: "",
// //     selling_price: "",
// //     stock_quantity: "",
// //   });

// //   // Function that allowed us to send a requset to the server and to read the details
// //   const readProduct = async () => {
// //     try {
// //       const response = await axios.get(`${url}/products/${params.id}`);
// //       console.log("API Response:", response.data); // Log the API response
// //       setInitialData(response.data);
// //       // setProduct(response.data);
// //     } catch (error) {
// //       alert("Unable to read the product details");
// //       console.log(error);
// //     }
// //   };
// //   // Function that allowed us to send a requset to the server and to update the details

// //   useEffect(() => {
// //     readProduct();
// //   }, []);

// //   const handlChange = (e) => {
// //     const { name, value } = e.target;
// //     setProduct({ ...product, [name]: value });
// //   };

// //   const handlSubmit = async (e) => {
// //     e.preventDefault();
// //     // const formData = new FormData(e.target)
// //     // const product = Object.fromEntries(formData.entries())

// //     if (
// //       !product.name ||
// //       !product.buying_price ||
// //       !product.selling_price ||
// //       !product.stock_quantity
// //     ) {
// //       alert("Please fill all the fields!");
// //       return;
// //     }

// //     try {
// //       const response = await axios.put(url + "product", product, {
// //         headers: {
// //           Authorization: token,
// //         },
// //       });

// //       console.log("response:", response.data);
// //       navigate("/products");
// //       // setIsOpen(false); // close the modal after submitting
// //       // window.location.reload(); // Refresh the page
// //     } catch (error) {
// //       console.log(error);
// //     }

// //     // try {
// //     //     const response = await axios("http://127.0.0.1:5000/product",{
// //     //         method:"POST",
// //     //         body:formData
// //     //     })

// //     //     if(response.status === 200){
// //     //         // alert("Product created successfully!")
// //     //         navigate("/products")

// //     //     }
// //     //     else if (response.status === 400){
// //     //         alert("Product already exists!")
// //     //     }
// //     //     else{
// //     //         alert("Error creating product!")
// //     //         }
// //     //     console.log("response:", response.data);

// //     //   } catch (error) {
// //     //     console.log("Error:", error);
// //     //     alert("Unable to connnect to the server!")
// //     //   }
// //   };

// //   return (
// //     <div className="mt-10  max-w-md md:max-w-2xl md:mt-20 mx-auto p-4 bg-white border- rounded-md shadow-2xl  md:pb-6">
// //       <h2 className="text-lg font-bold mb-4">Edit Product</h2>

// //       <div className="mb-4">
// //         <label
// //           className="block text-gray-700 text-sm font-bold mb-2"
// //           htmlFor="name"
// //         >
// //           ID
// //         </label>
// //         <input
// //           readOnly
// //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           type="text"
// //           defaultValue={params.id}
// //           // onChange={handlChange}
// //         />
// //       </div>

// //       {initialData && (
// //         <form onSubmit={handlSubmit}>
// //           <div className="mb-4">
// //             <label
// //               className="block text-gray-700 text-sm font-bold mb-2"
// //               htmlFor="name"
// //             >
// //               Name
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="name"
// //               defaultValue={initialData.name}
// //               type="text"
// //               onChange={handlChange}
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <div className="mb-4">
// //             <label
// //               className="block text-gray-700 text-sm font-bold mb-2"
// //               htmlFor="buyingPrice"
// //             >
// //               Buying Price
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="buying_price"
// //               defaultValue={initialData.buying_price}
// //               type="number"
// //               onChange={handlChange}
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label
// //               className="block text-gray-700 text-sm font-bold mb-2"
// //               htmlFor="sellingPrice"
// //             >
// //               Selling Price
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="selling_price"
// //               defaultValue={initialData.selling_price}
// //               type="number"
// //               onChange={handlChange}
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <div className="mb-4">
// //             <label
// //               className="block text-gray-700 text-sm font-bold mb-2"
// //               htmlFor="stockQuantity"
// //             >
// //               Stock Quantity
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="stock_quantity"
// //               defaultValue={initialData.stock_quantity}
// //               type="number"
// //               onChange={handlChange}
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <div className="flex">
// //             <div className="">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-[1%] px-4 md:px-6 rounded ml-3 md:ml-7 "
// //               >
// //                 Submit
// //               </button>
// //               <Link
// //                 to="/products"
// //                 className="bg-gray-500 text-white font-bold py-2 px-4 md:px-6 md:ml-96 rounded hover:bg-gray-600 ml-56 "
// //                 role="button"
// //               >
// //                 Cancel
// //               </Link>
// //             </div>

// //             <div></div>
// //           </div>
// //         </form>
// //       )}
// //     </div>

// // <div className="container my-4">
// //   <div className="flex flex-row">
// //     <div className="md:w-8/12 mx-auto rounded border p-4">
// //       <h2 className="font-bold text-center mb-5">Create Product</h2>

// //       <label className="block text-gray-700 text-sm font-bold mb-2">
// //         ID
// //       </label>
// //       <div className="col-sm-8">
// //         <input
// //           readOnly
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 type="text"
// //                 defaultValue={params.id}
// //                 // onChange={handlChange}
// //         />
// //         <span className="text-red-500"></span>
// //       </div>
// //       <form>
// //         <div className="row mb-3">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Product Name
// //           </label>
// //           <div className="col-sm-8">
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="name"
// //               placeholder="Enter Product Name"
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Buying Price
// //           </label>
// //           <div className="col-sm-8">
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="buying_price"
// //               placeholder="Enter Buying Price"
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <label className="col-sm-4 col-form-label">Selling Price</label>
// //           <div className="col-sm-8">
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="selling_price"
// //               placeholder="Enter Selling Price"
// //             />
// //             <span className="text-red-500"></span>
// //           </div>

// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Stock Quantity
// //           </label>
// //           <div className="col-sm-8">
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               name="stock_quantity"
// //               placeholder="Enter the Quantity"
// //             />
// //             <span className="text-red-500"></span>
// //           </div>
// //           <div className="flex">
// //             <div >
// //               <div className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-[1%] px-4 md:px-6 rounded ml-3 md:ml-7 ">
// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm mr-2"
// //                 >Submit</button>
// //               </div>

// //               <div >
// //                 <Link
// //                   to="/products"
// //                   className="bg-gray-500 text-white font-bold py-2 px-4 md:px-6 md:ml-96 rounded hover:bg-gray-600 ml-56 "
// //                   role="button"
// //                 >
// //                   Cancel
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   </div>
// // </div>
// //   );
// // };

// // export default EditProduct;
