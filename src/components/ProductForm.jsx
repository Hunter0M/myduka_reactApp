import { useState } from "react";
import axios from "axios";

import { Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function ProductForm() {
  const url = "http://127.0.0.1:5000/product";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNb2hhIiwiZXhwIjoxNzI4MzI5OTEzfQ.jzrI9nPQE5EvPILeUWDvyMKhcofuQUEjmB5oUdLt4Bc";
  const [product, setProduct] = useState({
    name: "",
    buying_price: "",
    selling_price: "",
    stock_quantity: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handlChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const postProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, product, {
        headers: {
          Authorization: token,
        },
      });
      console.log("response:", response.data);
      setIsOpen(false); // close the modal after submitting
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Add Product
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded shadow-md p-4 w-[75%] sm:w-[55%] md:w-[50%] lg:w-[40%]  mx-auto  mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <form className="space-y-4" onSubmit={postProduct}>
              <Typography  variant="h4" color="blue-gray">
                <p className="text-2xl ">Manage Item</p>
                <XMarkIcon
                  className=" -mt-6 ml-[92%] h-6 w-6  cursor-pointer rounded-md hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                />
              </Typography>

              {/* <div>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="border border-black"
                  name="name"
                  onChange={handlChange}
                />
              </div> */}

              <div className="ml-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Name
                </Typography>
                <input
                  color="gray"
                  size="lg"
                  name="name"
                  className=" border border-gray-900 rounded-lg w-[95%] h-11 placeholder:pl-6 "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  type="text"
                  placeholder="eg. White Shoes"
                  onChange={handlChange}

                />
              </div>

              {/* <div>
                <input
                  type="number"
                  placeholder="Buying Price"
                  className="border border-black"
                  name="buying_price"
                  onChange={handlChange}
                />
              </div> */}

              <div className="ml-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Buying Price
                </Typography>
                <input
                  color="gray"
                  size="lg"
                  name="name"
                  className="ml- border border-gray-900 rounded-lg w-[95%] h-11 placeholder:pl-6 "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  type="number"
                  placeholder="Enter buying price"
                  onChange={handlChange}

                />
              </div>

              {/* <div>
                <input
                  type="number"
                  className="border border-black"
                  placeholder="Selling Price"
                  name="selling_price"
                  onChange={handlChange}
                />
              </div> */}

              <div className="ml-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Selling Price
                </Typography>
                <input
                  color="gray"
                  size="lg"
                  name="name"
                  className="ml- border border-gray-900 rounded-lg w-[95%] h-11 placeholder:pl-6 "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  type="number"
                  placeholder="Enter selling price"
                  onChange={handlChange}

                />
              </div>

              {/* <div>
                <input
                  type="number"
                  className="border border-black"
                  placeholder="Stock Quantity"
                  name="stock_quantity"
                  onChange={handlChange}
                />
              </div> */}

              <div className="ml-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Stock Quantity
                </Typography>
                <input
                  color="gray"
                  size="lg"
                  name="name"
                  className="ml- border border-gray-900 rounded-lg w-[95%] h-11 placeholder:pl-6 "
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  type="number"
                  placeholder="Enter stock quantity"
                  onChange={handlChange}

                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
