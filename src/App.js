import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Details from './components/Details'
import Products from "./Products"
import ProductDetail from "./ProductDetail"



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/products/" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/details" element={<Details/>} />
        
          </Routes>
   
    </BrowserRouter>
  );
}



export default App
