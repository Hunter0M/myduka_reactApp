// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const CreateProduct = () => {
//   const url = import.meta.env.VITE_APP_URL; // Accessing the URL
//   const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token

//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: "",
//     buying_price: "",
//     selling_price: "",
//     stock_quantity: "",
//   });

//   const handlChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handlSubmit = async (e) => {
//     e.preventDefault();
//     // const formData = new FormData(e.target)
//     // const product = Object.fromEntries(formData.entries())

//     if (
//       !product.name ||
//       !product.buying_price ||
//       !product.selling_price ||
//       !product.stock_quantity
//     ) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     try {
//       const response = await axios.post(url + "product", product, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       if (response.status === 200) {
//         // alert("Product created successfully!")
//         navigate("/products");
//       } 
//       else if (response.status === 400) {
//         alert("Product already exists!");
//       } 
//       else {
//         alert("Error creating product!");
//       }

//       console.log("response:", response.data);
//       navigate("/products");
//       // setIsOpen(false); // close the modal after submitting
//       // window.location.reload(); // Refresh the page
//     } catch (error) {
//       console.log(error);
//     }

//     // try {
//     //     const response = await axios("http://127.0.0.1:5000/product",{
//     //         method:"POST",
//     //         body:formData
//     //     })

//     //     if(response.status === 200){
//     //         // alert("Product created successfully!")
//     //         navigate("/products")

//     //     }
//     //     else if (response.status === 400){
//     //         alert("Product already exists!")
//     //     }
//     //     else{
//     //         alert("Error creating product!")
//     //         }
//     //     console.log("response:", response.data);

//     //   } catch (error) {
//     //     console.log("Error:", error);
//     //     alert("Unable to connnect to the server!")
//     //   }
//   };

//   return (
//     <div className="mt-10  max-w-md md:max-w-2xl md:mt-20 mx-auto p-4 bg-white border- rounded-md shadow-2xl  md:pb-6">
//       <h2 className="text-lg font-bold mb-4">Update Product</h2>
//       <form onSubmit={handlSubmit}>
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
//             type="text"
//             onChange={handlChange}
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
//             type="number"
//             onChange={handlChange}
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
//             type="number"
//             onChange={handlChange}
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
//             type="number"
//             onChange={handlChange}
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

//     // <div className="container my-4">
//     //   <div className="flex flex-row">
//     //     <div className="md:w-8/12 mx-auto rounded border p-4">
//     //       <h2 className="font-bold text-center mb-5">Create Product</h2>

//     //       <form>
//     //         <div className="row mb-3">
//     //           <label className="col-sm-4 col-form-label">Product Name</label>
//     //           <div className="col-sm-8">
//     //             <input
//     //               className="form-control"
//     //               name="name"
//     //               placeholder="Enter Product
//     //                 Name"
//     //             />
//     //             <span className="text-red-500"></span>
//     //           </div>

//     //           <label className="col-sm-4 col-form-label">Buying Price</label>
//     //           <div className="col-sm-8">
//     //             <input
//     //               className="form-control"
//     //               name="buying_price"
//     //               placeholder="Enter Buying Price"
//     //             />
//     //             <span className="text-red-500"></span>
//     //           </div>

//     //           <label className="col-sm-4 col-form-label">Selling Price</label>
//     //           <div className="col-sm-8">
//     //             <input
//     //               className="form-control"
//     //               name="selling_price"
//     //               placeholder="Enter Selling Price"
//     //             />
//     //             <span className="text-red-500"></span>
//     //           </div>

//     //           <label className="col-sm-4 col-form-label">Stock Quantity</label>
//     //           <div className="col-sm-8">
//     //             <input
//     //               className="form-control"
//     //               name="stock_quantity"
//     //               placeholder="Enter the Quantity"
//     //             />
//     //             <span className="text-red-500"></span>
//     //           </div>

//     //           <div className="row">
//     //             <div className="ml-16 w-1/3 grid">
//     //               <button
//     //                 type="submit"
//     //                 className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm mr-2"
//     //               ></button>
//     //             </div>

//     //             <div className="md:w-1/3 grid">
//     //               <Link
//     //                 to="/products"
//     //                 className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
//     //                 role="button"
//     //               >
//     //                 Cancel
//     //               </Link>
//     //             </div>

//     //           </div>
//     //         </div>
//     //       </form>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default CreateProduct;
