import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/Context";

function Login() {
  const { isAuthenticated,login,logout } = useContext(AuthContext);
  const url = import.meta.env.VITE_APP_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function Submit(e) {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } 
    else {
      try {
        const response = await axios.post(url + "login", {
          user_email: email,
          user_password: password,
        });
        const token = response.data.access_token;
        login(token);
        // localStorage.setItem("access_token", token);
      } catch (err) {
        setEmailError(err.response.data.error);
      }
    }
  }

  return (
    <div className="mt-[7%] flex items-center justify-center">
      <form
        className="flex justify-center flex-col space-y-2 shadow-gray-500 rounded-2xl shadow-2xl p-16"
        onSubmit={Submit}
      >
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
          {emailError && (
            <p className="text-red-600 text-sm mt-2">{emailError}</p>
          )}
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
          {passwordError && (
            <p className="text-red-600 text-sm mt-2">{passwordError}</p>
          )}
        </div>

        <div className="text-black">
          <button
            className="ml-[20%] mt-2 px-12 bg-sky-300  rounded-lg border-2 hover:bg-white hover:border-sky-400"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;