import styled from "styled-components"
import productImage from "../Images/product-1-thumbnail.png"
import deleteIcon from "../Images/icon-delete.svg"

const Cart = () => {
  return (
    <Body>
      <Header>
        <h3>Cart</h3>
      </Header>
      <Content>
        <div className="thumbnail">
          <img src={productImage} alt="Coffee Maker" />
          <div className="details">
            <p>
              The best coffee maker...
              <br />
              ksh 25x2 <strong>ksh50.00</strong>
            </p>
          </div>
          <div className="delete">
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </Content>

      <button>Checkout</button>
    </Body>
  )
}

export default Cart

const Body = styled.div`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 20%);
  background-color: white;

  position: absolute;
  top: calc(100% + 25px);

  right: 50%;
  transform: translateX(50%);
  z-index: 100;

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
    /* margin-right: 20px; */
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px 0;
    width: 100%;
    img {
      margin: auto;
      width: 25%;
      /* width: 50px;
      height: 50px;
      border-radius: 5px; */
      cursor: auto;
    }
  }
  .details {
    /* margin-right: 20px; */
  }
`
