import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <footer class="container-fluid bg-light">
                <div class="container">
                    <div class="row footer-content">
                        <div class="col-6">
                            <div>
                                <h1>
                                    We're a brands <br />
                                    <span>best friend</span>
                                </h1>

                                <Link>Let's talk</Link>
                            </div>
                        </div>

                        <div class="col-6 links-container">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <h3>
                                        Explore
                                    </h3>

                                    <Link>Services</Link>

                                    <Link>Work</Link>

                                    <Link>About</Link>
                                    
                                    <Link>Blog</Link>

                                    <Link>Careers</Link>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <h3>
                                        Services
                                    </h3>

                                    <Link>Brand</Link>

                                    <Link>Development</Link>

                                    <Link>Marketing</Link>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <h3>
                                        Questions?
                                    </h3>

                                    <h5>
                                        Call us
                                    </h5>

                                    <a>
                                        0121 345 678
                                    </a>

                                    <h5>
                                        Email us
                                    </h5>

                                    <a>
                                        info@digitalspaniel.co.uk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>
                                Copyright © Digital Spaniel 2019. All rights reserved.   
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer