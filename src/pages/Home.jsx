import React from "react";
import { AuthContext } from "./Website/Context/Context";
import { useContext } from 'react';


const Home = () => {
  const { isAuthenticated, login, logout ,tokendata} = useContext(AuthContext);
  console.log(tokendata)
  return (
    <div>
      <h1>{isAuthenticated ? "Welcome back!" : "Please log in."}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Home;
