import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedProducts from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
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
      <Navbar />
    

      <Routes>
        <Route path ="/" element= {<FeaturedProducts/>} />
        <Route path ="/products" element= {<Products/>} />
        <Route path ="/products/:productId" element= {<ProductDetail/>} />
        
      </Routes>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
