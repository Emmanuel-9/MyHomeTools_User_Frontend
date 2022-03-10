import React, { useState, useRef } from "react"
// import axios from "axios"
import styled from "styled-components"
// import { useNavigate } from "react-router-dom"

function Register() {
	// const navigate = useNavigate("/")

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
		setPassword(e.target.value)
	}
	const handleConfirmPassword = (e) => {
		setPassword(e.target.value)
	}

	const register = (e) => {
		e.preventDefault()
	}

	return (
		<Container>
			<Form>
				<form onSubmit={register}>
					<p>Create an Account</p>
					<input
						type="text"
						ref={firstNameRef}
						placeholder="First Name"
						onChange={handleFirstName}
						
					/>

					<input
						type="text"
						ref={lastNameRef}
						onChange={handleLastName}
						placeholder="Last Name"
					/>

                    <input
						type="text"
						ref={phoneNumberRef}
						onChange={handleLastName}
						placeholder="Phone Number"
					/>

					<input
						type="email"
						ref={emailRef}
						onChange={handleEmail}
						placeholder="Email here"
					/>

					<input
						type="password"
						ref={passwordRef}
						onChange={handlePassword}
						placeholder="Password here"
					/>
					<input
						type="text"
						ref={lastNameRef}
						onChange={handleConfirmPassword}
						placeholder="Confirm Password here"
					/>

					<button type="submit">Register</button>
				</form>
			</Form>
		</Container>
	)
}

export default Register


const Container = styled.div`
	/* border: 1px solid black; */
	/* width: 50%; */
	height: 80vh;
	margin: auto;
	display: flex;
`
const Form = styled.div`
	/* border: 1px solid black; */
	margin: auto;
	/* padding: 20px; */
	/* width: 100%; */
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	form {
		/* border: 1px solid black; */
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		padding: 40px;
		/* width: 100%; */
		p {
			margin: 0 0 10px 0;
			border-bottom: 1px solid black;
			padding: 3px 20%;
		}
		input {
			outline: none;
			border: 1px solid lightgrey;
			padding: 5px;
			margin: 10px 0;
			width: 100%;
		}
		button {
			background: none;
			padding: 5px 15px;
			border-radius: 5px;
			margin: 20px 0 0 0;
			:hover {
				background-color: lightgrey;
				cursor: pointer;
			}
		}
	}
`
