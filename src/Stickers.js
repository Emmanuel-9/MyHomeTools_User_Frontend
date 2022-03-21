import styled from "styled-components";
import Car from "./Images/car-side.png";

function Info() {
  return (
    <Container>
      <Card>
        <Icon>
          <img src={Car} alt={Car} className="car" />
        </Icon>
        <Right>
          <Heading>Heading here</Heading>
          <Content>Sub heading</Content>
        </Right>
      </Card>
      <Card>
        <Icon>icon here</Icon>
        <Right>
          <Heading>Heading here</Heading>
          <Content>Sub heading</Content>
        </Right>
      </Card>
      <Card>
        <Icon>icon here</Icon>
        <Right>
          <Heading>Heading here</Heading>
          <Content>Sub heading</Content>
        </Right>
      </Card>
      <Card>
        <Icon>icon here</Icon>
        <Right>
          <Heading>Heading here</Heading>
          <Content>Sub heading</Content>
        </Right>
      </Card>
    </Container>
  );
}

export default Info;

const Container = styled.div`
  width: 100%;
  height: 25vh;
  /* border: 2px solid red; */
  display: flex;
  position: absolute;
  top: 500px;
`;
const Card = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 60px;
  border: 2px solid grey;
  background-color: lightgrey;
  display: flex;
  border-radius: 20px;
`;
const Heading = styled.div`
  /* border: 2px solid green; */
`;
const Icon = styled.div`
  /* border: 2px solid grey; */
  margin: auto auto;
  text-align: center;
  width: 100px;
  /* padding: 0 10px; */
  img {
    /* margin-right: 80px; */
    width: 60%;
    cursor: pointer;
    /* display: none; */
  }
`;
const Content = styled.div`
  /* border: 2px solid red */
`;
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  /* border: 1px solid gray; */
  width: 80%;
`;
