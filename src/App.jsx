import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/NavBar'
import ProductPage from './components/Products'
import Home from "./components/Home";
import Cart from "./components/Cart";
import SignUp from "./components/SignUpLogin/SignUp";
import Login from "./components/SignUpLogin/Login";
import { StrictMode } from "react";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]))
}



function App() {
  return (
    <StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </StrictMode>
  )
}

export default App









