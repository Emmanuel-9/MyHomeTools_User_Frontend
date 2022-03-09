import React, { useState, useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

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



