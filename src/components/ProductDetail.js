import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import minus from "../Images/icon-minus.svg"
import plus from "../Images/icon-plus.svg"
import cart from "../Images/icon-cart.svg"

function ProductDetail() {
  const [quantity, setQuantity] = useState(0)
  const [products, setProducts] = useState([])
  const { productId } = useParams()
  const { userId } = useParams() //returns the object of the params for the route rendered

  const user = localStorage.getItem("user")
  console.log(user)

  useEffect(() => {
    fetchProduct()
  }, [])

  console.log(userId)
  const quantityHandler = (increment) => {
    if (increment) {
      setQuantity((prev) => (prev === 10 ? prev : prev + 1))
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1))
    }
  }

  const fetchProduct = () => {
    axios
      .get(`http://localhost:5004/product/${productId}`)
      .then((res) => {
        console.log(res)
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleAddToCart = () => {
    const user_id = localStorage.setItem("user_id")
    axios
      .get(`http://localhost:5004/cart/`)
      .then((res) => {
        if (cart === null) {
          console.log(user_id)
          axios.post(`http://localhost:5004/cart/${userId}`)
          // .then((res) => {
          //   //pass product id
          // })
        } else {
          console.log(user_id)
          axios.put(`http://localhost:5004/cart/${userId}`)
          // .then((res) => {
          //   //pass product id
          // })
        }
      })
      .catch((err) => {
        console.log("There was an error adding to cart")
      })
  }

  return (
    <Body>
      <Card>
        <Images>
          <img className="product-image" src={products.image} alt="" />
        </Images>

        <Details>
          <Same>
            <Name>
              <h1>{products.product_name}</h1>
            </Name>

            <Price>
              <p className="original-price"> ksh {products.price}</p>
              <p className="discounted-price">
                {" "}
                ksh {products.price - products.discount}
              </p>
            </Price>

            <Availability>
              <p>Availability: </p>
              <p className="available"> {products.availability}</p>
            </Availability>
          </Same>

          <Description>
            <p className="description-heading"> Product Description </p>
            <p className="description-body"> {products.description}</p>
          </Description>

          <Quantity>
            <p className="quantity"> Quantity: </p>
          </Quantity>
          <Buttons>
            <div
              className="desc"
              onClick={() => {
                quantityHandler(false)
              }}
            >
              <img src={minus} alt={minus} />
            </div>

            <div className="current-quantity">{quantity}</div>

            <div
              className="inc"
              onClick={() => {
                quantityHandler(true)
              }}
            >
              <img src={plus} alt={plus} />
            </div>
          </Buttons>

          <Checkout>
            <div className="add-to-cart">
              <button onClick={handleAddToCart}>
                <img src={cart} alt={cart} /> Add to Cart
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
  height: 50%; ;
`

const Card = styled.div`
  display: flex;
  padding: 5% 0;
  position: relative;
  top: 10px;

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    left: 180px;
    top: 5px;
  }
`
const Images = styled.div`
  width: 50%;
  margin: auto 2%;

  img {
    width: 100%;
  }

  @media only screen and (min-width: 786px) {
    width: 35%;
    position: relative;
    top: -25px;
  }
`
const Details = styled.div`
  width: 100%;
  margin-top: 100px;

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    top: -80px;
    text-align: justify;
  }
`
const Same = styled.div`
  padding: 0 0 0 30px;
  margin: 0 auto;

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    top: 20px;
  }
`
const Name = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin: 1% 0;
    font-size: 35px;
  }

  @media only screen and (min-width: 786px) {
    width: 80%;
  }
`
const Price = styled.div`
  display: flex;
  width: 60%;
  margin: 1% 0;
  justify-content: space-between;

  .original-price {
    color: red;
    font-family: sans-serif;
    font-weight: bold;
  }

  .discounted-price {
    text-decoration: line-through 3px grey;
    color: lightgrey;
    font-weight: bold;
  }

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    justify-content: space-around;
    padding: 5px 150px 5px 150px;
  }
`
const Availability = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin: 1% 0;

  .available {
    color: green;
  }

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    justify-content: space-around;
    padding: 5px 150px 5px 150px;
  }
`
const Description = styled.div`
  margin: 20px 0 0 0;
  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
    left: 80px;
    top: 10px;
  }

  .description-heading {
    text-align: center;
    margin: 10px 0;
  }

  .description-body {
    display: flex;
    padding: 10px;
  }

  @media only screen and (min-width: 786px) {
    width: 80%;
    position: relative;
  }
`
const Quantity = styled.div`
  position: absolute;
  display: flex;
  padding: 10px;
  margin: 10px 10px 0px 10px;

  .quantity {
    margin: 10px auto;
  }

  @media only screen and (min-width: 786px) {
    position: absolute;
    margin: 10px auto;
    left: 150px;
  }
`

const Buttons = styled.div`
  display: flex;
  border-radius: 20px;
  width: 40%;
  margin: 10px auto;

  padding: 10px;
  background-color: #a6c2c1;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      padding: 10px;

      :hover {
        background-color: lightgrey;
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 786px) {
    width: 18%;
    border: 1px solid lightgrey;
    background-color: #a6c2c1;
    border-radius: 20px;
  }
`
const Checkout = styled.div`
  width: 70%;
  margin-left: 100px;
  /* display: inline-flex; */
  display: flex;
  justify-content: center;
  margin: 0 auto;

  button {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    width: 120%;
    margin-bottom: 20px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    margin-right: 0;
    background-color: #a6c2c1;

    :hover {
      cursor: pointer;
      background-color: grey;
    }
  }

  @media only screen and (min-width: 786px) {
  }
`
