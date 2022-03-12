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
    <Title>Best Seller Products</Title>
    <Products>

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
    </Products>
     
      </Container> 
)


};
export default Card;
const Container = styled.div`
width: 1000px;
height: 100vh;
`

const Title = styled.div`
text-align: center;
color: #000000;
font-weight: 500;
font-size: 26px;

`

const Products = styled.div`
display: flex;
flex-wrap: wrap;
width: 1000px;
height: 100vh;

`

const ProductCard = styled.div`
/* overflow: hidden; */
padding:0 0 30px;
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
font-family: 'Piazzolla';
font-style: normal;
font-weight: 100;
font-size: 16px;

background: #FFFFFF;
border: 1px solid #C4CACE;
box-sizing: border-box;
border-radius: 20px;


`
const Content = styled.div`

`
const Button = styled.button`

`

const Image =styled.div`
width: 100%;
/* border: 1px solid black; */
align-items: center;
display: flex;
justify-content: center;

img{
  width: 50%;
  /* align-self: center; */
}
`



















// import React from 'react'
// import styled from 'styled-components'

// function Card (){
//   return(
//       <ProductCard>
//         <Image><img src="images/juicer.png" /></Image>
//        <h1>Sencor SSJ  Juicer</h1>
//        <h2> Amount Khs 45,000</h2>
       

//       </ProductCard>
//   )
// }
// const ProductCard = styled.div`
//   width: 300px;
//   /* background-image: url('images/juicer.png'); */
//   height: 200px;

  
//   border: solid 1px black;
//   & h2 {
//     color: black;
    
//   }
// `;
// const Image = styled.div`
// border: 1px solid black;

// /* background-image: url('images/juicer.png');
//   height: 2000px;
//   width: 2000px; */
//   /* background-image: url('images/juicer') ; */
//   /* width: 100%;
//   height: 100%; */
// `

// export default Card
