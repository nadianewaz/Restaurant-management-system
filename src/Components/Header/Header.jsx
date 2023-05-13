import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <Container>
            {/* <Navbar.Toggle aria-controls='navbar-toggler' /> */}
            {/* <Navbar.Collapse id='navbar-collapse'> */}
            

               
                <Nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li> <Link to="/menu">Menu</Link></li>
                        <li> <Link to="/pages">Pages</Link></li>
                        <li> <Link to="/blog">Blog </Link></li>
                        <li> <Link to="/contact">Contact </Link></li>
                    
                    </ul>
                    </Nav>
            

           
            {/* </Navbar.Collapse> */}

        </Container>
            
        </>
    );
};

export default Header;