import React, { Component } from 'react';
import './Header.css'
// import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
    state = {
    } 
    render() { 
        return (
                <Navbar bg="header" variant='light' sticky='top' expand='md' collapseOnSelect>
                    <div className='container'>
                            <Navbar.Brand href="/">
                                <span data-text="Art Corner" className='logo'>Art Corner</span>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse>
                                <Nav className='navlist'>
                                    <Nav.Link as={NavLink} to='/gallary' href='/gallary'>Gallary</Nav.Link>
                                    <Nav.Link as={NavLink} to='/profile/4' href='/profile'>Profile</Nav.Link>
                                    <Nav.Link as={NavLink} to='/courses' href='/courses'>Courses</Nav.Link>
                                    <Nav.Link as={NavLink} to='/books' href='/books'>Books</Nav.Link>
                                    <Nav.Link as={NavLink} to='/about' href='/about'>About</Nav.Link>
                                    <Nav.Link as={NavLink} to='/login' href='/login'>Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </div>
                </Navbar>
        );
    }
}


export default Header;