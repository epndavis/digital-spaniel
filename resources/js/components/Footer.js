import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <footer class="container-fluid bg-light">
                <div class="container">
                    <div class="row footer-content">
                        <div class="col-12 col-sm-6 mb-3">
                            <div>
                                <h1>
                                    We're a brands <br />
                                    <span>best friend</span>
                                </h1>

                                <Link class="link-primary">Let's talk</Link>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 links-container">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <h3>
                                        Explore
                                    </h3>

                                    <ul class="list-group">
                                        <li>
                                            <Link class="link-secondary">Services</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">Work</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">About</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">Blog</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">Careers</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <h3>
                                        Services
                                    </h3>

                                    <ul class="list-group">
                                        <li>
                                            <Link class="link-secondary">Brand</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">Development</Link>
                                        </li>

                                        <li>
                                            <Link class="link-secondary">Marketing</Link>
                                        </li>
                                    </ul>
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