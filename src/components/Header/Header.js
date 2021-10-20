import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth()
    // active style for navbar
    const active = {
        fontWeight: "bold",
        color: "red",
        borderBlockStart: "3px solid #7842f5",
        borderBlockEnd: "3px solid #7842f5"
    };
    return (
        <Navbar className="p-0 m-0 " sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="p-0 m-0">
                <Navbar.Brand className="d-flex align-items-center mx-3">
                    MyClinic
                    {
                        user?.email && <div className="d-flex align-items-center">
                            <span className='nav-item text-white text-decoration-none fs-6 fst-italic'>{user.displayName}</span>

                        </div>
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     
                        <NavLink to='/home' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Home
                        </NavLink>
                        <NavLink to='/services' activeStyle={active} className='nav-item text-white text-decoration-none'>
                        services
                        </NavLink>

                        <NavLink to='/team' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Team
                        </NavLink>
                        <NavLink to='/contact' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Contact-Us
                        </NavLink>
                        <NavLink to='/feedback' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Feed-Back
                        </NavLink>
                    </Nav>
                    <Nav>
                        {
                            user?.email ?
                                <NavLink activeStyle={active} className='nav-item text-white text-decoration-none' onClick={logOut} to="/login">LogOut</NavLink>
                                :
                                <NavLink activeStyle={active} className='nav-item text-white text-decoration-none' to="/login">Log in</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >





    );
};

export default Header;