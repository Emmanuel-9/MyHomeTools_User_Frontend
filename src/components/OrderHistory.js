import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"

function OrderHistory() {
  const [data, setData] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)

  useEffect(() => {
    axios(`http://localhost:5004/orders/find`).then((res) => {
      console.log(res.data)
      setData(res.data)
    })()
  }, [])

  // const column = useMemo(
  //     () => {
  //         Header: "My Order History",
  //         columns: [
  //             {
  //                 Header: "Appliance"
  //                 accessor: "show."

  //         },
  //     ]

  //     }
  // )

  return (
    <Container>
      <Body>
        <Header>
          <h3> Your Order History</h3>
        </Header>
        <Details></Details>
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
