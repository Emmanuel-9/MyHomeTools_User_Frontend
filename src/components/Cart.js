import styled from "styled-components"
import React, { useState } from "react"

function Cart() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }
  const subtract = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <TopButton type="filled">Continue Shopping </TopButton>

        <Bottom>
          <Product>
            <ProductDetail>
              <img src="/images/smart-tv.png" alt="tv" />
              <Details>
                <ProductName>LED Backlit Smart TV</ProductName>
              </Details>
            </ProductDetail>
          </Product>
          <Count>
            <p id="subtract" onClick={subtract}>
              -
            </p>
            <p>{count}</p>
            <p id="add" onClick={add}>
              +
            </p>
          </Count>
          <ProductPrice>Ksh 130,000</ProductPrice>
        </Bottom>

        <Hr />
        
        <Bottom>
          <Product>
            <ProductDetail>
              <img src="/images/dishwasher.png" alt="dishwasher" />
              <Details>
                <ProductName>Automatic Dishwasher</ProductName>
              </Details>
            </ProductDetail>
          </Product>
          <Count>
            <p id="subtract" onClick={subtract}>
              -
            </p>
            <p>{count}</p>
            <p id="add" onClick={add}>
              +
            </p>
          </Count>
          <ProductPrice>Ksh 160,000</ProductPrice>
        </Bottom>

        <Hr />

        <Bottom>
          <Product>
            <ProductDetail>
              <img src="/images/deep-frier.png" alt="deep-frier" />

              <ProductName>Deep Frier</ProductName>
            </ProductDetail>
          </Product>
          <Count>
            <p id="subtract" onClick={subtract}>
              -
            </p>
            <p>{count}</p>
            <p id="add" onClick={add}>
              +
            </p>
          </Count>
          <ProductPrice>Ksh 60,000</ProductPrice>
        </Bottom> 
  
        <Hr />
      </Wrapper>

      <Total>
        <p className="total">Sub-Total: Ksh - 350,000</p>
      </Total>
      <BottomButton type="filled">Checkout</BottomButton>
    </Container>
  )
}
export default Cart

const Container = styled.div`
  background: rgba(196, 196, 196, 0.2);
  height: 120vh;

  @media only screen and (min-width: 786px) {
    height: 40%
  }


`

const Wrapper = styled.div`
  padding: 20px;
  align-items: center;
`
const Title = styled.div`
  /* font-weight: 1500px; */
  font-style: bold;
  text-align: center;
  font-size: 20px;
  line-height: 29.3px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 300;
  cursor: pointer;
  margin: 0 0 20px 0;
  border-radius: 35px;
  border: none;
  background-color: black;
  color: white;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  @media only screen and (min-width: 786px) {
  border: none;
  background-color: green;
  color: white;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Product = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  padding: 0;
  width: 100%;
  /* border: 1px solid black; */

  img {
    width: 50%;
    /* border: 1px solid black; */
    padding: 0;
  }
  display: flex;

  @media only screen and (min-width: 786px) {
    position: relative;
    margin: 0 0 0 20px;
  }
`
const Details = styled.div`
  padding: 0 4px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid black; */
`
const ProductName = styled.span``

const ProductPrice = styled.div`
  position: relative;
  right: 0;
  align-items: right;
`

const Count = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  border: 1px solid grey;
  background-color: lightgrey;
  border-radius: 10px;
  height: 100%;

  #add {
    padding: 5px;

    :hover {
      background: lightgrey;
      cursor: pointer;
      border-radius: 30%;
    }
  }

  #subtract {
    padding: 5px;

    :hover {
      background: lightgrey;
      cursor: pointer;
      border-radius: 30%;
    }
  }
`
const Hr = styled.hr`
  background-color: #6c6a6a;
  border: none;
  height: 2px;
`

const Total = styled.div`
  border: 10 px solid red;
  position: absolute;
  right: 0;
  margin: 30px 20px 0 0;

  .total {
    font-weight: bold;
    color: green;
    font-size: 20px;
  }
`

const BottomButton = styled.button`
  padding: 10px;
  font-weight: 300;
  position: absolute;
  right: 0;
  cursor: pointer;
  margin: 80px 20px 0px 0;
  border-radius: 35px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  @media only screen and (min-width: 786px) {
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" && "green"};
    color: ${(props) => props.type === "filled" && "white"};
  }
`
// @media only screen and min-width: 786px;
