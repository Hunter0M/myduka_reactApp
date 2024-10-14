import { useState } from "react";
import axios from "axios";
export default function RegisterForm() {
  const url = "http://127.0.0.1:5000/user";
  const [register, setRegister] = useState({
    username: "",
    user_email: "",
    user_password: "",
    confirm_password: "",
  });
  

  // const [accept, setAccept] =
  //   useState(
  //     false
  //   ); /* We use this useState to show to the user a massage when he enter password < 8 Char  */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const postRegister = async (e) => {
    e.preventDefault();
    setAccept(
      true
    ); /* this fowlled the useState in line 12 & this command work when the user cilck onSubmit button */
    try {
      const response = await axios.post(url, register);
      console.log("Response:", response.data);
    } catch (error) {
      console.log(" Error registering user:", error);
    }
  };

  return (
    <div className="mt-[10%] flex items-center justify-center">
      <form
        className="flex justify-center flex-col space-y-2 shadow-2xl shadow-gray-500 rounded-2xl  p-16"
        onSubmit={postRegister}
      >
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            name="username"
            placeholder="Name"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block">
            Email:
          </label>
          <input
            type="email "
            name="email"
            placeholder="Email"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="user_password" className="block">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
          />
          {/* {register.user_password.length < 8 && accept && (
            <p>Passsword must be more than 8 Char</p>
          )} */}
        </div>
        <div>
          <label htmlFor="confirm_user_password" className="block">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
          />
          {/* {register.confirm_password !== register.user_password && accept && <p>Password does not match</p>} */}
        </div>

        <div className="text-black">
          <button
            className="ml-[20%] mt-2 px-8 bg-sky-300  rounded-lg border-2 hover:bg-white hover:border-sky-400"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
