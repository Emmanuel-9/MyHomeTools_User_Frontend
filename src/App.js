import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
        
          </Routes>
   
    </BrowserRouter>
  );
}



export default App
