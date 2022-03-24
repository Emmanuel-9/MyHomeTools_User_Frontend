import styled from "styled-components"
import React, { useState, useEffect } from "react"
import CheckoutDetails from "./CheckoutDetails"
import axios from "axios"

function CartCheckout() {
  const product = []
  const product_id = ["6232dccf79c2d6fd0dae59a5", "6232dad579c2d6fd0dae59a3"]
  const [count, setCount] = useState(0)
  const gotten_products = []

  useEffect(() => {
    for (let i = 0; i < product_id.length; i++) {
      axios
        .get(`http://localhost:5004/product/${product_id[i]}`)
        .then((res) => {
          console.log(res.data)
          gotten_products.push(res.data)
        })
    }
    console.log("this is my gotten products", gotten_products)
  }, [])

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
          {gotten_products ? 
          gotten_products.map((product, key) => (
            // <>
              <Product key={key}>
                <ProductDetail>
                  <img src={product.image} alt="tv" />

                  <ProductName>{product.product_name}</ProductName>
                </ProductDetail>
                <Count>
                  <p id="subtract" onClick={subtract}>
                    -
                  </p>
                  <p>{count}</p>
                  <p id="add" onClick={add}>
                    +
                  </p>
                </Count>
                <ProductPrice>{product.price}</ProductPrice>
              </Product>
            
          )) : <p>"Oops, no products"</p>}
        </Bottom>

        <Hr />
        {/* 
        <Bottom>
          <Product>
            <ProductDetail>
              <img src="/images/dishwasher.png" alt="dishwasher" />

              <ProductName>Automatic Dishwasher</ProductName>
            </ProductDetail>
          </Product>
          <Count>
            <p
              id="subtract"
              onClick={() => {
                subtract()
              }}
            >
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

        <Hr /> */}

        <Total>
          <p className="total">Sub-Total: Ksh - 350,000</p>
        </Total>
      </Wrapper>

      <CheckoutDetails />
    </Container>
  )
}

export default CartCheckout

const Container = styled.div`
  background: rgba(196, 196, 196, 0.2);
  width: 100%;
  margin: 70px 0 0 0;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 786px) {
    margin: 0;
  }
`

const Wrapper = styled.div`
  padding: 20px;
  align-items: center;
  height: 50vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 90vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`
const Title = styled.div`
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
  border: 1px solid red;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`
const Product = styled.div`
  display: flex;
  width: 50%;
  margin: 10px 0;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50%;
    padding: 0;
  }

  @media only screen and (min-width: 786px) {
    margin: 0 0 0 20px;
  }
`
const ProductName = styled.span`
  width: 100%;
  margin: 15px;
`

const ProductPrice = styled.div`
  right: 0;
  align-items: right;
`

const Count = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
  background-color: lightgrey;
  border-radius: 10px;
  height: 100%;
  width: 20%;

  #add {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;

    :hover {
      background: lightgrey;
      cursor: pointer;
      border-radius: 30%;
    }
  }

  #subtract {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;

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
  margin: 10px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .total {
    font-weight: bold;
    color: green;
    font-size: 20px;
  }

  @media only screen and (min-width: 786px) {
    margin: 20px 20px 0px 0;
    left: 480px;
  }
`
