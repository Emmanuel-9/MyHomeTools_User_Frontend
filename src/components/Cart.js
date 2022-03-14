import styled from "styled-components"
import Add from "@mui/icons-material/Add"
import React, { useState } from "react"

function Cart() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }
  const subtract = () => {
    if (count != 0) {
      setCount(count - 1)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <TopButton type="filled">Continue Shopping</TopButton>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <img src="/images/juicer.png" alt="tv" />
                <Details>
                  <ProductName>Blender</ProductName>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Count>
            <p id="add" onClick={add}>
              +
            </p>
            <p>{count}</p>

            <p id="subtract" onClick={subtract}>
              -
            </p>
          </Count>
          <ProductPrice>Ksh 130,000</ProductPrice>
        </Bottom>
        <Hr />
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <img src="/images/juicer.png" alt="tv" />
                <Details>
                  <ProductName>Blender</ProductName>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Count>
            <p id="add" onClick={add}>
              +
            </p>
            <p>{count}</p>

            <p id="subtract" onClick={subtract}>
              -
            </p>
          </Count>
          <ProductPrice>Ksh 130,000</ProductPrice>
          <Hr />
        </Bottom>
        <Hr />
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <img src="/images/juicer.png" alt="tv" />
                <Details>
                  <ProductName>Blender</ProductName>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Count>
            <p id="add" onClick={add}>
              +
            </p>
            <p>{count}</p>

            <p id="subtract" onClick={subtract}>
              -
            </p>
          </Count>
          <ProductPrice>Ksh 130,000</ProductPrice>
          <Hr />
        </Bottom>
      </Wrapper>
      <BottomButton type="filled">Checkout</BottomButton> 
    </Container>
  )
}
export default Cart

const Container = styled.div`
  background: rgba(196, 196, 196, 0.2);
  height: 100vh;
`
const Wrapper = styled.div`
  padding: 30px;
  /* border: 1px solid black; */
  align-items: center;
`
const Title = styled.div`
  font-weight: 400;
  text-align: center;
  font-size: 25px;
  line-height: 29.3px;
  font-style: normal;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0 20px 0;
  border-radius: 35px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0px solid green;
`
const Info = styled.div`
  /* flex: 3; */
  /* border: 1px solid black; */
`
const Product = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  /* flex: 2; */

  img {
    width: 100px;
  }
  display: flex;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const ProductName = styled.span``

const ProductPrice = styled.div`
  /* width: 50px; */
  position: relative;
  right: 0;
  align-items: right;
  /* border: 1px solid red; */
`

const Count = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  border: 1px solid grey;
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
  background-color: #eee;
  border: none;
  height: 4px;
`
const BottomButton = styled.button`
  padding: 10px;
  font-weight: 600;
  position: absolute;
  left: 500px;
  cursor: pointer;
  margin: 0 0 20px 0;
  border-radius: 35px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"}; 
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }  
  
  `
