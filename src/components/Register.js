import React, { useState, useRef } from "react"
// import axios from "axios"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Register() {
  const navigate = useNavigate("/")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const emailRef = useRef()
  const phoneNumberRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword( e.target.value )
    
    
  }

  
	const register = (e) => {
		e.preventDefault()
    if ( confirmPassword != password ) {
      alert( 'Passwords should match' )
      return
    }


		axios
			.post(
				`http://localhost:4000/auth/signup`, //insert the API route here
				{
					first_name: firstName,
					last_name: lastName,
          email,
          phone_number: phoneNumber,
					password: password,
				},
				{ credentials: "include" }
			)
			.then((response) => {
				response.status === 201 && alert("Registered Successfully")
				navigate("/")
				console.log(response.data.token)
				localStorage.setItem("token", response.data.token)
				console.log("cookie from the register method", document.cookie.token)
			})
			.catch((err) => {
				console.log(err)
				console.log(err.response.data)
				alert(err.response.data)
			})
	}

  return (
    <Container>
      <Logo>
        <img src="images/logo.png" alt="logo" />
      </Logo>
      <Wrapper>
        <img src="images/welcome_arab.png" />
      </Wrapper>
      <Right>
        <Form>
          <h1>Create an Account</h1>
          <form onSubmit={register}>
            <Name>
              <input
                className="name"
                type="text"
                ref={firstNameRef}
                placeholder="First Name"
                onChange={handleFirstName}
              />

              <input
                className="name"
                type="text"
                ref={lastNameRef}
                onChange={handleLastName}
                placeholder="Last Name"
              />
            </Name>

            <input
              type="phone"
              ref={phoneNumberRef}
              onChange={handlePhoneNumber}
              placeholder="Phone Number"
            />

            <input
              type="email"
              ref={emailRef}
              onChange={handleEmail}
              placeholder="Email here"
            />

            <Password>
              <input
                className="password"
                type="password"
                ref={passwordRef}
                onChange={handlePassword}
                placeholder="Password"
              />
              <input
                className="password"
                type="password"
                ref={confirmPasswordRef}
                onChange={handleConfirmPassword}
                placeholder="Confirm Password"
              />
            </Password>

            <button type="submit">Register</button>
          </form>

          <p id="login">
            Already have an account?
            <Link className="link" to="/login">
              {" "}
              <b className="bold">Login</b>
            </Link>
          </p>
        </Form>
      </Right>
    </Container>
  )
}

export default Register

const Container = styled.div`
  background: #b4c0c6;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`
const Logo = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 2000;
  width: 350px;
  padding: 0;

  img {
    width: 100%;
    padding: 0;
  }

  @media only screen and (max-width: 700px){
    width: 50%;
    margin: 30px 10px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    width: 50%;
    overflow: hidden;
    position: relative;
    left: 8%;
    padding: 0;
    z-index: 100;
  }

  @media only screen and (max-width: 700px) {
    width: 50%;
    img {
      width: 100%;
      /* height: 50%; */
      /* top: 30%; */
      left: 0px;
    
    }
  }
`

const Right = styled.div`
  background-color: #ffff;
  height: 100vh;
  width: 66%;
  position: absolute;
  right: 0;
  border-radius: 70px 0 0 70px;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    position: absolute;
  }
`

const Form = styled.div`
  z-index: 1000;
  position: absolute;
  right: 20px;
  width: 78%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;

  h1 {
    text-align: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      padding: 20px;
      margin: 30px 0;
      border: none;
      border-bottom: 1px solid lightgrey;
      font-size: 20px;
      outline: none;
    }
    button {
      padding: 20px;
      color: #ffff;
      background-color: #b4c0c6;
      font-weight: bold;
      font-size: 20px;
      margin: 20px 0;
      border: none;
      cursor: pointer;

      :hover {
        color: #000000;
        background-color: #ffff;
        border: 1px solid #b4c0c6;
      }
    }
  }

  #login {
    margin: 30px 0;
    font-size: 20px;
  }

  .link {
    text-decoration: none;
    color: #000000;
  }

  .bold {
    font-weight: bold;

    :hover {
      color: grey;
      cursor: pointer;
    }
  }


  @media only screen  and (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 87%;

    form{
      input{
        font-size: 14px;
        padding: 5px;
      }
    }
  }

`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .name {
    width: 43%;
  }
`

const Password = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .password {
    width: 43%;
  }
`
