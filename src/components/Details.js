import styled from "styled-components"

function Details() {
  return (
    <Container>
      <Form>
        <h1 className="details">Your Details</h1>
        <form>
          <input id="name" type="text" placeholder="Name" />
          <input
            id="phone"
            type="number"
            placeholder="Phone Number"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
          />
          <input id="area" type="text" placeholder="City" />
          <input id="info" type="text-area" placeholder="Delivery Info" />

          <h1 className="payment">Payment Details</h1>
          <input
            id="payment_number"
            type="number"
            placeholder="M-Pesa Number"
          />
          <Button> Checkout </Button>
        </form>
      </Form>
    </Container>
  )
}
export default Details

const Container = styled.div`
  /* border: 8px solid green; */
  /* background: #6c6a6a; */
  height: 100vh;
  border-radius: 30px 40px 40px 40px;
  
`
const Form = styled.div`
  /* border: 3px solid red; */
  background-color: #6c6a6a;
  height: 900px;
  display: flex;
  flex-direction: column;
  z-index:15;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  margin: 20px 50px 0 300px;
  border-radius: 30px 40px 40px 40px;

  form {
    /* border: 5px solid purple; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 20px 50px;
    margin: 15px 0;
    border-bottom: 1px solid lightgrey;
    font-size: 18px;
    outline: none;
  }

  .details {
    /* border: 3px solid blue; */
    color: white;
    align-self: center;
    /* margin: -10px 0 50px 0; */
  }

  .payment {
      font-size: 25px;
      color: white;
      align-self: center;
      margin-top: 50px;
      margin-bottom: 5px;
  }

  input {
    display: block;
    width: 90%;
    padding: .5rem .8rem .5rem .8rem;
    margin: 15px 0;
    border: none;
    border-bottom: 1px solid lightgrey;
    font-size: 18px;
    outline: none;
    color: white;
    background-color:transparent;
  } 
  input::placeholder {
      color: white;
  }
`
const Button = styled.button`
  padding: 20px;
  font-weight: 300;
  cursor: pointer;
  margin: 10px 0 20px 120px;
  border-radius: 35px;
  border: none;
  width: 200px;
  background-color: black;
  color: white;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`
