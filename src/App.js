import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from "./components/Register"
import Login from "./components/Login"
import CartCheckout from "./components/CartCheckout"
import Products from "./Products"
import ProductDetail from "./ProductDetail"
import Home from "./Home"
import Navbar from "./Navbar"

import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartCheckout />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
