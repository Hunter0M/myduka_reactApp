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
// import Update from "./components/UpdateProduct";
import { Context } from "./pages/Website/Context/Context";
// import ProductsList from "./pages/products/ProductsList";
// import CreateProduct from "./pages/products/CreateProduct";
// import EditProduct from "./pages/products/EditProduct";
import ProductTable from "./components/ProductTable";
// import Update from './Update'; // Adjust the import path as necessary

function App() {
  return (
    <div>
      <TestHeader />
      <Context>
        <Hello />

        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" component={About} /> */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/products" element={<ProductTable />} />
          <Route exact path="/sale" element={<Sales />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/product" element={<Products />} /> */}
          {/* <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/products/create" element={<CreateProduct/>} />
          <Route exact path="/products/edit/:id" element={<EditProduct/>} /> */}
          
          {/* <Route exact path="/update/:id" element={<Update />} /> */}

          {/* <Route path="/update/:id" element={<Update />} /> */}
        </Routes>
      </Context>
    </div>
  );
}

export default App;
