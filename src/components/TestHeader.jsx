import React from "react";
import { Menu, Xmark } from "iconoir-react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const TestHeader = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",

      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="bg-white lg:py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        {/* <!-- lg+ --> */}
        <nav
          className="relative flex items-center px-2
          justify-between h-14 bg-gray-800 rounded-xl shadow-2xl lg:h-14 lg:px-8 lg:py-4"
        >
          <div className="flex-shrink-0 ">
            <Link to="/" title="" className="flex">
              <img
                className="hover:text-blue-600 ml-2 w-8 h-5 lg:h-6 "
                src="https://static.vecteezy.com/system/resources/previews/023/517/430/non_2x/inventory-management-digital-marketing-link-building-and-digital-marketing-banner-photo.jpg"
                alt=""
              />
              <span className="text-[#2de48c] -mt-1 lg:mt- ml-2 text-xl hover:text-blue-600">
                Inventory{" "}
                <span className="text-[#929292] text-sm">Management</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 ml-5 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-500 hover:bg-gray-500"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <Xmark className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div
            className={`hidden text-white ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10 ${
              openNav ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              title=""
              className="bg py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/product"
              title=""
              className="py-2 text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Product
            </Link>

            <Link
              to="/sale"
              title=""
              className="py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Sales
            </Link>

            <Link
              to="/dashboard"
              title=""
              className="py-2 text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Dashboard
            </Link>
          </div>

          <div
            className={`hidden lg:flex lg:items-center lg:space-x-10 ${
              openNav ? "block" : "hidden"
            }`}
          >
            {/* <Button
              title="Register"
              as="a"
              href="#"
              variant="outline"
              className=" w-16 h-6 font-medium text-white transition-all  border-[#28E98C]
              bg-blue-600 text-center hover:text-white   hover:bg-gray-800"
            >
              Sing up
            </Button> */}

            <Link
              to="/register"
              title=""
              className="py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Sing up
            </Link>

            <Link
              to="/login"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Sign in
            </Link>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav
          className={`  bg-gray-800 rounded-2xl text-white flex flex-col py-4 space-y-2 lg:hidden ${
            openNav ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            title=""
            className="py-2 text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/product"
            title=""
            className="py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Product
          </Link>

          <Link
            to="/sale"
            title=""
            className="py-2 text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sales
          </Link>

          <Link
            to="/dashboard"
            title=""
            className="py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Dashboard
          </Link>

          {/* <Button
              title="Register"
              as="a"
              href="#"
              variant="outline"
              className=" w-16 h-6 font-medium text-white transition-all  border-[#28E98C]
              bg-blue-600 text-center hover:text-white   hover:bg-gray-800"
            >
              Sing up
            </Button> */}

          <Link
            to="/register"
            title=""
            className="py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sing up
          </Link>

          <Link
            to="/login"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default TestHeader;
