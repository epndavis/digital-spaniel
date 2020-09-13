import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-light'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">
                                <Link className='navbar-brand' to='/'>Home</Link>
                            </div>
                            <div class="col-6">
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
