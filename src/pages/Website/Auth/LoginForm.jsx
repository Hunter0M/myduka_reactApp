
import axios from "axios";
import { useContext, useState } from "react";
// import { NewUsers } from "../Context/Context";


function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  // const userNow = useContext(NewUsers)
  // console.log(userNow)

  async function Submit(e) {
    let send = true;
    e.preventDefault();
    setAccept(true);
    if ( password.length < 8 ) {
      send = false;
    } else send = true;
    try {
      if (send) {
        const response = await axios.post("http://127.0.0.1:5000/user", {
          user_email: email,
          user_password: password,
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

        

        <div className="text-black">
          <button
            className="ml-[20%] mt-2 px-8 bg-sky-300  rounded-lg border-2 hover:bg-white hover:border-sky-400"
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























// import axios from "axios";

// const LoginForm = () => {
//   const url = "http://127.0.0.1:5000/login";
//   const postLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(url);
//       const token = response.data.access_token;
//       localStorage.setItem("access_token", token);
//     } catch (e) {
//       console.log("Error logging in:", e);
//     }
//   };
//   return (
//     <div className="mt-[7%] flex items-center justify-center">
//       <form
//         className="flex justify-center flex-col space-y-2  shadow-gray-500 rounded-2xl shadow-2xl p-16"
//         onSubmit={postLogin}
//       >
//         <div>
//           <label htmlFor="username" className="block">
//             UserName:
//           </label>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//           />
//         </div>
//         <div>
//             <label htmlFor="password" className="block">
//                 Password:
//             </label>
//             <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//           />
//         </div>
//         <div className="text-black">
//           <button className="ml-[20%] mt-2 px-12 bg-sky-300  rounded-lg border-2 hover:bg-white hover:border-sky-400" type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default LoginForm;
