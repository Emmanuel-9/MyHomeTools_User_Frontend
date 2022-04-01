import styled from "styled-components";
import Car from "../Images/car-side.png";
import Money from "../Images/dollar.png";
import Time from "../Images/time-twenty-four.png";
import Shield from "../Images/shield-check(1).png";


function Info() {
  return (
    <Container>
      <Card>
        <Icon>
          <img src={Car} alt={Car} className="car" />
        </Icon>
        <Right>
          <Heading>FREE SHIPPING AND RETURN</Heading>
          <Content>Free shipping on orders above 50,000</Content>
        </Right>
      </Card>
      <Card>
        <Icon>
            <img src = {Money} alt={Money} className="money" />
        </Icon>
        <Right>
          <Heading>MONEY BACK GUARANTEED</Heading>
          <Content>100% Money back guaranteed</Content>
        </Right>
      </Card>
      <Card>
        <Icon>
            <img src = {Time} alt={Time} className="time" />
        </Icon>
        <Right>
          <Heading>24/7 ONLINE SUPPORT</Heading>
          <Content>Providing 24 hours support</Content>
        </Right>
      </Card>
      <Card>
        <Icon>
            <img src = {Shield} alt={Shield} className="shield" />
        </Icon>
        <Right>
          <Heading>SECURE PAYMENT</Heading>
          <Content>Secure online payment</Content>
        </Right>
      </Card>
    </Container>
  )
}

export default Info

const Container = styled.div`
  width: 100%;
  /* height: 25vh; */
  /* border: 2px solid red; */
  display: flex;
  position: absolute;
  top: 480px;
  /* flex-wrap: inherit; */

@media (max-width: 768px){
    top:400px;
    /* width: 1000px; */
    overflow-x: scroll;
    
}

  
`;
const Card = styled.div`
  margin: 100px 20px;
  width: 500px;

  height: 90px;
  border: 0.5px solid grey;
  background-color: lightgrey;
  display: flex;
  border-radius: 5px;
  /* width: 500px; */

    
  @media (max-width: 768px){
    /* top:400px; */
    /* color: green; */
    width: 200px;
    overflow: hidden;
    /* margin: 0 20px; */
    /* border: none; */
    
    
}

`;
const Heading = styled.div`
  font-size: 15px;
  font-weight: 800;

  @media (max-width: 768px){
   font-size: 8px;
  }
`;
const Icon = styled.div`
  margin: auto auto;
  text-align: center;
  width: 50px;
  
  img {
    width: 60%;
    cursor: pointer;
  }

  @media (max-width: 768px){
  img{
      width: 35%;
  }
  }
`;
const Content = styled.div`
  font-size: 15px;

  @media (max-width: 768px){
   font-size: 8px;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 80%;
`
