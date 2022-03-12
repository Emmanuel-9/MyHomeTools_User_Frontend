import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios, { AxiosError } from "axios"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(
          "http://localhost:4004/auth/login", //change the link
          {
            email,
            password,
          },
          { credentials: "include" }
        )
        .then((response) => {
          response.status === 201 && navigate("/")
          console.log("token for login is: ", response.data.token)
          localStorage.setItem("token", response.data.token)
        })
        .catch((error) => {
          console.log(error.message)
          if (error.message === "Network Error") {
            alert("Oops! Something went wrong. Please try again")
          } else if(error.message === "Request failed with status code 404") {
            alert("Invalid Credentials")
          }
        })
    } catch (e) {
      console.log( e)
    }
  }

  return (
    <Container>
      <Wrapper>
        <img src="images/login_green.png" />
      </Wrapper>
      <Right>
        <Form>
          {/* <Text> myHome Tools </Text> */}
          <h1> Hello, Welcome Back </h1>
          <form onSubmit={login}>
            <input
              id="email"
              type="text"
              required
              ref={emailRef}
              onChange={handleEmail}
              placeholder="Email Address"
            />
            <input
              id="password"
              type="password"
              required
              ref={passwordRef}
              onChange={handlePassword}
              placeholder="Password "
            />

            <button type="submit"> Login </button>
          </form>

          <p id="register">
            Don't have an account?{" "}
            <Link className="link" to="/register">
              <b>Register</b>{" "}
            </Link>{" "}
          </p>
        </Form>
      </Right>
    </Container>
  )
}

export default Login

const Container = styled.div`
  background: #9ec5ab;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  img {
    width: 50%;
    position: relative;
    left: -2%;
    padding: 0;
    z-index: 100;
  }

  @media only screen and (max-width: 700px) {
    img {
      width: 60%;
      left: -50px;
    }
  }
`

const Right = styled.div`
  background-color: #ffff;
  height: 100%;
  width: 66%;
  position: absolute;
  right: 0;
  border-radius: 70px 0 0 70px;
  display: flex;
  align-items: center;
  justify-content:center;

  @media only screen and (max-width: 700px) {
    padding: 0;
    right: 0;
    
  }
`

const Form = styled.div`
  z-index: 1000;
  position: absolute;
  right: 100px;
  width: 70%;
  /* border: 1px solid #9ec5ab; */
  height: 50%;
  display: flex;
  flex-direction: column;

  padding: 50px 30px;

  h1 {
    align-self: center;
    margin: -10px 0 50px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      padding: 20px;
      margin: 25px 0;
      border: none;
      border-bottom: 1px solid lightgrey;
      font-size: 20px;
      outline: none;

      :hover {
        border-bottom: 1px solid #9ec5ab;
      }
    }

    #email {
      margin: 0;
    }

    button {
      padding: 20px;
      color: #ffff;
      background-color: #9ec5ab;
      font-weight: bold;
      font-size: 20px;
      margin: 20px 0 40px 0;
      border: none;
      cursor: pointer;

      :hover {
        color: #9ec5ab;
        background-color: #ffff;
        border: 1px solid #9ec5ab;
      }
    }
  }

  #register {
    font-size: 20px;
  }

  .link {
    text-decoration: none;
    color: black;

    :hover {
      color: #9ec5ab;
    }
  }

  @media only screen  and (max-width: 768px) {
    right: 0;

    width: 80%;
    height: 60%;

    form {
      input {
        margin: 40px 0;
        padding: 20px;
        font-size: 15px;
      }

      button {
        padding: 20px;
        font-size: 15px;
      }
    }
  }
`
