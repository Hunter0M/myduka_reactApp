import React from "react";
import { Menu, Xmark } from "iconoir-react";
import { Button } from "@material-tailwind/react";
const TestHeader = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",

      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div>
      <header class="bg-white lg:py-8">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          {/* <!-- lg+ --> */}
          <nav
            class="relative flex items-center px-2
          justify-between h-14 bg-gray-800 rounded-xl shadow-2xl lg:h-14 lg:px-8 lg:py-4"
          >
            <div class="flex-shrink-0 ">
              <a href="/" title="" class="flex">
                <img
                  className="hover:text-blue-600 ml-2 w-8 h-5 lg:h-6 "
                  src="https://static.vecteezy.com/system/resources/previews/023/517/430/non_2x/inventory-management-digital-marketing-link-building-and-digital-marketing-banner-photo.jpg"
                  alt=""
                />
                <span className="text-[#2de48c] -mt-1 lg:mt- ml-2 text-xl hover:text-blue-600">
                  Inventory{" "}
                  <span className="text-[#929292] text-sm">Management</span>
                </span>
              </a>
            </div>

            <button
              type="button"
              class="inline-flex p-2 ml-5 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-500 hover:bg-gray-500"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <Xmark className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div
              class={`hidden text-white ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10 ${
                openNav ? "block" : "hidden"
              }`}
            >
              <a
                href="/"
                title=""
                class="bg py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
              >
                Home
              </a>

              <a
                href="/product"
                title=""
                class="py-2 text-base font-mediumtransition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
              >
                Product
              </a>

              <a
                href="/sale"
                title=""
                class="py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
              >
                Sales
              </a>

              <a
                href="/dashboard"
                title=""
                class="py-2 text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
              >
                Dashboard
              </a>
            </div>

            <div
              class={`hidden lg:flex lg:items-center lg:space-x-10 ${
                openNav ? "block" : "hidden"
              }`}
            >
              <Button title="Register" as="a" href="#" variant="outline" className=" w-16 h-6 font-medium text-white transition-all  border-[#28E98C]
              bg-blue-600 text-center hover:text-white   hover:bg-gray-800">
                Sing up
              </Button>

              <a
                href="#"
                title=""
                class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Sign in
              </a>
            </div>
          </nav>

          {/* <!-- xs to lg --> */}
          <nav
            class={`  bg-gray-800 rounded-2xl text-white flex flex-col py-4 space-y-2 lg:hidden ${
              openNav ? "block" : "hidden"
            }`}
          >
            <a
              href="/"
              title=""
              class=" py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </a>

            <a
              href="/product"
              title=""
              class="py-2 text-base font-mediumtransition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Product
            </a>

            <a
              href="/sale"
              title=""
              class="py-2 text-base font-medium  transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Sales
            </a>

            <a
              href="/dashboard"
              title=""
              class="py-2 text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Dashboard
            </a>

            <a
              href="/register"
              title="Register"
              class="text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Sign up
            </a>

            <a
              href="/login"
              title="Login"
              class="text-base font-medium transition-all duration-200 ml-10 hover:text-blue-600 focus:text-blue-600"
            >
              Sign in
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default TestHeader;
