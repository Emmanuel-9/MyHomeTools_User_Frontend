import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
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
          {/* <Route path="/" element={<Card />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/details" element={<CheckoutDetails />} /> */}

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
