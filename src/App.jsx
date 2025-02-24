import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar'
import ProductPage from './components/Products'
import Home from "./components/Home";
import Cart from "./components/Cart";



if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]))
}




function App() {
 


  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
