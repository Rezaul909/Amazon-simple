import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/OrderReview">
                Order Review
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} as={Link} to="#memes">
                {user ? (
                  <button onClick={handleSignOut} className="ms-4 rounded ">
                    Sign Out
                  </button>
                ) : (
                  <Link className="text-decoration-none text-white" to="/SignUp">Sign-Up</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="header-nav">
        <img src={logo} alt="" />
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/OrderReview">Order Review</Link>
          {user ? (
            <button onClick={handleSignOut} className="ms-4 rounded ">
              Sign Out
            </button>
          ) : (
            <Link to="/SignUp">Sign-Up</Link>
          )}
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
