import React, { useState } from "react";
import styled from "styled-components";



import "./CNav.css";
import { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";



const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: orange;
  font-family: 'Righteous', cursive;
`;

const Menu = styled.ul`
font-size:1.2rem;  
list-style: none;
  display: flex;
  align-items:center;
  gap:4em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;


const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  z-index:200;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
/* const role =localStorage.getItem('role');
let r;
if(role==="farmer"){
  r="f";
}else if(role === "merchant"){
  r="m";
} */
console.log(localStorage.getItem('role'))
const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    history.push("/login");
  };


  let location = useLocation();
  useEffect(() => { }, [location]);

  return (
    <>

      <Nav className="pad-y">

        <Logo><span className="text-greenyellow mb-0">digital</span>mandi</Logo>
        <Menu>
          <Item>


            <Link
              className={`${location.pathname === "/" ? "act" : " "
                }`}
              to="/"
            >
              Home
            </Link>

          </Item>

          <Item>
            <Link
              className={`${location.pathname === "/about" ? "act" : " "
                }`}
              to="/about"
            >
              About Us
            </Link>

          </Item>

          {!localStorage.getItem("token") ? (
            <>
              <Item>
                <Link
                  className={
                    `${location.pathname === "/login" ? "act" : " "
                    }`
                  }
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
              </Item>
              <Item>
                <Link
                  className={
                    `${location.pathname === "/signup" ? "act" : " "
                    }`
                  }
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </Item>
            </>
          ) : (
            <>
              <Item>
                <Link
                  className={` ${location.pathname === `/${localStorage.getItem('role')}dashboard" ? "act" : " `
                    }`}
                  to={`/${localStorage.getItem('role')}dashboard`}
                >
                  Dashboard
                </Link>
              </Item>

              <Item>
                <Link>
                  <button onClick={handleLogout} className="btn btn-success">
                    {" "}
                    Logout
                  </button>
                </Link>
              </Item>
            </>
          )}


        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />

        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>


            <Link
              className={`${location.pathname === "/" ? "act" : " "
                }`}
              to="/" onClick={() => toggleNav(!toggle)}
            >
              Home
            </Link>

          </Item>

          <Item>
            <Link
              className={`${location.pathname === "/about" ? "act" : " "
                }`}
              to="/about" onClick={() => toggleNav(!toggle)}
            >
              
              About Us
            </Link>

          </Item>

          {!localStorage.getItem("token") ? (
            <>
              <Item>
                <Link
                  className={`${location.pathname === "/login" ? "act" : " "
                    }`}
                  to="/login" onClick={() => toggleNav(!toggle)}
                  role="button" 
                >
                  Login
                </Link>
              </Item>
              <Item>
                <Link
                  className={`${location.pathname === "/signup" ? "act" : " "
                    }`}
                  to="/signup" onClick={() => toggleNav(!toggle)}
                  role="button" 
                >
                  Signup
                </Link>
              </Item>
            </>
          ) : (
            <>
              <Item>
                <Link
                 className={` ${location.pathname === `/${localStorage.getItem('role')}dashboard" ? "act" : " `
                }`}
              to={`/${localStorage.getItem('role')}dashboard`} onClick={() => toggleNav(!toggle)}
            >
              Dashboard
                </Link>
              </Item>

              <Item>
                <Link>
                  <button /* onClick={handleLogout} */ onClick={() => {toggleNav(!toggle); handleLogout();}} className="">
                    {" "}
                    Logout
                  </button>
                </Link>
              </Item>
            </>
          )}


        </OverlayMenu>
      </Overlay>


    </>
  );
};

export { Navbar }