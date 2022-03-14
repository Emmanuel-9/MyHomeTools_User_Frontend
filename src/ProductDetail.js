import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import minus from "./Images/icon-minus.svg";
import plus from "./Images/icon-plus.svg";
import cart from "./Images/icon-cart.svg";


   function ProductDetail() {
    const [quantity, setQuantity] = useState(0);
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    //handlers
  const quantityHandler = (increment) => {
  if (increment) {
    setQuantity((prev) => (prev === 10 ? prev : prev + 1));
  } else {
    setQuantity((prev) => (prev === 0 ? prev : prev - 1));
  }
  };
    
    return (
        <Body>
        <Card>
            <Images>  
            <img src="/images/coffeemaker.png" alt="display image"/>
           
            </Images>

             <Details>
               <Same>

                <Name>
                  <h1>{thisProduct.name}</h1>
                </Name>

           <Price>
              <p className="original-price"> ksh  {thisProduct.price}</p>
              <p  className="discounted-price"> ksh  {thisProduct.discount}</p>
            </Price>
            
            <Availability>
              <p>Availability: </p>
              <p className="available">  {thisProduct.availability}</p>
           
            </Availability>
               </Same>
             
             <Description>
              <p className="description-heading"> Product Description </p>
              <p className="description-body">  {thisProduct.description}</p>
            </Description>
            
            <Quantity>
            <p className="quantity"> Quantity : </p>
            </Quantity>
            <Buttons>
                  <div
                  className="desc"
                  onClick={() =>{
                    quantityHandler (false);
                  }}>
                    <img src= {minus} alt= {minus} />
                  </div>
                
                  <div className="current-quantity">{quantity}</div>

                  <div 
                  className="inc"
                  onClick={() => {
                    quantityHandler(true);
                  }}
                  >
                    <img src={plus} alt={plus} />
                  </div>
            </Buttons>

<Checkout>

              <div className="add-to-cart">
                <button>
                  <img src= {cart} alt= {cart} /> Add to Cart
                </button>
              </div>
</Checkout>
            </Details>
            </Card>
        
        </Body>
    )
}
 
export default ProductDetail

const Body = styled.div`
/* border: 15px solid green; */
`

const Card = styled.div`
/* border: 1px solid black; */
display: flex;
padding: 5% 0;
/* justify-content: center; */

/* display: none; */
/* flex-direction: column; */

@media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  left:180px;
  top: 100px;
}
`
const Images = styled.div`
/* border: 4px solid red; */
width: 30%;
margin: auto 2%;
/* overflow: hidden; */

img{
  width: 100%;
}

`
const Details = styled.div`
/* border: 3px solid green; */
width: 100%;

`
const Same = styled.div`
/* border: 2px solid blue; */
/* width: 70%; */
padding: 0 0 0 30px;
margin: 0 auto;

@media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  /* border: 2px solid blue; */
  top:20px;
 
}

`
const Name = styled.div`
  /* border: 3px solid grey; */
  display: flex;
  /* justify-content: center; */
  /* align-self: center; */
  
  h1{
    margin: 1%  0;
    font-size: 20px;
    /* border: 3px solid green; */
    /* font-weight: bold; */
    /* text-transform: uppercase; */

  }

  @media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  /* border: 3px solid red; */
  justify-content: center;
 
}
`
const Price = styled.div`
  /* border: 3px solid grey; */
  display: flex;
  width: 60%;
  margin: 1% 0;
  justify-content: space-between;

.original-price{
  color: red;
  font-family: sans-serif;
  font-weight: bold;
}

.discounted-price{
  text-decoration: line-through 3px grey;
  color: lightgrey;
  font-weight: bold;
}

@media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  justify-content:space-around;
  /* width: 40%; */
 
 
}

`
const Availability = styled.div`
  display: flex;
  /* border: 1px solid green; */
  width: 75%;
  justify-content: space-between;
  margin: 1% 0;

  .available{
    color: green ;
  }

  @media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  justify-content:space-around;
 
}

`
const Description = styled.div`
/* border: 1px solid black; */
margin: 20px 0 0 0;
@media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
  left: 80px;
  top: 10px;
 
}


.description-heading{
  /* border: 1px solid black; */
  text-align: center;
  margin: 10px 0;

}

.description-body{
 display: flex;
 padding: 10px;
}

@media only screen and (min-width: 786px){
  width: 80%;
  position: relative;
 
}

`
const Quantity =styled.div`
position: absolute;
display: flex;
width: 20%;
padding: 10px;
margin: 10px 10px 0px 10px;


.quantity{
 
  margin: 10px auto;
  
}

@media only screen and (min-width: 786px){
  position: absolute;
  margin: 10px auto;
  left: 450px;
  
 }
`

const Buttons = styled.div`
display: flex;
/* border: 1px solid lightgrey; */
border-radius: 20px;
width: 30%;
margin: 10px auto;
padding: 10px;
/* background-color: grey; */
justify-content: space-between;
align-items: center;

div {
  display: flex;
  align-items: center;



  img{
    color: black !important;
    padding: 10px;

    :hover{
      background-color: lightgrey;
      padding: 10px;
      border-radius: 20px;
      cursor: pointer;
    }

}

}

@media only screen and (min-width: 786px){
  width: 18%;

}

`
const Checkout = styled.div`
/* border: 1px solid black; */
width: 30%;
display: flex;
justify-content: center;
margin: 0 auto;



button{
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  margin-right: 0;
}

@media only screen and (min-width: 786px){


}

`