import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/Navbar/Navbar";
import SingleRoute from "./components/pages/single_route/SingleRoute";
import Auth from "./components/Auth/Auth";
import Admin from "./components/pages/admin/Admin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<SingleRoute />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
