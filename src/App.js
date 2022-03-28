import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import FeaturedProducts from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import CartCheckout from "./components/CartCheckout"
import ProductDetail from "./components/ProductDetail"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        

          <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/"  element={<FeaturedProducts />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartCheckout />} />

          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
