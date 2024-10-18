import { useEffect, useState } from "react";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SalesForm = () => {
  const url = import.meta.env.VITE_APP_URL; // Accessing the URL
  const token = import.meta.env.VITE_APP_TOKEN; // Accessing the token
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState({
    pid: "",
    quantity: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(url + "product", {
        headers: {
          Authorization: token,
        },
      });
      // console.log(response.data.products)
      setProducts(response.data.products);
    } catch (e) {
      console.log("Error fetching products:", e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSales({
      ...sales,
      [name]: value,
    });
  };

  const postSale = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url + "sales", sales);
      console.log("response:", response.data);
      setIsOpen(false); // close the modal after submitting
      window.location.reload(); // Refresh the page
    } catch (e) {
      console.log("Error posting sales:", e);
    }
  };

  return (
    <div>
      <button
        className="bg-[#2DE48C] hover:bg-blue-500 text-gray-700 font-bold py-2 px-10 mx-5 my-6 rounded"
        onClick={() => setIsOpen(true)}
      >
        Make Sale
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center z-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded shadow-md p-4 w-[75%] sm:w-[55%] md:w-[50%] lg:w-[40%]  mx-auto  mt-32 mb-36"
            onClick={(e) => e.stopPropagation()}
          >
            <form className="space-y-4" onSubmit={postSale}>
              <div variant="h4" color="blue-gray">
                <div className="text-2xl">Make Sale</div>

                <XMarkIcon
                  className=" -mt-6 ml-[92%] h-6 w-6  cursor-pointer rounded-md hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-[80%]  sm:ml-[10%] md:w-[80%] md:mx-10 w-[70%] my-7 mx-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="pid"
                  onChange={handleChange}
                >
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {/* <input
                  type="number"
                  placeholder="Enter product quantity"
                  className="border border-black"
                  name="quantity"
                  onChange={handleChange}
                /> */}

                <input
                  color="gray"
                  size="lg"
                  name="quantity"
                  className=" border border-gray-900 pl-4 sm:w-[65%] sm:ml-[17%] md:w-[70%] md:mx-[14%] lg:w-[50%] lg:mx-[25%] rounded-lg w-[95%] h-11 placeholder:pl-6 "
                  type="number"
                  placeholder="Enter product quantity"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 w-[50%] mx-20 my-3 sm:ml-[25%] lg:w-[40%] lg:mx-[30%] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl"
                >
                  Make Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesForm;
