import styled from "styled-components"
import React, { useState, useEffect } from "react"
import CheckoutDetails from "./CheckoutDetails"
import axios from "axios"

function CartCheckout() {
	const [product_ids, setProductIds] = useState([])
	// const product_id = ["6232dccf79c2d6fd0dae59a5", "6232dad579c2d6fd0dae59a3"] //do a /GET cart to get the products array
	const [count, setCount] = useState(0)
	const [gotten_products, setGottenProducts] = useState([])
	const [cart, setCart] = useState([])
	const [reload, setReload] = useState(false)
	const [prices, setPrices] = useState([])
	const [grandTotal, setGrandTotal] = useState([])

	const [occurrences, setOccurrences] = useState([])
	// var total = 0
	const [finalTotal, setFinalTotal] = useState([])
	const user = JSON.parse(localStorage.getItem("user")) || ""

	console.log("whole user", user)
	const user_id = user._id
	console.log("user id", user._id)
	//
	useEffect(() => {
		// console.log("user id is: ", user._id)
		axios
			.get(`http://localhost:5004/cart/${user_id}`)
			.then((response) => {
				// console.log("product ids: ", JSON.stringify(response.data))
				// console.log("product ids: ", response.data)
				setCart(response.data)
				// setProductId((product_id) => [...product_id, response.data])
			})
			.then(() => {
				setPrices([])
				setOccurrences([])
				for (let i = 0; i < cart.length; i++) {
					setPrices((prices) => [...prices, cart[i].product_object.price])
					setOccurrences((occurrences) => [...occurrences, cart[i].occurence])
				}
				setReload(true)
			})
			.then(() => {
				console.log(occurrences)
				console.log(prices)
			})
			.then(() => {
				var resolvedFlag = true

				let loop = () => {
					// return new Promise((resolve) => {

					// })
					return finalTotal
				}

				const mypromise = function calculateTotal() {
					return new Promise((resolve, reject) => {
						if (resolvedFlag == true) {
							setFinalTotal([])
							resolve(() => {
								for (let i = 0; i < prices.length; i++) {
									const total = prices[i] * occurrences[i]
									setFinalTotal((arr) => [...arr, total])
								}
								return finalTotal
							})
						} else {
							reject("Rejected")
						}
					})
				}

				mypromise()
					.then((res) => {
						console.log("my promise is", mypromise())
						setGrandTotal(res().reduce((a, b) => a + b, 0))
					})
					.then(() => {
						console.log("this is the response: ", grandTotal)
					})
					.catch((error) => {
						console.log("this is the error ", error)
					})
			})
	}, [reload])

	console.log("cart is", cart)

	const add = () => {
		setCount(count + 1)
	}
	const subtract = () => {
		if (count !== 0) {
			setCount(count - 1)
		}
	}

	const handleRemove = (product) => (e) => {
		//modify the current stateful list with a filter function
		// const newCart = cart.filter((product) => product.product_id !== product.product_object._id);
		axios
			.put(`http://localhost:5004/cart/remove/${user_id}`, [product])
			.then((response) => {
				console.log("deleted single product")
				setReload(true)
			})
		console.log("prod", product)
		setReload(true)
	}
	//
	if (cart.length != 0) {
		return (
			<Container>
				<Wrapper>
					<Title>Shopping Cart</Title>
					<TopButton type="filled">Continue Shopping </TopButton>
					{/*  */}
					<Bottom>
						{cart ? (
							cart.map((product, key) => (
								<Box key={key}>
									<Product>
										<ProductDetail>
											<img src={product.product_object.image} alt="tv" />
											<ProductName>
												{product.product_object.product_name}
											</ProductName>
											<button
												type="button"
												onClick={handleRemove(product.product_object._id)}
											>
												Remove
											</button>
										</ProductDetail>
									</Product>
									<Count>
										<p
											id="subtract"
											// onClick={subtract}
										>
											-
										</p>
										<p>{product.occurence}</p>
										<p id="add" onClick={add}>
											+
										</p>
									</Count>
									<ProductPrice>
										<p>{product.product_object.price * product.occurence}</p>
									</ProductPrice>
								</Box>
							))
						) : (
							<p>"Oops, no products"</p>
						)}
					</Bottom>
					<Hr />
					{/*  */}
					<Total>
						<p className="total">Total: {grandTotal}</p>
					</Total>
				</Wrapper>

				<CheckoutDetails />
			</Container>
		)
	} else {
		return <p>Oops, Nothing is cart</p>
	}
}

export default CartCheckout

const Container = styled.div`
	background: rgba(196, 196, 196, 0.2);
	width: 100%;
	margin: 70px 0 0 0;
	display: flex;
	flex-wrap: wrap;

	@media only screen and (min-width: 786px) {
		margin: 0;
	}
`

const Wrapper = styled.div`
	padding: 20px;
	align-items: center;
	height: 50vh;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		width: 50%;
		height: 90vh;
		overflow-y: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}
`
const Title = styled.div`
	font-style: bold;
	text-align: center;
	font-size: 20px;
	line-height: 29.3px;
`
const TopButton = styled.button`
	padding: 10px;
	font-weight: 300;
	cursor: pointer;
	margin: 0 0 20px 0;
	border-radius: 35px;
	border: none;
	background-color: black;
	color: white;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
	&:hover {
		box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
		transform: translate(0, -5px);
	}

	@media only screen and (min-width: 786px) {
		border: none;
		background-color: green;
		color: white;
	}
`
const Bottom = styled.div`
	/* height: 100vh; */
	justify-content: space-around;
	align-items: center;

	/* p {
		height: 100px;
	} */
`
const Box = styled.div`
	border: 1px solid lightgrey;
	margin: 10px 0;
	padding: 10px;
`
const Product = styled.div`
	display: flex;
	/* width: 50%; */
	margin: 10px 0;
	justify-content: space-between;
`
const ProductDetail = styled.div`
	padding: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 50%;
		padding: 0;
	}

	@media only screen and (min-width: 786px) {
		margin: 0 0 0 20px;
	}
`
const ProductName = styled.span`
	width: 100%;
	margin: 15px;
`
const ProductPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px auto;
`
const Count = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	border: 1px solid grey;
	margin: 0 auto;
	background-color: lightgrey;
	border-radius: 10px;
	height: 100%;
	width: 50%;

	#add {
		padding: 5px;
		font-size: 20px;
		font-weight: bold;

		:hover {
			background: lightgrey;
			cursor: pointer;
			border-radius: 30%;
		}
	}

	#subtract {
		padding: 5px;
		font-size: 20px;
		font-weight: bold;

		:hover {
			background: lightgrey;
			cursor: pointer;
			border-radius: 30%;
		}
	}
`
const Hr = styled.hr`
	background-color: #6c6a6a;
	border: none;
	height: 2px;
`

const Total = styled.div`
	border: 10 px solid red;
	margin: 10px 20px 0 0;
	display: flex;
	align-items: center;
	justify-content: center;

	.total {
		font-weight: bold;
		color: green;
		font-size: 20px;
	}

	@media only screen and (min-width: 786px) {
		margin: 20px 20px 0px 0;
		left: 480px;
	}
`
