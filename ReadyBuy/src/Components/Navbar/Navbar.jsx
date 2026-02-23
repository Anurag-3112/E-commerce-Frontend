import React, { useContext } from 'react';
import './Navbar.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../assets/logo2.jpg';
import cart from '../assets/cart.jpg';
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const AppNavbar = () => {

    const { cartItems } = useContext(ShopContext);

    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
                    <img src={logo2} className="circle-img" />
                    <span className="brand-name">ReadyBuy</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">

                        <NavLink to="/" end className={({ isActive }) =>
                            isActive ? "nav-link active-menu" : "nav-link"
                        }>
                            Shop
                        </NavLink>

                        <NavLink to="/men" className={({ isActive }) =>
                            isActive ? "nav-link active-menu" : "nav-link"
                        }>
                            Men
                        </NavLink>

                        <NavLink to="/women" className={({ isActive }) =>
                            isActive ? "nav-link active-menu" : "nav-link"
                        }>
                            Women
                        </NavLink>

                        <NavLink to="/kids" className={({ isActive }) =>
                            isActive ? "nav-link active-menu" : "nav-link"
                        }>
                            Kids
                        </NavLink>

                    </Nav>

                    <Form className="d-flex align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>

                        <Link to="/login">
                            <Button variant="outline-primary" className="ms-2">
                                Login
                            </Button>
                        </Link>

                        <Link to="/cart" className="position-relative ms-3">
                            <img src={cart} alt="cart" className="cart-icon" />
                            <div className="nav-cart-count">
                                {getTotalCartItems()}
                            </div>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;