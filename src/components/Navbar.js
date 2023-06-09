import Logo from "../Images/logo.png";
import Cart from "../Images/icon-cart.svg";
import Avatar from "../Images/image-avatar.png";
import Burger from "../Images/icon-menu.svg";
import Close from "../Images/icon-close.svg";
import HistoryIcon from "@mui/icons-material/History";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import {  useLocation } from "react-router-dom"

// import Cart from "./Cart";
import History from "./History";

function Navbar({ childToParent }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showHistory, setshowHistory] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const { pathname } = location;
  const user = localStorage.getItem("user");

  return (
    user !== "" && (
      <Nav>
        <Links>
          <img
            src={Burger}
            alt={Burger}
            className="burger"
            onClick={() => setShow((prev) => !prev)}
          />
          <img src={Logo} alt={Logo} className="logo" />

          <ul className={show ? "show" : ""}>
            <li>
              <img
                src={Close}
                alt={Close}
                className="close"
                onClick={() => setShow((prev) => !prev)}
              />
            </li>
            <li></li>
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <li></li>
            <li></li>
            <li></li>
            <Link className="link" to="products">
              <li>Products</li>
            </Link>
            {/* <li>Contact Us</li> */}
          </ul>
          <div
            className={show ? "overlay showOverlay" : "overlay"}
            onClick={() => setShow((prev) => !prev)}
          ></div>
        </Links>

        {location.pathname === "/" && (
          <Search>
            <SearchOutlinedIcon id="search-icon" />
            <input
              type="text"
              onChange={(event) => childToParent(event.target.value)}
              placeholder="Search for an appliance"
            />
          </Search>
        )}

        <Profile>
          <div className="cart">
            <div className="item-count"></div>
            <img
              src={Cart}
              alt={Cart}
              onClick={() => {
                navigate("/cart")
                setshowHistory(false)
                // setshowCart((prev) => !prev)
              }}
            />
            {/* {showCart && <CartComp />} */}
          </div>
          <div className="history">
            <HistoryIcon
              className="history-icon"
              onClick={() => {
                setshowCart(false);
                setshowHistory((prev) => !prev);
              }}
            />
            {showHistory && <History />}
          </div>
          <div className="avatar">
            <img
              src={Avatar}
              alt={Avatar}
              onClick={() => {
                console.log("logout");
                localStorage.setItem("token", "");
                localStorage.setItem("user", "");
                navigate("/login");
              }}
            />
          </div>
        </Profile>
      </Nav>
    )
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2000;
  max-width: 1152px;
  top: 0;
  margin: auto;
  border-bottom: solid 1px hsl(223, 64%, 95%);

  @media (max-width: 1212px) {
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    height: 70px;
    padding: 30px 20px;
    margin: 0;
    border-bottom: none;
  }
`;
const Search = styled.div`
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  width: 35%;
  margin: 0 9 0 5%;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  #search-icon {
    cursor: pointer;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    margin: 0 0 0 5px;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    position: relative;
    left: -10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    width: 100px;
    margin-right: 10px;
    margin-left: -80px;
	cursor: pointer;
  }

  .burger {
    margin-right: 80px;
    cursor: pointer;
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;

    .close {
      display: none;
    }

    .link {
      text-decoration: none;
    }

    li {
      display: flex;
      align-items: center;
      margin: 0 15px;
      color: hsl(219, 9%, 45%);
      cursor: pointer;
      height: 100%;
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 0%;
        background-color: #a6c2c1;

        position: absolute;
        bottom: 0;
        left: 0;
        transition: 500ms ease;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
    li:nth-of-type(1) {
      &:hover {
        &::after {
          width: 0%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .burger {
      display: block;
    }
    ul {
      position: fixed;
      top: 0;
      left: -100%;
      background-color: white;
      width: 70%;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 20px;
      z-index: 200;
      transition: 500ms ease;

      .close {
        display: block;
        margin-bottom: 40px;
      }

      li {
        padding: 0;
        margin: 0;
        height: 50px;
        font-weight: 700;
        color: black;
      }
    }

    .show {
      left: 0;
    }

    .overlay {
      height: 100vh;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      pointer-events: none;
      opacity: 0;
      background-color: hsl(0, 0%, 0%, 75%);
      transition: 500ms ease;
    }

    .showOverlay {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .cart {
    position: relative;
    margin-right: 50px;
    width: 30px;
    height: 30px;
    /* border: 1px solid black; */

    img {
      cursor: pointer;
      transition: 200ms ease;
      /* width: 100%; */
      z-index: 1;
    }

    .item-count {
      background-color: #a6c2c1;
      font-size: 9px;
      width: 18px;
      font-weight: bold;
      border-radius: 9px;
      color: white;
      text-align: center;
      transform: translate(10px, 8px);
      z-index: 2;
    }
  }
  .history {
    position: relative;
    margin-right: 20px;
    width: 30px;
    height: 30px;

    .history-icon {
      color: grey;
      cursor: pointer;
      /* width: 100%; */
      /* border: 1px solid gray; */

      transition: 200ms ease;
      z-index: 1;
    }
  }
  .avatar {
    img {
      width: 80px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .cart {
      margin-right: 10px;
      position: initial;
    }

    .avatar {
      img {
        width: 60px;
      }
    }
  }
`;
