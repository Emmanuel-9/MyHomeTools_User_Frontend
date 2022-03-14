import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'

function Card() {
  // creating a state variable  (products) and a function that updates it (setProducts)
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetchProducts();
}, []);
//  creating a function called fetchProducts
function fetchProducts(){
  axios
    .get('https://dummyjson.com/products')

    // .then(res=>res.json())
    // .then(console.log);
    // .then((res) => {
    //   console.log(res);
    //   setProducts(res.data);
    // })
    .catch((err) => {
      console.log(err);
    });
  };
return (
  // creating div for products
  <Container>
    <FeaturedContainer>
    <h1>FEATURED PRODUCTS</h1>
    <Image>
        {<img id='top-image' src="/images/topping.png"></img> }
      </Image><br/>

    <ProductCard>
      <Image>
        {<img src="/images/juicer.png"></img> }
      </Image>
      <Content>
        <h3>Sencor SSJ  Juicer</h3>
        <p>sh 45,999</p>
      </Content>
      <Button>View Product</Button>

    </ProductCard>
    <ProductCard>
      <Image>
        <img src="/images/oven-glove-oizza.png"></img>
      </Image>
      <Content>
        <h3>Oven-glove</h3>
        <p>sh 15,229</p>
      </Content>
      <Button>View Product</Button>

    </ProductCard>
    <ProductCard>
      <Image>
        <img src="/images/pressure-cooking.png"></img>
      </Image>
      <Content>
        <h3>Pressure Cooker</h3>
        <p>sh 15,199</p>
      </Content>
      <Button>View Product</Button>

    </ProductCard>
    </FeaturedContainer>

    <BestSellerContainer>
    <h2>BEST SELLER PRODUCTS</h2>

    <ProductCard>
      <Image>
        <img src="/images/toster-sensor.png"></img>
      </Image>
      <Content>
        <h3>Toaster</h3>
        <p>sh 5,999</p>
      </Content>
      <Button>View Product</Button>

    </ProductCard>
    <ProductCard>
      <Image>
        <img src="/images/microwave.png"></img>
      </Image>
      <Content>
        <h3>Microwave</h3>
        <p>sh 35,449</p>
      </Content>
      <Button>View Product</Button>

    </ProductCard>

    </BestSellerContainer>
    <BrowsedProductsContainer>
    <h3>BROWSE PRODUCTS</h3>
    <ProductCard>
      <Image>
        <img src="/images/laundry.png"></img>
      </Image>
      <Content>
        <h3>Laundry</h3> 
      </Content>
      

    </ProductCard>
    <ProductCard>
      <Image>
        <img src="/images/television.png"></img>
      </Image>
      <Content>
        <h3>Television</h3>
      </Content>
      </ProductCard>
    </BrowsedProductsContainer>
    
  </Container> 
)


};
export default Card;

const Container = styled.div`
width: 1000px;
height: 100vh;
`
const FeaturedContainer = styled.div`
  border: solid black 1px;
  margin: 0 auto;
  display:flex;

  Image img top-image{
    border: 1px solid black;

  }
`
const BestSellerContainer = styled.div`
  border: solid black 1px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  padding:50px 50px;
  
  h2{
    left: 300px;
  }
`
const BrowsedProductsContainer = styled.div`
  border: solid black 1px;
  margin: 0 auto;
  display:flex;
`
// const Title = styled.div`
// text-align: center;
// color: #000000;
// font-weight: 350;
// font-size: 20px;
// left: 300px;
// top: 800px;
// ;


// `

const Products = styled.div`
display: flex;
flex-wrap: wrap;
width: 1000px;
height: 100vh;

`

const ProductCard = styled.div`
/* overflow: hidden; */
padding:0 0 30px ;
box-sizing:border-box;
border:1px solid #c4cace;
background-color:rgba(196,202,206,0.1) ;
/* position:absolute; */
width:300px;
height:250px;
/* left:133px; */
/* top:108px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-style: normal;
font-weight: 100;
font-size: 16px;

background: #FFFFFF;
border: 1px solid #C4CACE;
box-sizing: border-box;
border-radius: 20px;
margin:0 3% 0 0


`
const Content = styled.div``
const Button = styled.button``

const Image =styled.div`
width: 100%;
/* border: 1px solid black; */
align-items: center;
display: flex;
justify-content: center;
padding:1% 0;
img{
  width: 50%;
  /* align-self: center; */
}
`



















