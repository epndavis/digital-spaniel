import React from 'react'
import { Link } from 'react-router-dom'

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
                <nav id="navbar" className='navbar navbar-expand-md navbar-light'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <Link className='navbar-brand' to='/'>Home</Link>
                            </div>
                            <div className="col-6">
                                <Link className='navbar-brand' to='/services'>Services</Link>
                                <Link className='navbar-brand' to='/work'>Work</Link>
                                <Link className='navbar-brand' to='/about'>About</Link>
                                <Link className='navbar-brand' to='/blog'>Blog</Link>
                                <Link className='navbar-brand' to='/contact'>Contact</Link>
                            </div>
                        </div>          
                    </div>
                </nav>
            </header> 
        )
    }
}

export default Header
