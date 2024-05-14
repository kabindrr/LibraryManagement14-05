import "./App.css";

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin-signup/SignIn";
import Product from "./pages/product/Product";
import SignUp from "./pages/signin-signup/SIgnUp";
import Dashobard from "./dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        <Route path="/dashboard" element={<Dashobard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
