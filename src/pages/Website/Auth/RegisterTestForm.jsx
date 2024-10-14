import axios from "axios";
import { useState } from "react";

function RegisterTestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setPasswordR] = useState("");
  // const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function Submit(e) {
    let send = true;
    e.preventDefault();
    // setAccept(true);
    if (name === "" || password.length < 8 || Cpassword !== password) {
      send = false;
    } else send = true;
    try {
      if (send) {
        const response = await axios.post("http://127.0.0.1:5000/user", {
          username: name,
          user_email: email,
          user_password: password,
          confirm_password: Cpassword,
        });
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }

  return (
    <div className="mt-[%] flex items-center justify-center">
      <form
        className="flex justify-center flex-col space-y-2 shadow-2xl shadow-gray-500 rounded-2xl  p-16"
        onSubmit={Submit}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* {name === "" && accept && (
            <p className="text-red-600 text-sm mt-2">Username is Required</p>
          )} */}
        </div>

        <div>
          <label htmlFor="user_email" className="block">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {emailError === 400 && (
            <p className="text-red-600 text-sm mt-2">
              Email Is already been taken
            </p>
          )} */}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {password.length < 8 && accept && (
            <p className="text-red-600 text-sm mt-2">
              Passsword must be more than 8 Char
            </p>
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
            value={Cpassword}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {/* {Cpassword !== password && accept && (
            <p className="text-red-600 text-sm mt-2">Password does not match</p>
          )} */}
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

export default RegisterTestForm;
