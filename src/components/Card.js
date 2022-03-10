import React from 'react'
import styled from 'styled-components'

function Card (){
  return(
      <ProductCard>
        <Image><img src="images/juicer.png" /></Image>
       <h1>Sencor SSJ  Juicer</h1>
       <h2> Amount Khs 45,000</h2>
       

      </ProductCard>
  )
}
const ProductCard = styled.div`
  width: 300px;
  /* background-image: url('images/juicer.png'); */
  height: 200px;

  
  border: solid 1px black;
  & h2 {
    color: black;
    
  }
`;
const Image = styled.div`
border: 1px solid black;

/* background-image: url('images/juicer.png');
  height: 2000px;
  width: 2000px; */
  /* background-image: url('images/juicer') ; */
  /* width: 100%;
  height: 100%; */
`

export default Card
