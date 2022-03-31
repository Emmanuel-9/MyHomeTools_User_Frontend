import styled from "styled-components"
import axios from "axios"
import productImage from "../Images/product-1-thumbnail.png"
import { useEffect, useState } from "react"

function History() {
  const [orders, setOrder] = useState([])
  const user = JSON.parse(localStorage.getItem("user")) || ""
  console.log("whole user", user)
  const user_id = user._id
  console.log(user._id)

  useEffect(() => {
    axios
      .get(`http://localhost:5004/orders/find/${user_id}`)
      .then((response) => {
        console.log("orders: ", JSON.stringify(response.data))
        console.log("orders: ", response)
        setOrder(response.data.products)
      })
  }, [])
  console.log("orders are", orders)

  return (
    <Body>
      <Header>
        <h3> Your Order History</h3>
      </Header>
      <Content>
        {orders ? (
          orders.map((product, key) => (
            <div key={key} className="thumbnail">
              <img src={product.product_object.image} alt="coffee maker" />
              <div className="details">
                <p>
                  <br /> Quantity:
                  {"  " + product.occurence}
                  <br />
                  <strong>
                    Total Cost{" "}
                    {" " + product.occurence * product.product_object.price}
                  </strong>
                  <br />
                  <p id="date">
                    Ordered on: {Date(product.product_object.createdAt)}
                  </p>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>"Oops, no orders"</p>
        )}
      </Content>

      <button>View More</button>
    </Body>
  )
}

export default History

const Body = styled.div`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 20%);
  background-color: white;

  position: absolute;
  top: calc(100% + 25px);

  right: 50%;
  transform: translateX(50%);
  z-index: 1000;

  button {
    margin: 20px 20px 30px 20px;
    height: 55px;
    width: calc(100% - 40px);
    background-color: hsl(178°, 19%, 71%);
    border: none;
    border-radius: 10px;

    color: black;
    font-weight: 700;
    cursor: pointer;
    transition: 100ms ease;
    &:hover {
      background-color: hsl(158°, 96%, 10%);
    }
  }

  @media (max-width: 1340px) {
    right: 0;
    transform: translateX(30%);
  }

  @media (max-width: 769px) {
    left: 0;
    top: calc(100% + 10px);
    width: calc(100% - 20px);
    margin: auto;
    transform: translateX(0%);
    max-width: 350px;
  }
`

const Header = styled.div`
  border-bottom: solid 1px hsl(223, 64%, 95%);
  padding: 20px;
`

const Content = styled.div`
  padding: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .thumbnail {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding: 10px 0;
    width: 100%;

    img {
      /* margin: auto; */
      width: 30%;
      cursor: auto;
    }
    .details {
      font-size: 14px;
      /* border: 1px solid black; */
      overflow: hidden;
      /* #date {
        overflow: hidden;
        width: 100px;
        height: 30px;
      } */
    }
  }
`

const Hr = styled.hr`
  background-color: #6c6a6a;
  border: none;
  height: 2px;
`
