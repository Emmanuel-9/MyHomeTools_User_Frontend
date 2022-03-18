import React, { useState, useEffect } from "react"
import styled from "styled-components";
import Airfryer from "./Images/airfryer.png";
import Breakline from "./Images/breakline.png";
import axios from "axios";


  const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  //UseEffect to call our function
  useEffect(() =>{
    fetchProducts();
  }, []);

  //create function 
  const fetchProducts = () =>{
    axios
    .get('http://localhost:5004/product/all')
    .then((res) =>{
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) =>{
      console.log(err);
    });
  };


  return (
    <Body>
    <Banner>
    <div className="Home">
      <h1 className="text1">myHomeTools</h1>

      <h1 className="text2">HIGH QUALITY PRODUCTS</h1>
     </div>

      <div className="main-image">
            <img src={Airfryer} alt="airfryer" />
           </div>

     <Buttons>
       <button className="btn1">Shop Now</button>
     </Buttons>
   </Banner>

   <Container>
     <h1 className="heading">FEATURED PRODUCTS</h1>

     <div className="break">
       <img src= {Breakline} alt="break" />
     </div>
     
     <div className="item-container">
     {products.map((product) =>( 
       
        <div key={product._id} className="card"> 
         <img className="product-image" src = {product.image} alt='' />
         <h3>{product.product_name}</h3>
         <p>{product.price}</p>
         <button className="btn2">View Product</button>
         </div>
         ))}
         
     </div>

   </Container>
   </Body>

  );
};

export default FeaturedProducts;

const Body = styled.div``

const Banner = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;


.text1{
left: 360px;
top: 180px;
/* border: 1px solid red; */
position: absolute;
font-weight: 100;
/* font-family: cursive; */
}
.text2{
  /* border: 1px solid blue; */
  width: 800px;
  position: absolute;
  top: 300px;
  left: 60px;
  font-size: 60px;
}

.main-image{
  position: absolute;
  width: 500px;
  /* border: 1px solid green; */
  right: 100px;
  top: 160px;

  img{
    width: 100%;
  }
}
`


const Buttons = styled.div`
position: relative;
top: 350px;
left: 330px;
width: 200px;
text-align: center;
border: 1px solid black;


button{
  padding: 5px;
  border:0.16em solid #FFFFFF;
  background-color: transparent;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-transform:uppercase;
font-family:'Roboto',sans-serif;
font-weight:400;
/* color:#FFFFFF; */
text-align:center;
transition: all 0.15s;
}

:hover {
color:#DDDDDD;
border-color:#DDDDDD;
}
`
const Container = styled.div`
position: relative;
top: 550px;
text-align:center;

.break{
  position: absolute;
  left: 560px;
  top: 25px;
}
img{
  width: 400px;
}

.item-container{
  position: relative;
  top: 50px;
  height: 800px;
  width: 1000px;
  left: 280px;
  border: 3px solid green;
  display: flex;
  
}
.card {
  position: relative;
  border: 3px solid black;
  text-align: center;
  padding: 100px;
  width: 300px;
  border-radius: 5px;
  padding: 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.product-image {
  height: 100px;
  width: 200px;
}
`