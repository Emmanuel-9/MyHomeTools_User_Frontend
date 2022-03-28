import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Airfryer from "../Images/airfryer.png"
import Breakline from "../Images/breakline.png"
import Stickers from "./Stickers"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const FeaturedProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const user = localStorage.getItem("user")
  console.log(user)

  useEffect(() => {
    if (user === "") {
      navigate("/login")
    } else {
      navigate("/")
    }
    axios
      .get("http://localhost:5004/product/")
      .then((res) => {
        console.log(res)
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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

        <Stickers />
      </Banner>

      <Container>
        <h1 className="heading">FEATURED PRODUCTS</h1>

        <div className="break">
          <img src={Breakline} alt="break" />
        </div>

        <div className="item-container">
          {products.map((product) => (
            <div key={product._id} className="card">
              <img className="product-image" src={product.image} alt="" />
              <h3>{product.product_name}</h3>
              <p>{product.price}</p>

              <Link to={`/products/${product._id}`} className="btn2">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Body>
  )
}

export default FeaturedProducts

const Body = styled.div``

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .text1 {
    left: 0px;
    top: 180px;
    position: absolute;
    font-weight: 100;
  }
  .text2 {
    width: 500px;
    position: absolute;
    top: 250px;
    left: 0px;
    font-size: 30px;
  }

  .main-image {
    position: absolute;
    width: 200px;
    right: 0px;
    top: 290px;

    img {
      width: 100%;
    }
  }
  @media (min-width: 786px) {
    .text1 {
      left: 320px;
      top: 180px;
      position: absolute;
      font-weight: 100;
    }
    .text2 {
      width: 600px;
      position: absolute;
      top: 280px;
      left: 160px;
      font-size: 45px;
    }

    .main-image {
      position: absolute;
      width: 500px;
      right: 30px;
      top: 150px;

      img {
        width: 100%;
      }
    }
  }
`

const Buttons = styled.div`
  position: relative;
  top: 350px;
  left: 30px;
  width: 200px;
  text-align: center;
  border: 1px solid black;

  button {
    padding: 5px;
    border: 0.16em solid #ffffff;
    background-color: transparent;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-align: center;
    transition: all 0.15s;
  }

  :hover {
    color: #dddddd;
    border-color: #dddddd;
  }

  @media (min-width: 786px) {
    left: 320px;
  }
`
const Container = styled.div`
  position: relative;
  top: 550px;
  text-align: center;

  .break {
    position: absolute;
    left: 10px;
    top: 25px;

    @media (min-width: 786px) {
      position: absolute;
      left: 560px;
      top: 25px;
    }
  }
  img {
    width: 400px;
  }

  .item-container {
    position: relative;
    top: 50px;
    /* border: 3px solid green; */
    display: flex;
    flex-wrap: wrap;
    margin-left: 70px;
  }
  .card {
    border: 1px solid lightgrey;
    text-align: center;
    border-radius: 2px;
    padding: 1em;
    background-color: rgba(46, 107, 174, 0.01);
    margin: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .product-image {
      height: 200px;
      width: 200px;
    }

    p {
      color: green;
      margin: 10px 0;
    }
  }

  .btn2 {
    padding: 5px;
    border: 0.06em solid #000000;
    background-color: transparent;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-align: center;
    transition: all 0.15s;
    text-decoration: none;
    color: black;

    :hover {
      color: #dddddd;
      border-color: #dddddd;
    }
  }
`
