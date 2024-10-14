import React from "react";
import Hello from "./components/Hello";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Dashboard from "./pages/Dashboard";
import TestHeader from "./components/TestHeader";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import ResponsiveAppBar from "/src/components/NavBar.jsx";

function App() {
  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      <TestHeader />

      <Hello />
      <Routes>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/sale" element={<Sales />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
