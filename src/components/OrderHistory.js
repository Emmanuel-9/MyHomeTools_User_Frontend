import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"

function OrderHistory() {
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
        console.log("orders: ", response.data)
        setOrder(response.data)
      })
  }, [])
  console.log("orders are", orders)

  return (
    <Container>
      <Body>
        <Header>
          <h3> Your Order History</h3>
        </Header>
        <Details>
          order
        </Details>
      </Body>
    </Container>
  )
}
export default OrderHistory

const Container = styled.div`
  background-color: #f5f5f5;
  height: 50%;
`
const Body = styled.div`
  border: 1px solid red;
  width: 50%;
  align-self: center;
  margin: 50px;
`
const Header = styled.div``
const Details = styled.div``
