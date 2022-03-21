import styled from "styled-components"

function CheckoutDetails() {
  return (
    <Container2>
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
    </Container2>
  )
}
export default CheckoutDetails

const Container2 = styled.div`
  /* height: 100vh; */
  /* border: 1px solid lightgrey; */
  width: 100%;
  /* border-radius: 30px 40px 40px 40px; */
  margin: 40px;

  @media only screen and (min-width: 786px) {
    /* align-items: center; */
    margin: 40px auto;
    /* background-color: green; */
    width: 30%;
    /* height: 100vh; */
  }
`
const Form = styled.div`
  background-color: #6c6a6a;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  border: 1px solid lightgrey;

  h1 {
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px 50px;
    /* margin: 15px 40px; */
    width: 100%;
    /* border-bottom: 1px solid lightgrey; */
    font-size: 18px;
    outline: none;
  }

  .details {
    color: white;
    align-self: center;
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
    /* width: 90%; */
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    margin: 15px 0;
    border: none;
    border-bottom: 1px solid lightgrey;
    font-size: 18px;
    outline: none;
    color: white;
    background-color: transparent;
  }
  input::placeholder {
    color: white;
  }

  @media only screen and (min-width: 786px) {
    /* align-items: center; */
    margin: 40px auto;
    /* background-color: green; */
    height: 100%;
    form{
      height: 100%;

      input{
        margin-bottom: 40px;
      }

    }
    /* width: 30%; */
    /* height: 100vh; */
  }
`
const Button = styled.button`
  padding: 20px;
  margin: 15px 0;
  font-weight: 300;
  cursor: pointer;
  /* margin: 10px 0 20px 120px; */
  border-radius: 35px;
  border: none;
  /* width: 200px; */
  background-color: black;
  color: white;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  
  @media only screen and (min-width: 786px) {
    /* align-items: center; */
    margin: 40px;
    
  }
`
