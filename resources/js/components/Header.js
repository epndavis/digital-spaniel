import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        let lastPosition = 0;
        window.addEventListener('scroll', function() {
            const currentPosition = this.pageYOffset,
                header = document.getElementById('header'),
                navbar = document.getElementById('navbar'),
                navHeight = navbar.offsetHeight;

            if (header.getBoundingClientRect().top < 0) {
                navbar.classList.add('sticky')

                if (header.getBoundingClientRect().top > -150 || currentPosition < lastPosition) {
                    navbar.style.top = 0;
                } else {
                    navbar.style.top = `-${navHeight}px` 
                }
            } else {
                navbar.classList.remove('sticky')
            }

            lastPosition = currentPosition;
        });
    }

    render() {
        return (
            <header id="header">
                <Navbar id="navbar" expand="lg">
                    <Link className='navbar-brand logo' to='/'>
                        <img src="/images/logo.png" alt="Digital Spaniel Logo" />
                    </Link>

                    <div class="menu">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Link className='navbar-brand' to='/services'>Services</Link>
                                <Link className='navbar-brand' to='/work'>Work</Link>
                                <Link className='navbar-brand' to='/about'>About</Link>
                                <Link className='navbar-brand' to='/blog'>Blog</Link>
                                <Link className='navbar-brand' to='/contact'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    </Navbar>
            </header> 
        )
    }
}

export default Header
