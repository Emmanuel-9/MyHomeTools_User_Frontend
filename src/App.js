<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    // <div>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/products">Products</Link>
    //   </nav>
    //  </div>
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<Home/>} />
        <Route path ="/products" element= {<Products/>} />
        <Route path ="/products/:productId" element= {<ProductDetail/>} />
        
      </Routes>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
>>>>>>> 9cd4960dc5cdb55a739a78ef8aaadab184ea4f30
