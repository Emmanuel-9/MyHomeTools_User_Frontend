// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Register from "./components/Register"



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/register" element={<Register/>} />
        
          </Routes>
   
    </BrowserRouter>
  );
}



export default App
