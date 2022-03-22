import styled from "styled-components"
import historyIcon from "../Images/history.png"
import productImage from "../Images/product-1-thumbnail.png"

function History() {
    return (
  <Body>
    <Header>
      <h3> Your Order History</h3>
    </Header>
    <Content>
      <div className="thumbnail">
        <img src={productImage} alt="coffee maker" />
      </div>
      <div className="details">
        <p>
          Order No: 1
          <br />
          2 items
          <br />
          <strong>Total Cost:ksh50.00</strong>
          Ordered on: 2022-04-1
        </p>
      </div>
    </Content>

    <Hr />

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
  padding: 20px;`

const Content = styled.div`
padding: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;

  .thumbnail {
    display: flex;
    align-items: center;
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      cursor: auto;
    }
  }
  .details {
    margin-right: 20px;
  }`

const Hr = styled.hr`
  background-color: #6c6a6a;
  border: none;
  height: 2px;
`
